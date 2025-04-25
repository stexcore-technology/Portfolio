FROM node:23-alpine3.20

RUN ["mkdir", "/home/app"]

WORKDIR /home/app

COPY . /home/app/

RUN npm install
RUN npm run build
RUN rm -rf src

EXPOSE 5173

CMD ["npm", "start"]
