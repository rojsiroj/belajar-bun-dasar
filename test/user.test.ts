import { describe, it, expect } from "bun:test";
import { User } from "user/user";

describe("User Package", () => {
  it("should accessed from main package", async () => {
    const user = new User("Siroj");
    expect(user.name).toBe("Siroj");
  });
});
