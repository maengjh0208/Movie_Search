from flask import Flask, request
from flask_cors import CORS
from movie import api


app = Flask(__name__)
CORS(app)


# 영화 검색
@app.route("/movie", methods=["GET"])
def query_movie():
    query = request.args.get("query")
    json_body = api.get_json(query)
    return api.sort_json(json_body)


def main():
    app.run(host='0.0.0.0', port=6006, debug=True)











