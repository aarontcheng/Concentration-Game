from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse

from . import users_business

class Login(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type = str)
        parser.add_argument('password', type = str)
        args = parser.parse_args()

        name = args['name']
        password = args['password']

        return users_business.login(name, password)

class User(Resource):
    def get(self, name):
        # Url params
        return users_business.getFastestTime(name)
    
    
class UserSet(Resource):
    def put(self):
        # Info is put in body
        parser = reqparse.RequestParser()
        parser.add_argument('name', type = str)
        # Type is int, don't worry since we're not doing database stuff
        parser.add_argument('time', type = int)
        parser.add_argument('sessionKey', type = str)
        args = parser.parse_args()

        name = args['name']
        time = args['time']
        sessionKey = args['sessionKey']
        return users_business.setFastestTime(name, time, sessionKey)

    
class Leaderboard(Resource):
    def get(self):
        return users_business.getLeaderBoard()