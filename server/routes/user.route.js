// import express from 'express';
// const router = express.Router();
// import { register, login,  updateProfile  } from '../controllers/user.controller.js';
// import { isAuthenticated } from '../middlewares/server/middlewares/isAuthenticates.js';

// router.route('/register').post(register);
// router.route('/login').post(login);
// router.route('/profile/update').post(isAuthenticated,updateProfile);

// export default {router,register,login};


import express from 'express';
// 👇 Corrected import statement
import isAuthenticated from '../middlewares/isAuthenticates.js';
import { singleUpload } from '../middlewares/multer.js';
import { register, login, logout, updateProfile, getProfile } from '../controllers/user.controller.js';

const router = express.Router();

// Test route
router.get('/test', (req, res) => {
    res.json({ message: "User routes working!", success: true });
});

router.route('/register').post(singleUpload,register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/profile').get(isAuthenticated, getProfile);
// The middleware is now correctly referenced
router.route('/profile/update').post(isAuthenticated, singleUpload, updateProfile);

// It's standard practice to only export the router from a route file.
export default router;