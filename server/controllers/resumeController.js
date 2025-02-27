// controllers/resumeController.js
const asyncHandler = require('express-async-handler');
const { StatusCodes } = require('http-status-codes');
const store = require('../store');

// @desc    Upload a resume
// @route   POST /api/resumes
// @access  Private
const uploadResume = asyncHandler(async (req, res) => {
  const {
    title,
    fileUrl,
    fileType,
    fileSize,
    skills,
    yearsOfExperience,
    location,
    metadata,
    parsedData
  } = req.body;

  // Validate required fields
  if (!title || !fileUrl || !fileType || !fileSize) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Please provide all required fields: title, fileUrl, fileType, fileSize'
    });
  }

  // Create resume record
  const resume = store.addResume({
    userId: req.user.id,
    title,
    fileUrl,
    fileType,
    fileSize,
    skills: skills || [],
    yearsOfExperience,
    location,
    metadata: metadata || {},
    parsedData: parsedData || null,
    isActive: true
  });

  res.status(StatusCodes.CREATED).json({
    success: true,
    data: resume
  });
});

// @desc    Get all user's resumes
// @route   GET /api/resumes
// @access  Private
const getUserResumes = asyncHandler(async (req, res) => {
  const resumes = store.getAllResumesByUser(req.user.id);
  
  // Sort by creation date (newest first)
  resumes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  res.status(StatusCodes.OK).json({
    success: true,
    data: resumes
  });
});

// @desc    Get a resume by ID
// @route   GET /api/resumes/:id
// @access  Private
const getResumeById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  
  const resume = store.getResume(id);

  if (!resume || resume.userId !== req.user.id) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Resume not found'
    });
  }

  res.status(StatusCodes.OK).json({
    success: true,
    data: resume
  });
});

// @desc    Update a resume
// @route   PUT /api/resumes/:id
// @access  Private
const updateResume = asyncHandler(async (req, res) => {
  const { id } = req.params;
  
  const resume = store.getResume(id);

  if (!resume || resume.userId !== req.user.id) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Resume not found'
    });
  }

  // Update resume
  const updatedResume = store.updateResume(id, req.body);

  res.status(StatusCodes.OK).json({
    success: true,
    data: updatedResume
  });
});

// @desc    Delete a resume
// @route   DELETE /api/resumes/:id
// @access  Private
const deleteResume = asyncHandler(async (req, res) => {
  const { id } = req.params;
  
  const resume = store.getResume(id);

  if (!resume || resume.userId !== req.user.id) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Resume not found'
    });
  }

  // Delete resume
  store.deleteResume(id);

  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Resume deleted successfully'
  });
});

// @desc    Check if resume matches room filters
// @route   POST /api/resumes/check-match
// @access  Private
const checkResumeMatch = asyncHandler(async (req, res) => {
  const { resumeId, filters } = req.body;
  
  // Find resume
  const resume = store.getResume(resumeId);

  if (!resume || resume.userId !== req.user.id) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: 'Resume not found'
    });
  }

  // Check filters
  let matches = true;
  const reasons = [];

  // Parse filters
  if (filters) {
    // Check skills
    if (filters.requiredSkills && filters.requiredSkills.length > 0) {
      const userSkills = resume.skills || [];
      const missingSkills = filters.requiredSkills.filter(
        skill => !userSkills.includes(skill)
      );
      
      if (missingSkills.length > 0) {
        matches = false;
        reasons.push(`Missing required skills: ${missingSkills.join(', ')}`);
      }
    }

    // Check experience
    if (filters.minYearsExperience && resume.yearsOfExperience < filters.minYearsExperience) {
      matches = false;
      reasons.push(`Not enough experience. Required: ${filters.minYearsExperience}, Found: ${resume.yearsOfExperience}`);
    }

    // Check location
    if (filters.locations && filters.locations.length > 0) {
      if (!resume.location || !filters.locations.includes(resume.location)) {
        matches = false;
        reasons.push(`Location not matched. Required: one of ${filters.locations.join(', ')}, Found: ${resume.location}`);
      }
    }
  }

  res.status(StatusCodes.OK).json({
    success: true,
    data: {
      matches,
      reasons: matches ? [] : reasons
    }
  });
});

module.exports = {
  uploadResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume,
  checkResumeMatch
};