from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
import json

from . import users_business

class User(Resource):
    def get(self):
        return ""