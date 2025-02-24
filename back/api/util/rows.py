import pandas as pd
from api.models import ExceptionCourseOffer, FatherCourseOffer, ChildCourseOffer

def add_exception_row(row: pd.Series):
    exception_row = ExceptionCourseOffer(
        CourseCode=row['CourseCode'],
        FacultyCode=row['FacultyCode'],
        Session=row['Session'],
        Capacity=row['Capacity'],
        MinPerSession=row['Min Per Session'],
        Lecturer=row['Lecturer'],
    )

    exception_row.save()

def add_father_row(row: pd.Series):
    father_row = FatherCourseOffer(
        CourseCode=row['CourseCode'],
        FacultyCode=row['FacultyCode'],
        Session=row['Session'],
        Capacity=row['Capacity'],
        MinPerSession=row['Min Per Session'],
        Lecturer=row['Lecturer'],
        CourseType=row['CourseType'],
    )

    father_row.save()

def add_child_row(row: pd.Series):

    child_row = ChildCourseOffer(
        FatherCode=row['FacultyCode'],
        CourseCode=row['CourseCode'],
        Capacity=row['Capacity'],
    )
    child_row.save()