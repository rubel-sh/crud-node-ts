import { Server } from "http";
import app from "./app";
import config from "./config/index";

let server: Server;

async function bootstrap() {
  try {
    console.log(`🛢   Database is connected successfully`);

    server = app.listen(config.port, () => {
      console.log(`Application  listening on port ${config.port}`);
    });
  } catch (err) {
    console.error("Failed to connect database", err);
  }
}

bootstrap();
