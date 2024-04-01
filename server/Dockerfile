FROM node:18-alpine

WORKDIR /home/app

COPY . ./

RUN npm i

EXPOSE 4444

CMD ["npm", "run", "dev"]