import test from '@playwright/test';

test('multiple', async ({ page, context }) => {

    await page.goto('https://leafground.com/window.xhtml');

    await Promise.all([
        context.waitForEvent('page'),
        page.locator("//span[text()='Open Multiple']").click()
    ]);

    await page.waitForTimeout(3000);

    const pages = context.pages();
    console.log(pages.length);

    let webTable;

    for (const currentPage of pages) {

        await currentPage.waitForLoadState();

        const title = await currentPage.title();
        console.log(title);

        if (title === 'Web Table') {
            webTable = currentPage;
            break;
        }
    }

    if (webTable) {
        await webTable
            .locator('#form\\:j_idt89\\:globalFilter')
            .fill('India');
    }

    await page.bringToFront();
    await page.waitForTimeout(5000);
});