from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from sqlalchemy.exc import IntegrityError
from json import dumps

db_connect = create_engine('sqlite:///test.db');
app = Flask(__name__);
api = Api(app);
CORS(app);

def parseArgs(argstr):
	args = argstr.split("&");
	for i in range(0, len(args)):
		before = args[i];
		args[i] = args[i].split("=");
		if(len(args[i]) != 2):
			raise ValueError(before + " is not a valid argument.");
	
	rel = {};
	for arg in args:
		rel[arg[0]] = arg[1];
	
	return rel;

def requireExist(args, argname):
	args[argname];
	
def requireInt(args, argname):
	test = int(args[argname]);
	
def getPass(user):
	str = "SELECT `PASSWORD` FROM main.STUDENTS WHERE `NAME`=\"" + user + "\";";
	conn = db_connect.connect(); 
	query = conn.execute(str);
	ret = query.cursor.fetchall();
	if(len(ret) == 0):
		return -1;
	else:
		return ret[0][0];
	
	
class Test(Resource):
	def get(self):
		conn = db_connect.connect() # connect to database
		query = conn.execute("SELECT * FROM main.TEST;") # This line performs query and returns json result
		results = [i for i in query.cursor.fetchall()];
		return results;

class Register(Resource):
	def get(self, data):
		args = parseArgs(data);
		
		requireExist(args, "name");
		requireInt(args, "age");
		requireExist(args, "gender");
		requireExist(args, "uni");
		requireInt(args, "year");
		requireExist(args, "degree");
		requireExist(args, "major");
		requireExist(args, "password");
		
		str = "INSERT INTO main.STUDENTS (`NAME`, `AGE`, `GENDER`, `UNI`, `YEAR`, `DEGREE`, `MAJOR`, `PASSWORD`) VALUES (\"" + args["name"] + "\", " + args["age"] + ", \"" + args["gender"] + "\", \"" + args["uni"] + "\", " + args["year"] + ", \"" + args["degree"] + "\", \"" + args["major"] + "\", \"" + args["password"] + "\");"
			
		try:
			conn = db_connect.connect(); 
			query = conn.execute(str);
			return "Success";
		except IntegrityError:
			return "Name Reuse";

class Login(Resource):
	def get(self, data):
		args = parseArgs(data);
		
		requireExist(args, "user");
		requireExist(args, "password");
		
		password = getPass(args["user"]);
		
		if(password == -1):
			return "User not found";
		
		if(password == args["password"]):
			return "Success";
		else:
			return "Invalid password";
	

api.add_resource(Test, '/test');
api.add_resource(Register, '/register/<data>');
api.add_resource(Login, '/login/<data>');

if __name__ == '__main__':
	app.run(host='avatarthelegendreturns.com', port='5002')