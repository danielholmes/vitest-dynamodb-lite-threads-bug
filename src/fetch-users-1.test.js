import { beforeAll } from "vitest";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import fetchUsers from "./fetch-users";

describe("fetchUsers 1", () => {
    let client;

    beforeAll(() => {
        client = new DynamoDBClient({
            ...(process.env.MOCK_DYNAMODB_ENDPOINT && {
                endpoint: process.env.MOCK_DYNAMODB_ENDPOINT,
                region: "local",
            }),
        });
    });

    afterAll(() => {
        client.destroy();
    });

    it("returns empty users", async () => {
        const users = await fetchUsers(client);

        expect(users).toEqual([]);
    })
})