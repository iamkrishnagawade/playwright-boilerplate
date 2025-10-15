import {faker} from '@faker-js/faker';

export class DataGenerator {
    static getUser() {
        return {
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            password: faker.internet.password()
        };
    }

    static getProduct() {
        return {
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            price: parseFloat(faker.commerce.price()),
            description: faker.commerce.productDescription()
        }
    }
}