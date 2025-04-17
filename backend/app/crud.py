from sqlalchemy.orm import Session
from sqlalchemy import func
from app import models, schemas

def create_report(db: Session, report_data: schemas.ReportCreate):
    report = models.Report(**report_data.dict())
    db.add(report)
    db.commit()
    db.refresh(report)
    return report

def get_report_summary(db: Session, month: str):
    total_ngos = db.query(models.Report.ngo_id).filter(models.Report.month == month).distinct().count()
    total_people = db.query(func.sum(models.Report.people_helped)).filter(models.Report.month == month).scalar() or 0
    total_events = db.query(func.sum(models.Report.events_conducted)).filter(models.Report.month == month).scalar() or 0
    total_funds = db.query(func.sum(models.Report.funds_utilized)).filter(models.Report.month == month).scalar() or 0.0

    return schemas.ReportSummary(
        total_ngos=total_ngos,
        total_people_helped=total_people,
        total_events_conducted=total_events,
        total_funds_utilized=total_funds
    )
