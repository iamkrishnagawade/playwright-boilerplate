import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    testDir: "./tests",
    timeout: 30 * 1000,
    retries: 1,
    use: {
        baseURL: process.env.BASE_URL || "http://localhost:3000",
        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
    },
    reporter: [["html", { outputFolder: "reports/html" }], ["list"], ["allure-playwright"]],
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] }
        },
        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] }
        }
    ]
});