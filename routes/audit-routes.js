import express from "express";
import { getSchoolAuditData, addSchoolDetails } from "../controllers/school-audit-controller";

const auditRouter = express.Router();

auditRouter.get("", getSchoolAuditData);
auditRouter.post("/add", addSchoolDetails);

export default auditRouter;