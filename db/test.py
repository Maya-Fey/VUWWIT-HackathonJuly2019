from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps

db_connect = create_engine('sqlite:///test.db');
app = Flask(__name__);
api = Api(app);
CORS(app);

class Test(Resource):
	def get(self):
		conn = db_connect.connect() # connect to database
		query = conn.execute("SELECT * FROM main.TEST;") # This line performs query and returns json result
		results = [i for i in query.cursor.fetchall()];
		return results;


api.add_resource(Test, '/test');

if __name__ == '__main__':
	app.run(host='avatarthelegendreturns.com', port='5002')