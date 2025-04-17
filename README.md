# WedoGood Assignment

This is a full-stack application built with FastAPI (backend) and Next.js (frontend). The project demonstrates modular code structure, simple form handling, and clean API integration.

## Tech Stack

### Frontend
- Next.js
- Tailwind CSS

### Backend
- FastAPI
- SQLAlchemy
- Alembic
- PostgreSQL
- python-dotenv

## Folder Structure

WedoGood_assignment/ ├── backend/ │ ├── app/ │ │ ├── main.py │ │ ├── crud.py │ │ ├── database.py │ │ ├── models.py │ │ ├── routers/ │ │ └── schemas.py │ ├── alembic/ │ ├── .venv/ │ ├── requirements.txt │ └── test_db.py ├── frontend/ │ ├── public/ │ ├── src/ │ │ └── app/ │ │ ├── page.js │ │ ├── layout.js │ │ ├── globals.css │ │ ├── submit/ │ │ └── admin/


## Features

- REST API using FastAPI
- Database migrations with Alembic
- Form-based data submission from the frontend
- Basic admin dashboard for viewing submissions

## Setup Instructions

### Backend

1. Create a virtual environment

python -m venv .venv


2. Activate it and install dependencies

source .venv/bin/activate # For Linux/macOS .venv\Scripts\activate # For Windows

pip install -r requirements.txt


3. Set environment variables in `.env`
4. Run migrations

alembic upgrade head


5. Start the server

uvicorn app.main:app --reload


### Frontend

1. Navigate to the `frontend` folder

cd frontend


2. Install dependencies

npm install


3. Run the dev server

npm run dev


## Deployment Plan

- Frontend will be deployed on Vercel
- Backend planned for deployment on Render or Railway (free tier)

## Notes on AI Usage

The backend error handling, CORS setup, and some frontend layout structures were refined with AI assistance for faster prototyping and clarity.

## Improvements with More Time

- Add authentication and session handling
- Build a proper admin panel with protected routes
- Add validation, loading states, and input feedback on the frontend
- Write unit tests for backend API endpoints
