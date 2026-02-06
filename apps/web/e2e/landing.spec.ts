import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test("should load successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/RIP Social/);
  });

  test("should display the main heading", async ({ page }) => {
    await page.goto("/");
    const heading = page.getByRole("heading", { name: "rip social" });
    await expect(heading).toBeVisible();
  });

  test("should navigate to issues page on Get Started click", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Get Started" }).click();
    await expect(page).toHaveURL(/.*issues/);
  });
});
