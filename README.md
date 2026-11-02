# Smart Interview Coach
### AI-Driven Interview Analysis and Feedback System

Smart Interview Coach is a web-based interview preparation and assessment platform designed to help candidates practice interviews and evaluate their performance. The application provides an interface for organizations to manage assessments and candidates to participate in interview sessions.

## 🚀 Features

- **User Authentication:** Secure registration and login using JWT authentication.
- **Interview Assessments:** Create and manage interview assessments.
- **Resume Upload:** Upload candidate resumes for assessment workflows.
- **AI Integration:** Designed to support AI-powered interview question generation and candidate evaluation.
- **Interview Sessions:** Participate in interview assessments through the application.
- **Performance Reports:** View assessment scores and feedback through the assessment scorecard.
- **Face Detection:** Uses face-api.js models for facial detection features.
- **Responsive Interface:** React-based user interface.

## 🛠️ Technologies Used

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, HTML5, CSS3 |
| Styling | Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JSON Web Token (JWT), bcryptjs |
| API Communication | Axios, REST APIs |
| AI Integration | Google Generative AI SDK |
| Face Detection | face-api.js |
| Development Tools | VS Code, Git, GitHub, npm |

## 📁 Project Structure

```text
Smart-Interview-Coach/
│
├── client/
│   ├── public/
│   │   └── models/
│   └── src/
│       ├── pages/
│       ├── services/
│       ├── store/
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── .env.example
│
├── .gitignore
├── package.json
└── package-lock.json
```

## ⚙️ Installation and Setup

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- MongoDB or a MongoDB Atlas database
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Reddypatil/Smart-Interview-Coach.git
cd Smart-Interview-Coach
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `server` directory.

Add the following configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

Replace the placeholder values with your own credentials. Add any other environment variables required by enabled features.

**Important:** Never upload your actual `.env` file, passwords, API keys, or database credentials to GitHub.

### 4. Start the Backend

From the `server` directory, run:

```bash
npm run dev
```

The backend server runs on:

```text
http://localhost:5000
```

### 5. Install Frontend Dependencies

Open a new terminal:

```bash
cd client
npm install
```

### 6. Configure Frontend API URL

Create a `.env` file inside the `client` directory:

```env
VITE_API_URL=http://localhost:5000
```

### 7. Start the Frontend

From the `client` directory, run:

```bash
npm run dev
```

Open the local URL displayed in your terminal (usually `http://localhost:5173`).

## 🔐 Security

- JWT-based authentication.
- Password hashing using bcryptjs.
- Environment variables for sensitive configuration.
- Helmet middleware for HTTP security headers.
- Sensitive configuration files excluded through `.gitignore`.

## 🎯 Project Objective

The objective of Smart Interview Coach is to provide a digital platform for interview practice and assessment management, helping candidates prepare for interviews and understand their performance.

## 👨‍💻 Developer

**Vidhya Sagar Reddy**

MCA Graduate | Software Development | Python | Backend Development | AI Applications

GitHub: [Reddypatil](https://github.com/Reddypatil)

LinkedIn: [Vidhya Sagar Reddy](https://linkedin.com/in/vidhyasagar-reddy-patil)

---

⭐ If you find this project interesting, feel free to explore the repository and share your feedback.