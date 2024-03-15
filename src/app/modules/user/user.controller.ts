import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { UserServices } from "./user.service";
import { IUserCredentials } from "./user.interface";
import { Request, Response } from "express";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const createdUser = await UserServices.createUser(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully",
    data: createdUser,
  });
});

const getUsers = catchAsync(async (req: Request, res: Response) => {
  const listOfUsers = await UserServices.getUsers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Data Fetched Successfully",
    data: listOfUsers,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const userID = req.params.userid;
  const updateData = req.query as IUserCredentials;
  const updatedUser = await UserServices.updateUser(updateData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User ${userID} is updated successfully`,
    data: updatedUser,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const userID = req.params.userid;
  const deletedUser = await UserServices.deleteUser(userID);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User ${userID} is Deleted Successfully`,
    data: deletedUser,
  });
});

export const UserControllers = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
