import mongoose from "mongoose";
import School from "../models/School";

export const getSchoolAuditData = async (req, res, next) => {
  let schoolAuditData;

  try {
    schoolAuditData = await School.find();
  } catch (error) {
    console.log(error);
  }

  if (!schoolAuditData) {
    return res.status(404).json({ message: "No audit found" });
  }

  return res.status(200).json(schoolAuditData);
};

export const addSchoolDetails = async (req, res, next) => {
  const {
    udiseNo,
    schoolType,
    schoolName,
    district,
    headmasterName,
    headmasterRetirementDate,
    headmasterMobileNo,
    email,
    studentsStrength,
    teachersStrength,
    clericalStrength,
    lastAuditingYear,
    lastAuditingDate,
  } = req.body;

  const schoolDetails = new School({
    udiseNo,
    schoolType,
    schoolName,
    district,
    headmasterName,
    headmasterRetirementDate,
    headmasterMobileNo,
    email,
    studentsStrength,
    teachersStrength,
    clericalStrength,
    lastAuditingDate,
    lastAuditingYear
  });

  try {
    await schoolDetails.save();
  } catch (error) {
    console.log(error);
  }
  return res.status(201).json({ schoolDetails });

};
