# BHUAI

A multi-AI agent platform. Instead of switching between a bunch of AI tools, you give a task to one place and it picks the right agent for the job.

> Status: early development Auth, frontend, APIs, Redis and database setup are done. The agent layer is next. Built in public, so expect things to change quickly.

## The idea

- One platform, many specialized agents (research, coding, summarizing, etc.)
- A coordinator sits in the middle and decides which agent handles each request
- Each agent has its own prompt and tools

## Tech stack

| Layer | Tech |
|-------|------|
| Frontend | React, Redux |
| Backend | Node.js, Express |
| Database | MongoDB |
| Cache / sessions | Redis |
| Auth | Authentication flow (see below) |

## What works so far

- [x] User authentication
- [x] React + Redux frontend setup
- [x] Express REST APIs
- [x] Redis integration
- [x] MongoDB connection (app waits for the DB before starting)
- [ ] Agent coordinator
- [ ] Individual agents
- [ ] Task history
- [ ] Tests and CI

## Getting started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- Redis

### Setup

```bash
# clone the repo
git clone https://github.com/ycode37/BHUAI.git
cd BHUAI

# install dependencies
cd backend && npm install
cd ../frontend && npm install
```

### Environment variables

Create a `.env` file in the `backend/gateway` folder:

```env
PORT = 
AUTH_PORT = 
CHAT_PORT = 
FRONTEND_URL = 
REDIS_URL = 
```

Create a `.env` file in the `backend/services/auth` folder:

```env
PORT = 
MONGO_URI = 
REDIS_URL= 
```

Create a `.env` file in the `frontend` folder:

```env
VITE_API_KEY = 
```

Adjust the names to match what the code actually uses.

### Run it

```bash
# start the backend
cd backend
npm run dev

# start the frontend (new terminal)
cd frontend
npm start
```

## Project structure

```
BHUAI/
├── frontend/     # React + Redux frontend
└── backend/     # Express API, auth, DB and Redis setup
```

## Roadmap

1. Build the coordinator that routes tasks to agents
2. Add the first few agents
3. Task history and results view
4. Tests, CI and deployment

## Contributing

Found a bug or have a better idea? Open an issue or a PR. Small fixes are welcome, and so are big opinions.

1. Fork the repo
2. Create a branch (`git checkout -b feature/your-idea`)
3. Commit your changes
4. Open a pull request



---

Follow along on LinkedIn with #BuildInPublic.
