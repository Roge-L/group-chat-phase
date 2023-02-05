from django.db import models


class User(models.Model):
    availabilities = models.CharField(max_length=200)


class Group(models.Model):
    users = models.CharField(max_length=200)
    plans = models.CharField(max_length=200)


class Plan(models.Model):
    time_range = models.CharField(max_length=200)
    twilio_video_recording = models.CharField(max_length=200)
    upvotes = models.IntegerField(default=0)
    downvotes = models.IntegerField(default=0)
