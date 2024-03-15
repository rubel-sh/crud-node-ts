import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserServices } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const data = req.body;
  const listOfUsers = await UserServices.createUser(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully",
    data: listOfUsers,
  });
});

const getUsers = catchAsync(async (req, res) => {
  const listOfUsers = await UserServices.getUsers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Data Fetched Successfully",
    data: listOfUsers,
  });
});

export const UserControllers = {
  getUsers,
  createUser,
};
