import express from "express";
import cors from "cors";
import router from "./src/routes";
import db from "./src/models";

const app = express();

app.use(cors);
app.use("api/v1/", router);

const port = process.env.PORT || 4020;
app.listen(port, async () => {
  console.log(`Server started at port: ${port}`);
  try {
      await db.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
});
