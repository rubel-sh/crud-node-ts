import { IUserCredentials } from "./user.interface";
import { delay } from "./user.utils";

const createUser = async ({ username, password }: IUserCredentials) => {
  await delay(50);
  return { username, password };
};

const getUsers = async (): Promise<IUserCredentials[]> => {
  await delay(50);
  return Array(10).fill({ username: "demo_user", password: "demo_password" });
};

const updateUser = async ({
  username,
  password,
}: IUserCredentials): Promise<IUserCredentials> => {
  await delay(50);
  return { username, password };
};

const deleteUser = async (userID: any): Promise<IUserCredentials> => {
  await delay(50);
  return { username: "demo_user", password: "demo_password" };
};

export const UserServices = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
