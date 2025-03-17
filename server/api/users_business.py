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
- Get fastest time, takes in name
- Set fastest time, takes in time, name, and session key. If time isn't faster, then doesn't do anything
- get top 5 times and users to display leaderboard

https://www.geeksforgeeks.org/reading-and-writing-json-to-a-file-in-python/

https://www.geeksforgeeks.org/read-json-file-using-python/

https://www.geeksforgeeks.org/json-dump-in-python/
The way the json library lets you edit the files is through pretty much a complete overwrite by an edited copy of the objects
import json

# python object(dictionary) to be dumped
dict1 ={
    "emp1": {
        "name": "Lisa",
        "designation": "programmer",
        "age": "34",
        "salary": "54000"
    },
    "emp2": {
        "name": "Elis",
        "designation": "Trainee",
        "age": "24",
        "salary": "40000"
    },
}

# the json file where the output must be stored
out_file = open("myfile.json", "w")

json.dump(dict1, out_file, indent = 6)

out_file.close()

"""

# For hashing the password given by user
def hashPassword(password):
    hashed = hashlib.sha512()
    hashed.update(str(password).encode())
    return hashed.hexdigest()


def login(name, password):
    # First check if name already exists and password right
    hashedPassword = hashPassword(password)

    # Read users.json file to check for name, using absolute path
    with open('./server/api/users.json', 'r') as file:
        
        data = json.load(file)
        for i in data:
        # check for name, and if found check hash and generate session_key and return
            # print(i)
            if (i["name"] == name):
                # then check if hashed passwords match
                if (i["hashed_password"] == hashedPassword):
                    session_key = token_urlsafe(16)

                    # set session key
                    i["session_key"] = session_key

                    # update file
                    with open('./server/api/users.json', 'w') as file:
                        json.dump(data, file, indent = 6)
                    return session_key
                else:
                    return "Nada"
                
        # If got past loop, name doesn't exist so write to the file to add new user
        sessionKey = token_urlsafe(16)
        newUser = {
            "name": name,
            "hashed_password": hashPassword(password),
            "session_key": sessionKey,
            "fastest_time": -1
        }

        # Add to end of list
        data.append(newUser)

        
        with open('./server/api/users.json', 'w') as file:
            json.dump(data, file, indent = 6)
        
        return sessionKey

# Finds fastest time for a specified user
def getFastestTime(name):
    with open('./server/api/users.json', 'r') as file:
        
        data = json.load(file)
        for i in data:
            # print(i)
            # find matching name
            if (i["name"] == name):

                # default is -1, return N/A if default
                if (i["fastest_time"] == -1):
                    return "N/A"
                
                # Return as string to have same return type no matter what
                return str(i["fastest_time"])
        
    # If here, user doesn't exist somehow, shouldn't happen if used correctly tho
    return name + " not found"

def setFastestTime(name, time, sessionKey):
    with open('./server/api/users.json', 'r') as file:
        
        data = json.load(file)
        for i in data:
            # print(i)
            # find matching name and check session_key
            if (i["name"] == name and i["session_key"] == sessionKey):

                # If no time yet or new time is faster
                if (i["fastest_time"] == -1 or i["fastest_time"] > time):
                    # Have to edit data and then dump back to file
                    i["fastest_time"] = time

                    with open('./server/api/users.json', 'w') as file:
                        json.dump(data, file, indent = 6)
                    
                    return "yay"
                else:
                    return "not faster"
                    
    return name + " not found"

# returns top 5, not top 10 to make more competitive
# use sort function that uses fastest_time to sort
# return first 5, probably using list comprehension
def getLeaderBoard():
    with open('./server/api/users.json', 'r') as file:
        data = json.load(file)
        data.sort(key=timeSort)

    # If length is less than 5, just return data
    if (len(data) < 5):
        return data
    
    # return top 5
    return [x for x in data for _ in range(5)]

# For use to sort data
def timeSort(user):
    if (user["fastest_time"] == -1):
        # If anyone is getting this time, they're just trolling 
        return 100000000000000000000000
    return user["fastest_time"]

# print(hashPassword("password"))
# login("JohnnyDeee", "password")

# print(getLeaderBoard())

# Johnny's password is password
newKey = login("AaronCheng", "Aaron")
key = login("JohnnyDeee", "password")
setFastestTime("JohnnyDeee", 41, key)

print(getLeaderBoard())