from django.db import models


class ExceptionCourseOffer(models.Model):
    CourseCode = models.CharField(max_length=20)
    FacultyCode = models.CharField(max_length=20)
    Session = models.CharField(max_length=255)
    Capacity = models.IntegerField()
    MinPerSession = models.IntegerField()
    Lecturer = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.CourseCode}"


class FatherCourseOffer(models.Model):
    id = models.AutoField(primary_key=True)
    CourseCode = models.CharField(max_length=20)
    FacultyCode = models.CharField(max_length=20)
    Session = models.CharField(max_length=255)
    Capacity = models.IntegerField()
    MinPerSession = models.IntegerField()
    Lecturer = models.CharField(max_length=255)
    CourseType = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.CourseCode} ({self.Session})"


class ChildCourseOffer(models.Model):
    id = models.AutoField(primary_key=True)
    FatherCode = models.CharField(max_length=20)
    CourseCode = models.CharField(max_length=20)
    Capacity = models.IntegerField()

    def __str__(self):
        return f"{self.FatherCode} - {self.CourseCode} ({self.Capacity})"


class ResourceRoom(models.Model):
    id = models.AutoField(primary_key=True)
    ResourceCode = models.CharField(max_length=100)
    Description = models.CharField(max_length=255)
    Capacity = models.IntegerField()
    Lecture = models.CharField(max_length=1)
    Tutorial = models.CharField(max_length=1)
    Lab = models.CharField(max_length=1)
    Group = models.CharField(max_length=1)
    Clinic = models.CharField(max_length=1)
    PBL = models.CharField(max_length=1)
    Kitchen = models.CharField(max_length=1)
    Drawing = models.CharField(max_length=1)
    Imus = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.ResourceCode} ({self.Capacity})"


class AssignTable(models.Model):
    id = models.AutoField(primary_key=True)
    CourseCode = models.CharField(max_length=20)
    ResourceCode = models.CharField(max_length=20)
    FacultyCode = models.CharField(max_length=20)
    Session = models.CharField(max_length=255)
    Lecturer = models.CharField(max_length=255)
    CombineBy = models.CharField(max_length=50)
    StartTime = models.DateTimeField(null=True, blank=True)
    MinPerSession = models.IntegerField()

    def __str__(self):
        return f"{self.ResourceCode} ({self.CourseCode})"
