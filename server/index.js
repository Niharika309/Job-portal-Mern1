// const express = require('express'); //old way
import express, { application } from "express" //new way
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoutes from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"
dotenv.config({});

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// Serve static files from uploads directory and subdirectories
app.use('/uploads', express.static('uploads'));



const corsOptions= {
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://your-frontend-url.vercel.app'] // Will be updated after frontend deployment
        : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176', 'http://localhost:5177'],
    credentials:true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

//api's
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);


// Global error handler
app.use((error, req, res, next) => {
    console.error('Global error handler:', error);
    res.status(500).json({
        message: 'Internal server error',
        error: error.message,
        success: false
    });
});

app.listen(PORT,()=>{
    connectDB();
console.log(`server  running at port ${PORT}`)
})
