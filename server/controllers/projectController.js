import Project from "../models/Project.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "portfolioai/projects",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};
export const addProject = async (req, res) => {
  try {
    const {
      title,
      description,
      technologies,
      githubLink,
      liveLink,
      featured,
    } = req.body;

    let image = {
      url: "",
      public_id: "",
    };

    if (req.file) {
      const uploadedImage = await uploadToCloudinary(req.file.buffer);

      image = {
        url: uploadedImage.secure_url,
        public_id: uploadedImage.public_id,
      };
    }

    const project = await Project.create({
      user: req.user._id,
      title,
      description,
      technologies: technologies
        ? Array.isArray(technologies)
          ? technologies
          : technologies.split(",").map((item) => item.trim())
        : [],
      githubLink,
      liveLink,
      featured,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Project added successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//get my project 
export  const  getMyProject =async(req,res)=>{
    try{

        const projects=await Project.find({user:req.user._id})
        .sort({createdAt:-1});

        res.status(200).json({
            success:true,
            count:projects.length,
            projects
        });

    }catch(error){
      res.status(500).json({
        success:true,
        message:error.message
      })
    }
}

// Update Project
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Check Project Owner
    if (project.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // Upload new image if provided
    if (req.file) {
      // Delete old image from Cloudinary
      if (project.image?.public_id) {
        await cloudinary.uploader.destroy(project.image.public_id);
      }

      // Upload new image
      const uploadedImage = await uploadToCloudinary(req.file.buffer);

      req.body.image = {
        url: uploadedImage.secure_url,
        public_id: uploadedImage.public_id,
      };
    }

    // Convert technologies string to array if needed
    if (req.body.technologies) {
      req.body.technologies = Array.isArray(req.body.technologies)
        ? req.body.technologies
        : req.body.technologies.split(",").map((tech) => tech.trim());
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      project: updatedProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Delete Project
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Check Project Owner
    if (project.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    await project.deleteOne();

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Update Portfolio Template
// PATCH /api/portfolio/template
// ===============================

export const updateTemplate = async (req, res) => {
  try {
    const { template } = req.body;

    const allowedTemplates = [
      "modern",
      "creative",
      "glass",
      "developer",
    ];

    if (!template) {
      return res.status(400).json({
        success: false,
        message: "Template is required.",
      });
    }

    if (!allowedTemplates.includes(template)) {
      return res.status(400).json({
        success: false,
        message: "Invalid template selected.",
      });
    }

    const portfolio = await Portfolio.findOne({
      user: req.user.id,
    });

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found.",
      });
    }

    portfolio.template = template;

    await portfolio.save();

    return res.status(200).json({
      success: true,
      message: "Template updated successfully.",
      template: portfolio.template,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to update template.",
    });

  }
};