const {test, expect} = require('@playwright/test');
export class mainPageSteps {
    constructor(page) {
        this.page = page;
    }

    async fillRole(text) {
        await this.page.getByLabel('Role').fill(text)
    }
    async clickFirstItemInRoleList() {
        await this.page.locator("xpath=//*[@id='mui-2-option-0']").click()
    }

    async fillCountry(text) {
        await this.page.getByLabel('Country').fill(text)
    }
    async clickFirstItemInCountryList() {
        await this.page.locator("xpath=//*[@id='mui-4-option-0']").click()
    }

    async clickSearch() {
        await this.page.getByRole('button', {name: 'Search'}).click()
    }

    async checkSalaryTableIsEnabled() {
        await this.page.locator("xpath=//*[@data-qa='salary-table']").isEnabled()
    }

    async checkRoleInFilter(text) {
        await this.page.locator(`xpath=//*[contains(@class,'deel-ui__typography__heading_6')][text()='${text}']`).isEnabled()
    }

    async checkCountryInFilter(text){
        await this.page.locator(`xpath=//*[contains(@class,'deel-ui__typography__heading_6')][text()='${text}']`).isEnabled()
    }
}