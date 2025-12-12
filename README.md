# Job Portal - Full Stack Application

A modern job portal application built with React.js frontend and Node.js backend, allowing students to find and apply for jobs while enabling recruiters to post jobs and manage applications.

## 🚀 Features

### For Students:
- **User Authentication**: Secure signup/login with JWT
- **Job Search & Filter**: Browse jobs with advanced filtering options
- **Job Applications**: Apply for jobs with resume upload
- **Profile Management**: Update profile, skills, and resume
- **Application Tracking**: View all applied jobs and their status

### For Recruiters:
- **Company Management**: Create and manage company profiles
- **Job Posting**: Post new job openings with detailed requirements
- **Application Management**: View and manage job applications
- **Applicant Review**: Accept/reject applications with status updates

## 🛠️ Tech Stack

### Frontend:
- **React.js** with Vite
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Shadcn/UI** for components
- **Axios** for API calls

### Backend:
- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Multer** for file uploads
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests

## 📁 Project Structure

```
job-portal/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── admin/       # Admin/Recruiter components
│   │   │   ├── auth/        # Authentication components
│   │   │   ├── shared/      # Shared components
│   │   │   └── ui/          # UI components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── redux/           # Redux store and slices
│   │   └── utils/           # Utility functions
│   └── package.json
├── server/                   # Node.js backend
│   ├── controllers/         # Route controllers
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middlewares/        # Custom middlewares
│   ├── utils/              # Utility functions
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites:
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation:

1. **Clone the repository**
```bash
git clone <repository-url>
cd job-portal
```

2. **Setup Backend**
```bash
cd server
npm install
```

3. **Setup Frontend**
```bash
cd frontend
npm install
```

4. **Environment Variables**
Create a `.env` file in the server directory:
```env
MONGO_URI=mongodb://localhost:27017/job-portal
PORT=8000
JWT_SECRET=yourVeryStrongSecretKey123
```

5. **Run the Application**

Backend (Terminal 1):
```bash
cd server
npm run dev
```

Frontend (Terminal 2):
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:8000

## 📋 API Endpoints

### User Routes:
- `POST /api/v1/user/register` - User registration
- `POST /api/v1/user/login` - User login
- `GET /api/v1/user/logout` - User logout
- `POST /api/v1/user/profile/update` - Update user profile

### Job Routes:
- `GET /api/v1/job/get` - Get all jobs
- `GET /api/v1/job/get/:id` - Get job by ID
- `POST /api/v1/job/post` - Post new job (Recruiter only)
- `GET /api/v1/job/getadminjobs` - Get recruiter's jobs

### Company Routes:
- `POST /api/v1/company/register` - Register company
- `GET /api/v1/company/get` - Get user's companies
- `GET /api/v1/company/get/:id` - Get company by ID
- `PUT /api/v1/company/update/:id` - Update company

### Application Routes:
- `POST /api/v1/application/apply/:id` - Apply for job
- `GET /api/v1/application/get` - Get user's applications
- `GET /api/v1/application/:id/applicants` - Get job applicants
- `POST /api/v1/application/status/:id/update` - Update application status

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication:
- Tokens are stored in HTTP-only cookies
- Protected routes require valid JWT tokens
- Role-based access control (Student/Recruiter)

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- React.js community
- Node.js community
- MongoDB team
- Tailwind CSS team
- Shadcn/UI components