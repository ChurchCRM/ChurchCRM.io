import { test, expect } from '@playwright/test';

/**
 * Smoke + responsive-layout checks for the site's highest-traffic pages.
 * Runs against the built `public/` directory (see playwright.config.js),
 * once per project (desktop-chromium, mobile-chromium).
 *
 * Scope is deliberately minimal: catch a broken page, a missing primary
 * CTA, or a layout that overflows horizontally -- not a full visual
 * regression suite. Assertions target structure (h1 count, link hrefs)
 * rather than translated copy, so they don't break when i18n strings change.
 */

const PAGES = [
  { name: 'homepage', path: '/' },
  { name: 'install', path: '/install.html' },
  { name: 'demo', path: '/demo.html' },
];

for (const { name, path } of PAGES) {
  test.describe(name, () => {
    test(`loads and has valid page structure (${path})`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      await expect(page).toHaveTitle(/ChurchCRM/);

      const h1 = page.locator('h1');
      await expect(h1).toHaveCount(1);
      await expect(h1).not.toHaveText('');
    });

    test(`has no horizontal overflow (${path})`, async ({ page }) => {
      await page.goto(path);
      const hasOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(hasOverflow).toBe(false);
    });

    test(`has no console errors (${path})`, async ({ page }) => {
      const errors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text());
      });
      page.on('pageerror', (err) => errors.push(err.message));

      await page.goto(path, { waitUntil: 'networkidle' });

      expect(errors).toEqual([]);
    });
  });
}

test.describe('primary CTA structure', () => {
  test('homepage links to both Demo and Install', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a[href*="demo.html"]').first()).toBeAttached();
    await expect(page.locator('a[href*="install.html"]').first()).toBeAttached();
  });

  test('install page links back to Demo', async ({ page }) => {
    await page.goto('/install.html');
    await expect(page.locator('a[href*="demo.html"]').first()).toBeAttached();
  });

  test('demo page links to the Softaculous demo instance', async ({ page }) => {
    await page.goto('/demo.html');
    await expect(page.locator('a[href*="softaculous.com/demos/churchcrm"]').first()).toBeAttached();
  });
});

test.describe('link underlines', () => {
  const decoration = (locator) => locator.evaluate((el) => getComputedStyle(el).textDecorationLine);

  test('navigation links are not underlined', async ({ page }) => {
    await page.goto('/');
    expect(await decoration(page.locator('a.navbar-brand'))).toBe('none');
    expect(await decoration(page.locator('a.nav-link').first())).toBe('none');
    expect(await decoration(page.locator('footer a').first())).toBe('none');
  });

  test('blog rows and in-page navigation are not underlined', async ({ page }) => {
    await page.goto('/blog/');
    expect(await decoration(page.locator('a.ed-post-row').first())).toBe('none');
    await page.goto('/tags/');
    expect(await decoration(page.locator('.breadcrumb a').first())).toBe('none');
    await page.goto('/demo.html');
    expect(await decoration(page.locator('nav[aria-label="On this page"] a').first())).toBe('none');
  });

  test('prose links are underlined', async ({ page }) => {
    await page.goto('/demo.html');
    expect(await decoration(page.locator('p a[href="https://www.softaculous.com"]'))).toBe('underline');
  });
});

test.describe('navbar', () => {
  test('pairs Install and Demo as the primary actions', async ({ page }) => {
    await page.goto('/');
    const ctas = page.locator('.ed-nav-ctas a');
    await expect(ctas).toHaveCount(2);
    await expect(ctas.nth(0)).toHaveAttribute('href', /install\.html$/);
    await expect(ctas.nth(1)).toHaveAttribute('href', /demo\.html$/);
    await expect(page.locator('.navbar-nav a.nav-link[href$="demo.html"], .navbar-nav a.nav-link[href$="install.html"]')).toHaveCount(0);
  });

  test('blog is top-level in English', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.navbar-nav > .nav-item > a.nav-link[href="/blog/"]')).toBeAttached();
    await expect(page.locator('.dropdown-menu a[href="/blog/"]')).toHaveCount(0);
  });

  test('blog stays under Community in languages without posts', async ({ page }) => {
    await page.goto('/es/');
    await expect(page.locator('.navbar-nav > .nav-item > a.nav-link[href="/blog/"]')).toHaveCount(0);
    await expect(page.locator('.dropdown-menu a[href="/blog/"]')).toBeAttached();
  });
});

test.describe('link-in-bio landing pages', () => {
  for (const network of ['instagram', 'facebook', 'linkedin', 'x']) {
    test(`/${network}.html tags network on view and CTA clicks`, async ({ page }) => {
      await page.goto(`/${network}.html`);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);

      await page.locator('main a[href*="demo.html"]').first().evaluate((a) => a.addEventListener('click', (e) => e.preventDefault()));
      await page.locator('main a[href*="demo.html"]').first().click();

      const events = await page.evaluate(() =>
        window.dataLayer.filter((e) => e[0] === 'event').map((e) => ({ name: e[1], ...e[2] }))
      );
      expect(events.find((e) => e.name === 'link_in_bio_view')?.social_network).toBe(network);
      const demo = events.find((e) => e.name === 'demo_click');
      expect(demo?.social_network).toBe(network);
      expect(demo?.cta_location).toBe('link_in_bio');
    });
  }
});
