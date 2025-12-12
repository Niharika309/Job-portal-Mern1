import { Company } from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    console.log("Register company request:", req.body);
    console.log("User ID from token:", req.id);
    
    const { companyName } = req.body;
    
    // Check if user is authenticated first
    if(!req.id){
        console.log("User not authenticated - no req.id");
        return res.status(401).json({
            message:"User not authenticated",
            success:false,
        });
    }

    // Validate company name
    if (!companyName || companyName.trim() === '') {
      console.log("Company name validation failed:", companyName);
      return res.status(400).json({
        error: "Company name is required",
        success: false,
      });
    }

    // Check if company already exists
    let company = await Company.findOne({ name: companyName.trim() });
    if (company) {
      console.log("Company already exists:", companyName);
      return res.status(400).json({
        error: "Company already exists",
        success: false,
      });
    }

    // Create new company
    company = await Company.create({
      name: companyName.trim(),
      userId: req.id,
      logo: `https://via.placeholder.com/150x150/4F46E5/FFFFFF?text=${companyName.trim().charAt(0).toUpperCase()}`
    });

    console.log("Company created successfully:", company);
    return res.status(201).json({
      message: "Company registered successfully",
      success: true,
      company,
    });
  } catch (error) {
    console.error("Error in registerCompany:", error);
    res.status(500).json({ 
      error: "Internal server error",
      success: false 
    });
  }
};

export const getCompanies = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(404).json({
        message: "No companies found",
        success: false,
      });
    }

    return res.status(200).json({
      companies,
      success:true
    })


  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//get company by id
export const getCompanyById = async (req, res) => {
  try {
    console.log("Getting company by ID:", req.params.id);
    console.log("User ID from token:", req.id);
    
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      console.log("Company not found for ID:", companyId);
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    console.log("Company found:", company);
    return res.status(200).json({
      message: "Company found",
      success: true,
      company,
    });
  } catch (error) {
    console.error("Error in getCompanyById:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
export const updateCompany = async (req, res) => {
  try {
    console.log("Update company request:");
    console.log("Company ID:", req.params.id);
    console.log("User ID from token:", req.id);
    console.log("Request body:", req.body);
    console.log("File:", req.file);

    // Check if user is authenticated
    if(!req.id){
        console.log("User not authenticated - no req.id");
        return res.status(401).json({
            message:"User not authenticated",
            success:false,
        });
    }

    const { name, description, website, location } = req.body;
    const file = req.file;

    // Build update data object, only include fields that are provided
    const updateData = {};
    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (website) updateData.website = website;
    if (location) updateData.location = location;

    // Handle file upload
    if (file) {
      // Create URL for the uploaded file
      updateData.logo = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
      console.log("File uploaded successfully:", updateData.logo);
    }

    console.log("Update data:", updateData);

    // Find and update the company
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!company) {
      console.log("Company not found for ID:", req.params.id);
      return res.status(404).json({
        message:"Company not found",
        success: false
      });
    }

    console.log("Company updated successfully:", company);
    return res.status(200).json({
      message: "Company information updated successfully",
      success: true,
      company,
    });

  } catch (error) {
    console.error("Error in updateCompany:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
 