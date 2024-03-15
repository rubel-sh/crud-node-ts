import express from "express";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: console.log("UserRoutes"), // path to module/user/user.route.ts routes
  },
];

// moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
