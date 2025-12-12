import multer from "multer";
import path from "path";
import fs from "fs";

// Create upload directories if they don't exist
const createUploadDirs = () => {
    const dirs = ['uploads', 'uploads/profiles', 'uploads/companies', 'uploads/resumes'];
    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });
};

// Initialize upload directories
createUploadDirs();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Default to general uploads directory
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Create unique filename with timestamp
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// Dynamic file filter based on file type
const fileFilter = (req, file, cb) => {
    if (file.fieldname === 'resume') {
        // Allow PDF files for resumes
        if (file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only PDF files are allowed for resumes!'), false);
        }
    } else {
        // Allow images for profiles and company logos
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
};

export const singleUpload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
}).single("file");

// Specific upload for profile photos
export const profileUpload = multer({
    storage: multer.diskStorage({
        destination: 'uploads/profiles',
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, 'profile-' + uniqueSuffix + path.extname(file.originalname));
        }
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    },
    limits: { fileSize: 5 * 1024 * 1024 }
}).single("profilePhoto");

// Specific upload for company logos
export const companyUpload = multer({
    storage: multer.diskStorage({
        destination: 'uploads/companies',
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, 'logo-' + uniqueSuffix + path.extname(file.originalname));
        }
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    },
    limits: { fileSize: 5 * 1024 * 1024 }
}).single("file");