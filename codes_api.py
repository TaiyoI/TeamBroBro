from importlib.resources import Resource
from flask_restful import Api, Resource
from flask import Blueprint, jsonify  
from user_codes import *

x = 1
ore_miner_api = Blueprint('api', __name__,
                   url_prefix='/codes/game')

api = Api(ore_miner_api)

class codesAPI:
    class _Code(Resource):
        def get(user_codes):
            return jsonify(allCodes)


if x == 1: 
    server = 'https://taiyoi.github.io/TeamBroBro/'
    url = server + "/codes/game"
    user_codes = []  