type UserData = {
  id: string;
  name: string;
  email: string;
};

export const userRepositoriesInMemory = {
  async create(data: UserData) {
    try {
      const { id, name, email } = data;

      const users = [];

      const user = {
        id,
        name,
        email,
      };

      users.push(user);

      return users[users.length - 1];
    } catch (error) {
      console.error(error);
    }
  },
};
