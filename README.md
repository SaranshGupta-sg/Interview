# InterviewAI 🎯

An AI-powered interview preparation platform that analyzes a candidate's resume, self-description, and target job description to generate a personalized interview strategy — complete with technical & behavioral questions, skill-gap analysis, a 7-day preparation roadmap, and an ATS-friendly resume, powered by Google's Gemini API.

## ✨ Features

- **AI Interview Reports** — Personalized match score, 5 technical + 5 behavioral questions (each with interviewer intent and model answers), based on your actual resume and the target job
- **Skill Gap Analysis** — Identifies missing skills for the role, ranked by severity (low/medium/high)
- **7-Day Preparation Roadmap** — Day-by-day focus areas and actionable tasks
- **ATS-Friendly Resume Generator** — AI rewrites your resume, tailored to the job description, and exports it as a polished PDF via Puppeteer
- **Secure Authentication** — JWT-based auth with bcrypt password hashing and protected routes
- **Report History** — Revisit previously generated interview plans from your dashboard

## 🛠️ Tech Stack

**Frontend:** React (Vite), React Router, Tailwind CSS, GSAP  
**Backend:** Node.js, Express.js, MongoDB, Mongoose  
**Auth:** JWT, bcrypt, HTTP-only cookies  
**AI:** Google Gemini API (structured JSON output via Zod schema validation)  
**File Processing:** Multer, pdf-parse, Puppeteer (HTML → PDF)

## 📸 How It Works

1. Upload your resume as a PDF (max 3MB)
2. Paste the job description you're targeting
3. AI analyzes both and generates a full interview prep report in ~30 seconds
4. Review your match score, questions, skill gaps, and roadmap — or download a tailored, ATS-optimized resume