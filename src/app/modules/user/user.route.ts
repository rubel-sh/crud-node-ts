import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.get("/", UserControllers.getUsers);
router.post("/create", UserControllers.createUser);
router.patch("/:userid", UserControllers.updateUser);
router.delete("/:userid", UserControllers.deleteUser);

export const UserRoutes = router;
