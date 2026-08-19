import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';
import test from '@playwright/test';

// Location of the CSV file
const filePath = path.join(__dirname, 'utils', 'salesforce.csv');

// Read the CSV file
const csvData = fs.readFileSync(filePath);

// Convert the CSV data into JSON format
const readValue = parse(csvData, {
    columns: true,
    skip_empty_lines: true
});

// Print the values
console.log(readValue);

// Execute the test for every row in the CSV file
for (const read of readValue) {

    test(`Read value from CSV file ${read.username}`, async ({ page }) => {

        await page.goto('https://login.salesforce.com/?locale=in');

        await page.locator('#username').fill(read.username);

        await page.locator('#password').fill(read.password);

        await page.locator('#Login').click();
    });
}