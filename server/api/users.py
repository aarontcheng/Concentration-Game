from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
import json

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
    def get(self):
        return "fastest time"
    
    def put(self):
        return "set fastest time"
    
class Leaderboard(Resource):
    def get(self):
        return "top 10"