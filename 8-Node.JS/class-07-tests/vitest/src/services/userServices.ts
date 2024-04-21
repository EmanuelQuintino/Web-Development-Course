import { randomUUID } from "node:crypto";

type UserData = {
  name: string;
  email: string;
};

type UserRepository = {
  create(data: UserData): Promise<UserData | undefined>;
};

export const userServices = {
  async create(data: UserData, userRepository: UserRepository) {
    try {
      const { name, email } = data;

      const user = {
        id: randomUUID(),
        name,
        email,
      };

      const userCreated = await userRepository.create(user);

      return userCreated;
    } catch (error) {
      console.error(error);
    }
  },
};
