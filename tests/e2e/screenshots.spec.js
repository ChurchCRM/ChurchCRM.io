import { test, expect } from '@playwright/test';

/**
 * Screenshots served from cdn.churchcrm.io, with language selection.
 * Runs against the built `public/` directory (see playwright.config.js).
 *
 * Covers: main pages and blog use CDN captures in the page language, the
 * /screenshots/ page (manifest, device toggle, locale selector, saved
 * choice), the seven localized pages, and their SEO tags. Needs network
 * access to cdn.churchcrm.io, which the site itself depends on.
 */

const CDN = 'https://cdn.churchcrm.io/screenshots';
const LANGS = ['es', 'pt', 'zh', 'fr', 'ru', 'de', 'ar'];
// Locales policy: English ships all captures; other locales ship only the
// key captures (about 26 visible screenshot cards). Non-English card-count
// floors must stay below that number, not at the old all-captures level.
const ALL_LANGS = ['en', ...LANGS];

// Screenshot cards currently shown (the page hides other locales with inline style)
const visibleCards = (page) =>
  page.evaluate(() =>
    [...document.querySelectorAll('.ed-shot-card[data-item-type="screenshot"]')]
      .filter((c) => c.style.display !== 'none')
      .map((c) => ({ locale: c.dataset.locale, src: c.querySelector('img').getAttribute('src') })),
  );

// First visible capture's current src and size attributes
const firstVisibleImage = (page) =>
  page.evaluate(() => {
    const img = [...document.querySelectorAll('.ed-shot-card img')].find((i) => i.closest('.ed-shot-card').style.display !== 'none');
    return { src: img.getAttribute('src'), w: img.getAttribute('width'), h: img.getAttribute('height') };
  });

// Collect any request for the old website-hosted screenshots
function trackLocalScreenshotRequests(page) {
  const hits = [];
  page.on('request', (r) => {
    if (/\/images\/screenshots\//.test(r.url())) hits.push(r.url());
  });
  return hits;
}

test.describe('main pages use CDN captures in the page language', () => {
  for (const [path, lang] of [['/', 'en'], ['/es/', 'es'], ['/ar/', 'ar']]) {
    test(`home ${path} -> ${lang}`, async ({ page }) => {
      const hits = trackLocalScreenshotRequests(page);
      await page.goto(path);
      const srcs = await page.$$eval('img[src*="cdn.churchcrm.io/screenshots"]', (is) => is.map((i) => i.getAttribute('src')));
      expect(srcs.length).toBeGreaterThanOrEqual(6);
      for (const s of srcs) expect(s).toContain(`/screenshots/${lang}/desktop/`);
      // the hero preload uses the same language
      await expect(page.locator(`link[rel="preload"][as="image"][href^="${CDN}/${lang}/desktop/"]`)).toHaveCount(1);
      expect(hits).toEqual([]);
    });
  }

  test('captured images carry width/height to avoid layout shift', async ({ page }) => {
    await page.goto('/');
    const missing = await page.$$eval('img[src*="cdn.churchcrm.io/screenshots"]', (is) =>
      is.filter((i) => i.getAttribute('width') !== '1440' || i.getAttribute('height') !== '900').length);
    expect(missing).toBe(0);
  });

  test('head preconnects to the CDN', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('link[rel="preconnect"][href="https://cdn.churchcrm.io"]')).toHaveCount(1);
  });

  test('blog post images and sharing tags use the CDN', async ({ page }) => {
    const hits = trackLocalScreenshotRequests(page);
    await page.goto('/blog/2026-09-19-managing-inactive-and-deceased-members.html');
    const og = await page.locator('meta[property="og:image"]').getAttribute('content');
    const tw = await page.locator('meta[name="twitter:image"]').getAttribute('content');
    expect(og).toMatch(/^https:\/\/cdn\.churchcrm\.io\/screenshots\/en\/desktop\/.+\.png$/);
    expect(tw).toBe(og);
    const imgs = await page.$$eval('main img', (is) => is.map((i) => i.getAttribute('src')));
    expect(imgs.filter((s) => s.includes('/images/screenshots/'))).toEqual([]);
    expect(imgs.some((s) => s.startsWith(`${CDN}/en/desktop/`))).toBe(true);
    expect(hits).toEqual([]);
  });
});

test.describe('/screenshots/ (English)', () => {
  test('lists all 8 languages, opens in English, shows only English captures', async ({ page }) => {
    const hits = trackLocalScreenshotRequests(page);
    const response = await page.goto('/screenshots/');
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    const options = await page.$$eval('#locale-selector option', (os) => os.map((o) => o.value));
    expect(options).toEqual(ALL_LANGS);
    await expect(page.locator('#locale-selector')).toHaveValue('en');
    const cards = await visibleCards(page);
    expect(cards.length).toBeGreaterThan(40);
    for (const c of cards) {
      expect(c.locale).toBe('en');
      expect(c.src).toContain(`${CDN}/en/desktop/`);
    }
    expect(hits).toEqual([]);
  });

  test('device toggle swaps to tablet and mobile captures', async ({ page }) => {
    await page.goto('/screenshots/');
    await page.click('[data-device="tablet"]');
    const tablet = await firstVisibleImage(page);
    expect(tablet.src).toContain('/en/tablet/');
    expect([tablet.w, tablet.h]).toEqual(['1024', '768']);
    await page.click('[data-device="mobile"]');
    const mobile = await firstVisibleImage(page);
    expect(mobile.src).toContain('/en/mobile/');
    expect([mobile.w, mobile.h]).toEqual(['430', '932']);
  });

  test('recordings play from the CDN', async ({ page }) => {
    await page.goto('/screenshots/');
    await page.click('[data-device="recordings"]');
    const sources = await page.$$eval('.ed-shot-card[data-item-type="video"] source', (s) => s.map((x) => x.getAttribute('src')));
    expect(sources.length).toBeGreaterThan(0);
    for (const s of sources) expect(s).toMatch(/^https:\/\/cdn\.churchcrm\.io\/videos\/.+\.webm$/);
  });

  test('a visible capture actually loads from the CDN', async ({ page }) => {
    await page.goto('/screenshots/');
    const img = page.locator('.ed-shot-card[data-locale="en"] img').first();
    await img.scrollIntoViewIfNeeded();
    await expect.poll(() => img.evaluate((i) => i.complete && i.naturalWidth), { timeout: 20_000 }).toBeGreaterThan(0);
  });

  test('language selector switches captures and the choice survives a reload', async ({ page }) => {
    await page.goto('/screenshots/');
    await page.selectOption('#locale-selector', 'pt');
    let cards = await visibleCards(page);
    expect(cards.length).toBeGreaterThan(20);
    for (const c of cards) {
      expect(c.locale).toBe('pt');
      expect(c.src).toContain(`${CDN}/pt/desktop/`);
    }
    expect(await page.evaluate(() => localStorage.getItem('screenshotLocale'))).toBe('pt');
    await page.reload();
    await expect(page.locator('#locale-selector')).toHaveValue('pt');
    cards = await visibleCards(page);
    for (const c of cards) expect(c.locale).toBe('pt');
  });

  test('theme toggle swaps to the dark capture and changes its label', async ({ page }) => {
    await page.goto('/screenshots/');
    const btn = page.locator('.ed-shot-card[data-locale="en"] .ed-shot-theme-btn').first();
    const label = await btn.textContent();
    await btn.click();
    expect(await btn.textContent()).not.toBe(label);
    const src = await btn.evaluate((b) => b.parentElement.querySelector('img').getAttribute('src'));
    expect(src).toContain('-dark.png');
  });
});

test.describe('localized /<lang>/screenshots/ pages', () => {
  for (const lang of LANGS) {
    test(`${lang}: page, language, captures, copy and SEO tags`, async ({ page, request }) => {
      const hits = trackLocalScreenshotRequests(page);
      const response = await page.goto(`/${lang}/screenshots/`);
      expect(response?.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', lang);
      if (lang === 'ar') await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');

      // opens on the page language
      await expect(page.locator('#locale-selector')).toHaveValue(lang);
      const cards = await visibleCards(page);
      expect(cards.length).toBeGreaterThan(20);
      for (const c of cards) expect(c.src).toContain(`${CDN}/${lang}/desktop/`);

      // page copy is translated, not the English strings
      await expect(page.locator('h1')).toHaveCount(1);
      expect(await page.locator('h1').textContent()).not.toBe('See ChurchCRM on every screen');
      const body = await page.locator('main, body').first().innerText();
      for (const english of ['Try live demo', 'Ready to try it yourself?', 'View full size']) expect(body).not.toContain(english);

      // SEO: title/description length, canonical, hreflang set, x-default -> English page
      expect((await page.title()).length).toBeLessThanOrEqual(62);
      const desc = await page.locator('meta[name="description"]').getAttribute('content');
      expect(desc.length).toBeGreaterThan(40);
      expect(desc.length).toBeLessThanOrEqual(160);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(`/${lang}/screenshots/$`));
      const alts = await page.$$eval('link[rel="alternate"][hreflang]', (ls) => Object.fromEntries(ls.map((l) => [l.getAttribute('hreflang'), l.getAttribute('href')])));
      expect(Object.keys(alts).sort()).toEqual([...ALL_LANGS, 'x-default'].sort());
      expect(alts['x-default']).toBe(alts.en);
      expect(alts.en).toMatch(/\/screenshots\/$/);
      expect(alts[lang]).toMatch(new RegExp(`/${lang}/screenshots/$`));

      // the navbar Screenshots link for this language resolves
      const navHref = await page.locator('a.dropdown-item[href$="/screenshots/"]').first().getAttribute('href');
      expect(navHref).toMatch(new RegExp(`/${lang}/screenshots/$`));
      expect((await request.get(navHref)).status()).toBe(200);
      expect(hits).toEqual([]);
    });
  }

  test('the old /<lang>/screenshots.html form is gone (one canonical URL)', async ({ request }) => {
    expect((await request.get('/pt/screenshots.html')).status()).toBe(404);
  });
});

test.describe('hreflang x-default', () => {
  test('points at the English version of the page, not the homepage', async ({ page }) => {
    await page.goto('/pt/faq.html');
    expect(await page.locator('link[hreflang="x-default"]').getAttribute('href')).toMatch(/\/faq\.html$/);
    await page.goto('/pt/');
    expect(await page.locator('link[hreflang="x-default"]').getAttribute('href')).toMatch(/^https?:\/\/[^/]+\/$/);
  });
});
