FROM python:3.10-alpine

WORKDIR /usr/local/src
COPY ./backend/ .
COPY ./dist/ .

RUN pip install -r requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]