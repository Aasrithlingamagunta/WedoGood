from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.routers import reports

app = FastAPI(
    title="WeDoGood Reporting API",
    version="1.0.0"
)
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or ["http://localhost:3000"] for tighter control
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Include API routes
app.include_router(reports.router)
