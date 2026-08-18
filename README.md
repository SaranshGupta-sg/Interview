InterviewAI

AI-powered interview preparation platform that analyzes a candidate's resume, profile, and target job description to generate a personalized interview strategy.

# Features

- **AI Interview Analysis** — Generates a job match score, technical & behavioral questions with interviewer intent and model answers.
- **7-Day Preparation Roadmap** — Creates a personalized day-by-day interview preparation plan.
- **Skill Gap Analysis** — Identifies missing skills and categorizes them by severity.
- **ATS Resume Generator** — Generates a job-tailored ATS-friendly resume and exports it as a PDF.
- **Secure Authentication** — JWT authentication, bcrypt password hashing, HTTP-only cookies and protected routes.
- **Report History** — Users can view and revisit previously generated interview reports.
- **Resume Processing** — Supports resume upload with PDF text extraction.

# Tech Stack

**Frontend**
- React, Vite, React Router
- Tailwind CSS
- GSAP
- Axios

**Backend**
- Node.js, Express.js
- MongoDB, Mongoose
- Multer, pdf-parse
- Puppeteer

**Authentication**
- JWT
- bcrypt
- HTTP-only Cookies

**AI**
- Google Gemini API
- Zod structured schema validation

# How It Works

Resume + Self Description + Job Description
                    ↓
              Express API
                    ↓
             PDF Processing
                    ↓
              Gemini AI
                    ↓
        Personalized Interview Report
                    ↓
     ┌──────────────┼──────────────┐
     ↓              ↓              ↓
 Match Score   Skill Gaps     7-Day Roadmap
     ↓
Technical + Behavioral Questions
                    ↓
             ATS Resume Generator
                    ↓
              Download PDF


# Architecture
```text
React Frontend
      ↓
React Context + Custom Hooks
      ↓
Axios API Services
      ↓
Express Routes
      ↓
Middleware
      ↓
Controllers
      ↓
AI Service / MongoDB
      ↓
Gemini API / Database

# Key Learnings
This project helped me work with:
Full-stack React + Node.js architecture
REST API development
JWT authentication & protected routes
MongoDB data modeling
File uploads & PDF processing
Gemini AI integration with structured responses
AI-generated PDF creation
React Context and custom hooks
Responsive UI and GSAP animations

# Future Improvements
AI-powered mock interviews
Real-time answer evaluation
Voice-based interviews
Interview performance tracking
Resume version history

# Author
Saransh Gupta
Full-Stack Developer | React | Node.js | MongoDB | AI