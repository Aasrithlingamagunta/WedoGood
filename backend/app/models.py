from sqlalchemy import Column, Integer, String, Float, DateTime, func
from app.database import Base

class Report(Base):
    __tablename__ = "reports"

    id = Column(Integer, primary_key=True, index=True)
    ngo_id = Column(String, nullable=False)
    month = Column(String, nullable=False)
    people_helped = Column(Integer, nullable=False)
    events_conducted = Column(Integer, nullable=False)
    funds_utilized = Column(Float, nullable=False)
    created_at = Column(DateTime, server_default=func.now())
    