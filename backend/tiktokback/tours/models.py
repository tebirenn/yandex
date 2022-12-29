from django.db import models

class Tour(models.Model):
    tourID = models.AutoField(primary_key=True)
    tourFrom = models.CharField(max_length=255)
    tourTo = models.CharField(max_length=255)
    tourDays = models.IntegerField()
    persons = models.IntegerField()

    def __str__(self):
        return self.tourTo