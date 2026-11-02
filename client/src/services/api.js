import axios from 'axios';

// FIX 1: Reverted back to 5000 since your backend is successfully running there!
const API = axios.create({
    baseURL: 'http://localhost:5000', 
});

// --- THE INTERCEPTOR: Automatically attach the token to every request ---
API.interceptors.request.use((req) => {
    // FIX 2: Look in localStorage for the specific 'hrToken' key
    const token = localStorage.getItem('hrToken');
    
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    
    return req;
});

// --- AUTH ROUTES ---
export const loginOrganization = (credentials) => API.post('/api/auth/login', credentials);
export const registerOrganization = (userData) => API.post('/api/auth/register', userData);

// --- ASSESSMENT ROUTES ---
export const getDashboardData = () => API.get('/api/interview/dashboard');

export const createAssessment = (formData) => API.post('/api/interview/upload', formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
    }
});

export const getAssessment = (token) => API.get(`/api/interview/assessment/${token}`);
export const submitAssessment = (token, answers) => API.post(`/api/interview/grade/${token}`, { answers });

export default API;