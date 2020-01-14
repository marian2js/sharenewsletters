FROM node:12
MAINTAINER marian2js

COPY . /app/sharenewsletters
WORKDIR /app/sharenewsletters/backend

RUN npm install -g forever
RUN npm i
CMD npm run start:production

EXPOSE 8000
