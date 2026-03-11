# DefenseIQ

DefenseIQ-tech-learning platform is a full-stack cybersecurity/tech related learning platform that combines spaced repetition, AI-assisted study, progress analytics,
and hands-on labs to help students, developers, and security professionals learn technical concepts through:
- project overview
- live demo section
- architecture diagrams
- features
- tech stack
- monorepo structure
- setup instructions
- deployment guide link
- API docs link
- CI/CD mention
- security section
- roadmap
- author
- licnese
- spaced repetition learning
- AI-assisted study tools
- progress analytics
- deck marketplace
- hands-on cybersecurity labs
  
The platform combines modern full-stack engineering with learning science to improve how people study technical subjects.

Live Demo
Frontend
https://your-frontend.vercel.app
Backend API
https://your-api.onrender.com

System Architecture
The platform uses a monorepo architecture to manage multiple services:
- Next.js frontend
- Express + TypeScript API
- Express + TypeScript API
- background worker
- AI modules
- cybersecurity labs

Platform Workflow
Typical learning flow:
- Platform Workflow
- Review results update spaced repetition schedule
- Review results update spaced repetition schedule
- Progress analytics update learning metrics
- Labs reinforce concepts with hands-on exercises

Security Architecture
Security considerations built into the design:
- secrets stored in environment variables
- secrets stored in environment variables
- input validation using Zod
- CORS restrictions
- AI provider keys stored server-side
- code runner and lab environments isolated

Features
Study System
- spaced repetition flashcards
- spaced repetition flashcards
- code-based questions

Deck Marketplace
- Deck Marketplace
- download community decks
- download community decks

rating and popularity tracking
- Progress Analytics
- mastery progress
- weak topic identification

AI Learning Tools
- AI Learning Tools
- AI tutor explanations
- AI tutor explanations

Cybersecurity Labs
- web security labs
- SOC analyst log analysis labs
- containerized lab environments

Tech Stack

Frontend

Next.js
React
CSS modules

Backend

Express
TypeScript
Node.js

Database
PostgreSQL

Infrastructure

Docker
Render
Vercel

DevOps
GitHub Actions CI/CD

Security

JWT authentication
Zod validation
Helmet middleware

Monorepo Structure

apps
   api
      Express API
   web
      Next.js frontend
   worker
      background jobs

packages
   shared
      shared types

database
   schema.sql
   seeds

labs
   dvwa
   soc-logs

docs
   diagrams
   API documentation
   deployment guide

infrastructure
   docker

Getting Started

1 Start dependencies
docker compose up -d postgres redis

2 Run backend

cd apps/api
npm install
cp .env.example .env
npm run dev

3 Run frontend

cd apps/web
npm install
npm run dev

4 Run worker

cd apps/worker
npm install
npm run dev

API Documentation

See full documentation:
docs/API.md

Main endpoints:
POST /auth/register
POST /auth/login
GET /cards/due
POST /reviews
GET /analytics/progress
GET /marketplace/decks
POST /ai/generate-flashcards
POST /tutor/ask
POST /code-runner/run
GET /labs


CI/CD
This project includes a GitHub Actions pipeline that automatically:
- installs dependencies
- builds backend
- builds frontend
- validates worker service

Workflow file:
.github/workflows/ci.yml

CI runs on every:
- push to main
- pull request


Deployment
Recommended architecture:

Frontend
Vercel

Backend API
Render Web Service

Worker
Render Worker

Database
Render PostgreSQL


Portfolio Value
This project demonstrates:
-  full-stack application architecture
-  API design with TypeScript
-  monorepo project organization
-  DevOps pipeline automation
-  secure system design
-  technical documentation quality
-  learning systems engineering


Roadmap
Planned improvements:
- real authentication persistence
- queue-based background workers
- OpenAPI / Swagger API documentation
- hardened sandbox code execution
- multi-user deck publishing
- analytics dashboards
- AI-generated quizzes
- real-time collaborative study rooms

LICENSE:
MIT License

Author

Moses Juah

Cybersecurity
DevOps Engineering
Application Development




















