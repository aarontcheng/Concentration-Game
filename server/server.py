from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

from api.users import *

app = Flask(__name__) #create Flask instance
CORS(app) #Enable CORS on Flask server to work with Nodejs pages
api = Api(app) #api router

# api.add_resource(Club,'/club')

# We need to handle complexities for user

# UserSet is setting time for user
# info in body
api.add_resource(UserSet,'/user')

# Url params
api.add_resource(User,'/user/<string:name>')

api.add_resource(Login,'/user/login')

api.add_resource(Leaderboard, '/leaderboard')

if __name__ == '__main__':
    # print("Loading db")
    # exec_sql_file('club.sql')
    print("Starting flask")
    app.run(debug=True), #starts Flask