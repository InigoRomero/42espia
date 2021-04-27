# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./package.json
RUN npm install --silent

# add app
COPY . ./

EXPOSE  3000 
# start app
CMD  node app.js