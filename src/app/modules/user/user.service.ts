const createUser = async ({ username, password }: any) =>
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ username, password });
    }, 50);
  });

const getUsers = async () =>
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ username: "demo_user", password: "demo_password" });
    }, 50);
  });

const updateUser = async ({ username, password }: any) =>
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ username, password });
    }, 50);
  });

export const UserServices = {
  getUsers,
  createUser,
  updateUser,
};
