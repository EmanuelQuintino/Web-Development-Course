export type UserData = {
  id: string;
  name: string;
  email: string;
};

type UserRepository = {
  create(data: UserData): Promise<UserData | undefined>;
};

export const userServices = {
  async create(data: UserData, userRepository: UserRepository) {
    try {
      const { id, name, email } = data;

      const user = {
        id,
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
