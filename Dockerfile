FROM python:3.10-bullseye

WORKDIR /usr/local/src
COPY ./backend/ .
COPY ./dist/ .

RUN sudo apt install build-essential
RUN pip install -r requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]