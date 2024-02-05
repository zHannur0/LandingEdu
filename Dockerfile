FROM node:18-alpine


WORKDIR /langind-edu/
COPY . .
RUN npm install

CMD ["npm", "start"]
