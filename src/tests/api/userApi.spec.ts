import { test, expect } from "@playwright/test";
import { ApiHelper } from "../../utils/apiHelper";
import { Logger } from "../../utils/logger";
import { DataGenerator } from "../../utils/dataGenerator";

test.describe("User API Tests", () => {
    test("Create User - POST /users", async () => {
        const newUser = DataGenerator.getUser();
        Logger.info(`Creating user: ${JSON.stringify(newUser)}`);

        const response = await ApiHelper.post("/users", newUser) as any;
        expect(response.status).toBe(201);
        Logger.info(`User created successfully: ${JSON.stringify(response.data)}`);
    });

    test("Get Users - GET /users/", async () => {
        const response = await ApiHelper.get("/users") as any;
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        Logger.info(`Fetched users: ${JSON.stringify(response.data)}`);
    });
        
});