#!/usr/bin/python3
import json
import hashlib # Hashing
from secrets import token_urlsafe # Generate session key

# Plan: Have all the business functions to deal with the users.json file here. 
# Then the users.py will create classes with REST requests that use these business functions to fulfill them
# Pretty sure this is mvvm

# Json files will just have username, hash of password, and fastest time.

"""
Functions: 
- login function, takes in name and password, compares hash and then returns token if checks out
    If username doesn't exist, new one is created with password given. token also given
    - So helper function to create new user also will help
- Get fastest time, takes in name
- Set fastest time, takes in time, name, and session key. If time isn't faster, then doesn't do anything
- get top 10 times and users to display leaderboard

- Helper function to get all data from user with specific name

https://www.geeksforgeeks.org/reading-and-writing-json-to-a-file-in-python/

"""

# For hashing the password given by user
def hashPassword(password):
    hashed = hashlib.sha512()
    hashed.update(str(password).encode())
    return hashed.hexdigest()

def getInfo(name):
    return ""

def login(name, password):
    # First check if name already exists and password right
    hashed_password = hashPassword(password)

    # Read users.json file
    with open('users.json', 'rw') as file:
        data = json.load(file)


# Default fastest time is -1. Will keep in mind when returning leaderboard and getting/setting fastest times
def createUser(name, password):
    return ""

def getFastestTime(name):
    return ""

def setFastestTime(name, session_key):
    return ""

def getLeaderBoard():
    return ""

