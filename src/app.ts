import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import router from "./app/routes";

const app: Application = express();

app.use(cors());

// PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

// TESTING
app.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    messsage: "SERVER IS RUNNING",
  });
});

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

export default app;
