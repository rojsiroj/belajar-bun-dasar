import { describe, it, expect } from "bun:test";
import { sayHello } from "../src/hello";

describe("Bun Test Runner", () => {
  it("should support unit test", async () => {
    const response = sayHello("Eko");
    expect(response).toBe("Hello Eko");
  });
  it("should support unit test with Budi", async () => {
    const response = sayHello("Budi");
    expect(response).toBe("Hello Budi");
  });
});
