from django.db import models

class FatherCourceOffer(models.Model):
    id = models.AutoField(primary_key=True)
    father_code = models.CharField(max_length=50)
    course_code = models.CharField(max_length=50)
    faculty_code = models.CharField(max_length=50)
    session = models.CharField(max_length=255)
    capacity = models.IntegerField()
    min_per_session = models.IntegerField()
    lecturer = models.CharField(max_length=255)
    course_type = models.CharField(max_length=2)
    division = models.IntegerField()

    def __str__(self):
        return f"{self.father_code} - {self.course_code} ({self.session})"

class ChildCourceOffer(models.Model):
    id = models.AutoField(primary_key=True)
    father_code = models.CharField(max_length=50)
    course_code = models.CharField(max_length=50)
    capacity = models.IntegerField()
    division = models.IntegerField()

    def __str__(self):
        return f"{self.father_code} - {self.course_code} ({self.capacity})"

class ResourceRoom(models.Model):
    id = models.AutoField(primary_key=True)
    resource_code = models.CharField(max_length=50)
    description = models.CharField(max_length=255)
    capacity = models.IntegerField()
    lecture = models.CharField(max_length=1)
    tutorial = models.CharField(max_length=1)
    lab = models.CharField(max_length=1)
    imus = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.resource_code} ({self.capacity})"


class AssignTable(models.Model):
    id = models.AutoField(primary_key=True)
    course_code = models.CharField(max_length=50)
    resource_code = models.CharField(max_length=50)
    
    def __str__(self):
        return f"{self.course_code} ({self.resource_code})"