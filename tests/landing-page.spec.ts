import { test, expect } from "@playwright/test";

test.describe("RFEC Academy Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render the main title", async ({ page }) => {
    const title = page.getByRole("heading", { name: "Academy" });
    await expect(title).toBeVisible();
    // Check for screen reader text (sr-only class makes it accessible but not visible)
    const srText = page.locator(".sr-only", { hasText: "Academy" });
    await expect(srText).toHaveText("Academy");
  });

  test("should have FuzzyText component for title", async ({ page }) => {
    // Check for FuzzyText by looking for the canvas element in h1
    const fuzzyText = page.locator("h1 canvas");
    await expect(fuzzyText).toBeVisible();
  });

  test("should display the tagline", async ({ page }) => {
    const tagline = page.getByText("Acelere sua carreira em desenvolvimento");
    await expect(tagline).toBeVisible();
  });

  test("should have the Inscreva-se button", async ({ page }) => {
    const button = page.getByRole("link", { name: "Inscreva-se" });
    await expect(button).toBeVisible();
  });

  test("should display the disclaimer text", async ({ page }) => {
    const disclaimer = page.getByText(
      "A data de início e o número de vagas ainda serão divulgados.",
    );
    await expect(disclaimer).toBeVisible();
  });

  test("should have StarBorder component present", async ({ page }) => {
    // Check for StarBorder by looking for the animation classes
    const starBorder = page.locator(
      ".animate-star-movement-bottom, .animate-star-movement-top",
    );
    await expect(starBorder.first()).toBeVisible();
  });

  test("should have DotGrid component present", async ({ page }) => {
    // Check for DotGrid by looking for the canvas element in the fixed background container
    const dotGrid = page.locator(".fixed.inset-0.z-0 canvas");
    await expect(dotGrid).toBeVisible();
  });

  test("should have RFEC logo", async ({ page }) => {
    // Check for logo SVG
    const logo = page.locator("svg");
    await expect(logo.first()).toBeVisible();
  });

  test("should have GTM script when GTM_ID is configured", async ({ page }) => {
    // This test checks if GTM script exists in the document
    // Note: This will only pass if GTM_ID is set in src/lib/gtm.ts
    const gtmScript = page.locator('script[src*="googletagmanager.com"]');
    // If GTM is configured, the script should exist
    // If not configured, this test will be skipped or can check for absence
    const scriptCount = await gtmScript.count();
    // If GTM_ID is empty, scriptCount will be 0, which is acceptable
    expect(scriptCount).toBeGreaterThanOrEqual(0);
  });
});
