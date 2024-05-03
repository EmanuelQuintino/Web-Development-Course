import { describe, it, expect } from "vitest";
import { userRepositoriesInMemory } from "../repositories/userRepositoriesInMemory";
import { userServices } from "./userServices";

describe("test user services functions", () => {
  const user = {
    name: "Emanuel Quintino",
    email: "emanuelquintino@hotmail.com",
  };

  it("should create a user", async () => {
    const createUser = await userServices.create(user, userRepositoriesInMemory);
    expect(createUser).toHaveProperty("id");
  });
});
