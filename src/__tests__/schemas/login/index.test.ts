import { describe, expect, it } from "vitest";
import { loginSchema } from "@/schemas";

describe("Login Schema", () => {
  it("should validate correct data", () => {
    const validData = {
      email: "flash@teste.com",
      password: "pessoamaisrapidadomundo",
    };

    expect(loginSchema.safeParse(validData).success).toBe(true);
  });
});
