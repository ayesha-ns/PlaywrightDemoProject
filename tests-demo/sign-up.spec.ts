import { test, expect } from '@playwright/test';
import { signupData } from '../testData/data';
import { mainPageTexts, signupTexts } from '../testData/texts';
import { signupLocators } from '../testData/locators'

test.beforeEach(async ({ page }) => {

      test.slow();

      await page.goto(mainPageTexts.mainLink);
      await page.locator(signupLocators.registerLink).click();
      await expect(page).toHaveTitle(signupTexts.registerTitle);
      console.log(signupData)

    });

test('Sign Up', async ({ page }) => {

  await page.locator(signupLocators.firstNameInput).fill(signupData.firstName);
  await page.locator(signupLocators.lastNameInput).fill(signupData.lastName);
  await page.locator(signupLocators.streetInput).fill(signupData.address);
  await page.locator(signupLocators.cityInput).fill(signupData.city);
  await page.locator(signupLocators.stateInput).fill(signupData.state);
  await page.locator(signupLocators.zipCodeInput).fill(signupData.zipCode);
  await page.locator(signupLocators.phoneNumberInput).fill(signupData.phoneNumber);
  await page.locator(signupLocators.ssnInput).fill(signupData.ssn);
  await page.locator(signupLocators.usernameInput).fill(signupData.username);
  await page.locator(signupLocators.passwordInput).fill(signupData.password);
  await page.locator(signupLocators.repeatedPasswordInput).fill(signupData.password);
  await page.locator(signupLocators.registerButton).click();

  await page.getByText(signupTexts.dashboard + signupData.username).isVisible();
  await page.getByText(signupTexts.message).isVisible();

});

test.afterEach(async ({ page }) => {

      await page.locator(signupLocators.logoutLink).click();
      await expect(page).toHaveTitle(mainPageTexts.mainLinkTitle);

    });