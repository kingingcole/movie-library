from django.db import models

# Create your models here.

class Recommendation(models.Model):
    movie = models.CharField(max_length=100)
    year = models.PositiveIntegerField()
    star_actors = models.TextField(blank=True, null=True)
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('-date_created',)

    def __str__(self):
        return self.movie

