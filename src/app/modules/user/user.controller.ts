import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserServices } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const data = req.body;
  const createdUser = await UserServices.createUser(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully",
    data: createdUser,
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

const updateUser = catchAsync(async (req, res) => {
  const userID = req.params.userid;
  const updateData = req.query;
  console.log(updateData);

  const updatedUser = await UserServices.updateUser(updateData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User ${userID} is updated successfully`,
    data: updatedUser,
  });
});

export const UserControllers = {
  getUsers,
  createUser,
  updateUser,
};
