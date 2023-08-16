import express from "express";
import { getSchoolAuditData, addSchoolDetails, updateSchoolDetails, deleteSchoolDetails } from "../controllers/school-audit-controller.js";

const auditRouter = express.Router();

auditRouter.get("", getSchoolAuditData);
auditRouter.post("/add", addSchoolDetails);
auditRouter.put("/update/:id", updateSchoolDetails);
auditRouter.delete("/:id", deleteSchoolDetails);

export default auditRouter;