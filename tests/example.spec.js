const {test, expect} = require('@playwright/test');
const {mainPageSteps} = require('/*YOUR PATH*/Task/mainPageComponentSteps/mainPageSteps.js')

test.beforeEach(async ({page}) => {
    await page.goto('https://growth.deel.training/dev/salary-insights')
});

const testData = [
    {role: 'Accountant', country: 'Brazil'},
    {role: 'QA Engineer', country: 'Canada'},
    {role: 'Software Engineer', country: 'Japan'}
]

for (const item of testData) {
    test(`Check salary for the ${item.role} role`, async ({page}) => {
        const mpSteps = new mainPageSteps(page)
        await mpSteps.fillRole(item.role)
        await mpSteps.clickFirstItemInRoleList()
        await mpSteps.fillCountry(item.country)
        await mpSteps.clickFirstItemInCountryList()
        await mpSteps.clickSearch()
        await mpSteps.checkSalaryTableIsEnabled()
        await mpSteps.checkRoleInFilter(item.role)
        await mpSteps.checkCountryInFilter(item.country)
    });
}
