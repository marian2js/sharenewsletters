FROM node:12
MAINTAINER marian2js

COPY . /app/sharenewsletters
WORKDIR /app/sharenewsletters/

RUN npm install -g forever
CMD npm run start:production

EXPOSE 8000
