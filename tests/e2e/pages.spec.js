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
