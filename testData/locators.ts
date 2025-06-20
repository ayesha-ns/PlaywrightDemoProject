export const signupLocators = {
  // Navigation
  registerLink: '//a[contains(@href,"register.htm")]',
  logoutLink: '//a[contains(@href,"logout.htm")]',

  // Registration Form Fields
  firstNameInput: '//input[@name="customer.firstName"]',
  lastNameInput: '//input[@name="customer.lastName"]',
  streetInput: '//input[@name="customer.address.street"]',
  cityInput: '//input[@name="customer.address.city"]',
  stateInput: '//input[@name="customer.address.state"]',
  zipCodeInput: '//input[@name="customer.address.zipCode"]',
  phoneNumberInput: '//input[@name="customer.phoneNumber"]',
  ssnInput: '//input[@name="customer.ssn"]',
  usernameInput: '//input[@name="customer.username"]',
  passwordInput: '//input[@name="customer.password"]',
  repeatedPasswordInput: '//input[@name="repeatedPassword"]',

  // Buttons
  registerButton: '//input[@value="Register"]',
};