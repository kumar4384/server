import School from "../models/School.js";

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

export const updateSchoolDetails = async (req, res, next) => {
  const { title, description } = req.body;
  console.log(title);
  console.log(description);
  const blogId = req.params.id;
  console.log(blogId);
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (error) {
    return console.log(error);
  }

  if (!blog) {
    return res.status(500).json({ message: "Unable to update the blog" });
  }

  return res.status(200).json({ blog });
};

export const deleteSchoolDetails = async (req, res, next) => {
  const id = req.params.id;
  let schoolDetails;
  try {
    schoolDetails = await School.findByIdAndRemove(id);
  } catch (error) {
    return console.log(error);
  }

  if (!schoolDetails) {
    return res.status(500).json({ message: "Unable to delete the school details" });
  }

  return res.status(200).json({ schoolDetails });
};
