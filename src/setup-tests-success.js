console.log("import setupTests");
await import('vitest-dynamodb-lite' + `?cacheBust=${Date.now()}`);

beforeAll(() => {
    console.log("setupTests.beforeAll");
});
afterAll(() => {
    console.log("setupTests.afterAll");
});