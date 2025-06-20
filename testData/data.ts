import { faker } from '@faker-js/faker';

export const signupData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  zipCode: faker.location.zipCode('#####'),
  phoneNumber: faker.phone.number(), 
  ssn: faker.helpers.replaceSymbols('###-##-####'),
  username: faker.internet.username(),
  password: faker.internet.password({
    length: 12,
    memorable: true,
    pattern: /[0-9A-Z!@#\$%^&*]/,
  }),
};