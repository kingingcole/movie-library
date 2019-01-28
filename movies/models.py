from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=100)
    year = models.PositiveIntegerField()
    date_added = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ['-date_added']

    def __str__(self):
        return self.title