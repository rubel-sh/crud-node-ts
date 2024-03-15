import express from "express";
import { ChapterRoutes } from "../modules/user/user.route";

const router = express.Router();

router.use("/user", ChapterRoutes);

export default router;
