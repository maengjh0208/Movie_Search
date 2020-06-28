from setuptools import find_packages, setup


def get_requires():
    result = []
    with open("./requirements.txt", "r") as f:
        for package_name in f:
            result.append(package_name)
    return result


setup(
    # 모듈명
    name='movie',
    # 버전
    version='1.0',
    author='CodingBeginner',
    author_email='mjh0208@ajou.ac.kr',
    description='Movie searcher',
    install_requires=get_requires(), # 패키지 설치를 위한 요구사항 패키지s
    packages=find_packages(),
    entry_points={
        "console_scripts": [
            # movie 라는 명령어를 실행하면
            # movie 모듈 app.py 에서 main 함수 실행
            "movie = movie.app:main"
        ]
    }
)
