from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import schemas, crud, database

router = APIRouter()

# Dependency to get DB session
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/report", response_model=schemas.ReportCreate)
def submit_report(report: schemas.ReportCreate, db: Session = Depends(get_db)):
    return crud.create_report(db, report)

@router.get("/dashboard", response_model=schemas.ReportSummary)
def get_dashboard_summary(month: str, db: Session = Depends(get_db)):
    summary = crud.get_report_summary(db, month)
    if not summary:
        raise HTTPException(status_code=404, detail="No data for the given month")
    return summary
