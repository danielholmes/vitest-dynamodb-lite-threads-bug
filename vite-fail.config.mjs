import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    // For node canvas. Was using threads, but was getting a segfault. See suggestion:
    // https://vitest.dev/guide/common-errors.html#segfaults-and-native-code-errors
    pool: "threads",
    poolOptions: {
      threads: {
        singleThread: true
      }
    },
    setupFiles: [
      "vitest-dynamodb-lite",
      "./src/setup-tests-fail.js"
    ]
  },
});