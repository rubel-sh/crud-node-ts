import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.get("/", UserControllers.getUsers);
router.post("/create", UserControllers.createUser);

export const ChapterRoutes = router;
