//username: tn-school-audit-admin
//password: mongodbadmin@12
//mongodb+srv://tn-school-audit-admin:Mongodbadmin12@cluster0.807ootn.mongodb.net/?retryWrites=true&w=majority

import express from "express";
import mongoose from "mongoose";
import auditRouter from "./routes/audit-routes";
import cors from "cors";

const app = express();

let corsOptions = {
  origin: "http://localhost:4200",
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/audit", auditRouter);

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.5"
  )
  .then(() => app.listen(3000))
  .then(() => console.log("DB connection successful"))
  .catch((error) => console.log(error));
