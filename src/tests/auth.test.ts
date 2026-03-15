import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
describe("getAPIKey", () => {
  test("returns api key when authorization header is valid", () => {
    const headers = {
      authorization: "ApiKey my-secret-key",
    };

    expect(getAPIKey(headers)).toBe("my-secret-key");
  });

  test("returns null when authorization header is missing", () => {
    const headers = {};

    expect(getAPIKey(headers)).toBeNull();
  });
});
