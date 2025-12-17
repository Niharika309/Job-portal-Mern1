// Use environment variable if set, otherwise use localhost for development only
// In production, VITE_API_BASE_URL must be set to your Render backend URL (e.g., https://your-app.onrender.com)
const getApiBaseUrl = () => {
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  
  if (import.meta.env.PROD) {
    // In production, require the environment variable
    console.error('VITE_API_BASE_URL environment variable is not set in production!');
    console.error('Please set VITE_API_BASE_URL to your Render backend URL in your deployment platform.');
    // Return empty string as fallback (will cause API calls to fail, but at least won't use localhost)
    return '';
  }
  
  // Development fallback
  return "https://job-portal-mern1.onrender.com";
};

const API_BASE_URL = getApiBaseUrl();

export const USER_API_END_POINT = `${API_BASE_URL}/api/v1/user`;
export const JOB_API_END_POINT = `${API_BASE_URL}/api/v1/job`;
export const APPLICATION_API_END_POINT = `${API_BASE_URL}/api/v1/application`;
export const COMPANY_API_END_POINT = `${API_BASE_URL}/api/v1/company`;
