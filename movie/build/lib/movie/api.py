import os
import sys
import json
import urllib.request
import copy
from flask import jsonify


def get_json(query):
    """
    :param query: str
    :return: dict

    설명:
    query(영화 검색어, str type)를 인수로 받음.
    json_body(영화 정보, dict type)를 반환.
    """
    client_id = "b9vmSy8Mu7i6ekxuoXP5"
    client_secret = "6MSSrs8oVt"
    encText = urllib.parse.quote(query)
    url = "https://openapi.naver.com/v1/search/movie.json?query=" + encText  # json 결과
    # url = "https://openapi.naver.com/v1/search/blog.xml?query=" + encText # xml 결과
    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id", client_id)
    request.add_header("X-Naver-Client-Secret", client_secret)
    response = urllib.request.urlopen(request)
    rescode = response.getcode()
    if rescode == 200:
        response_body = response.read()
        json_body = json.loads(response_body.decode('utf-8'))
    else:
        print("Error Code:" + rescode)
    return json_body


def sort_json(json_body):
    """
    :param json_body: dict
    :return: flask.wrappers.Response

    설명:
    json_body(영화 정보, dict type)을 인수로 받음
    json_body['items']: list
    json_body['items']의 원소: dict
    items <- json_body['items'] 깊은 복사(deepcopy): list
    items 에서 'userRating'기준으로 내림차순 정렬
    items 각 원소들의 'subtitle', 'title', 'director', 'actor'에 대하여 가공
    items 를 jsonify 하여 반환
    """
    # items = json_body['items']
    # 'userRating' 기준 내림차순으로 정렬한다.
    items = copy.deepcopy(json_body['items'])
    items.sort(key=lambda x: float(x['userRating']), reverse=True)

    # 'subtitle' 제거하기
    for item in items:
        del item['subtitle']

    # 'title'의 <b> </b> 제거하기
    # 'director'와 'actor'은 리스트화해서 이름을 저장할 것
    for item in items:
        item['title'] = item['title'].replace('<b>', '').replace('</b>', '')
        item['director'] = item['director'].split('|')[:-1]
        item['actor'] = item['actor'].split('|')[:-1]
    return jsonify(items)