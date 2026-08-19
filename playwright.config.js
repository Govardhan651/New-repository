"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        headless: false,
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...test_1.devices['Desktop Chrome'],
            },
        },
        //{
        //  name: 'firefox',
        // use: {
        //  ...devices['Desktop Firefox'],
        // },
        // },
        // {
        // name: 'webkit',
        // use: {
        //   ...devices['Desktop Safari'],
        //},
        // },
    ],
});
