import { UserData } from "../services/userServices";

export const userRepositoriesInMemory = {
  async create(data: UserData) {
    try {
      const { id, name, email } = data;

      const user = {
        id,
        name,
        email,
      };

      const users = [];
      users.push(user);

      return users[users.length - 1];
    } catch (error) {
      console.error(error);
    }
  },
};
