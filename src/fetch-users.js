import { ScanCommand } from "@aws-sdk/client-dynamodb";

async function fetchUsers(client) {
    const { Items } = await client.send(new ScanCommand({
        TableName: "users"
    }));
    return Items ?? [];
}

export default fetchUsers;