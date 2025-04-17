"""create reports table

Revision ID: 128b233754b3
Revises: 
Create Date: 2025-04-17 18:07:15.781157

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '128b233754b3'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('reports',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('ngo_id', sa.String(), nullable=False),
    sa.Column('month', sa.String(), nullable=False),
    sa.Column('people_helped', sa.Integer(), nullable=False),
    sa.Column('events_conducted', sa.Integer(), nullable=False),
    sa.Column('funds_utilized', sa.Float(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_reports_id'), 'reports', ['id'], unique=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    """Downgrade schema."""
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_reports_id'), table_name='reports')
    op.drop_table('reports')
    # ### end Alembic commands ###
