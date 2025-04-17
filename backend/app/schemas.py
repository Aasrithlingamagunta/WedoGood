from pydantic import BaseModel, Field

class ReportCreate(BaseModel):
    ngo_id: str = Field(..., example="ngo123")
    month: str = Field(..., example="2025-04")  # Format: YYYY-MM
    people_helped: int = Field(..., example=150)
    events_conducted: int = Field(..., example=5)
    funds_utilized: float = Field(..., example=10000.50)

class ReportSummary(BaseModel):
    total_ngos: int
    total_people_helped: int
    total_events_conducted: int
    total_funds_utilized: float
