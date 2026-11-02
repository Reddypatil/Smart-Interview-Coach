// 1. MONGODB DNS FIX: Must be at the very top before other requires
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes'); 
const interviewRoutes = require('./routes/interview'); 

// Connect to database
connectDB();

const app = express();

// Middleware

// 1. Tell Helmet to allow cross-origin requests
app.use(helmet({
    crossOriginResourcePolicy: false,
}));

// 2. FIX: Bulletproof CORS setup accepting standard and local IP formats
const allowedOrigins = [
    'http://localhost:5173', 
    'http://127.0.0.1:5173', 
    'http://localhost:3000',
    'http://localhost:5175', // <-- Added new Vite port
    'http://127.0.0.1:5175', // <-- Added new Vite port
    'http://127.0.0.1:3000'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true 
}));

app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Routes
app.use('/api/auth', authRoutes); 
app.use('/api/interview', interviewRoutes); 

// Health Check Route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'success', message: 'API is running' });
});

const PORT = process.env.PORT || 5000;

// 3. FIX: Bind to '0.0.0.0' to ensure the server listens on all network interfaces (IPv4 and IPv6)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});