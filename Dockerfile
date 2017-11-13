FROM node:8-alpine

# install python
RUN apk --update add python

# install webpack
RUN npm install webpack http-server -g

# install node_modules
WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install

# Prepare app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

# copy node_modules into app folder
RUN cp -a /tmp/node_modules /usr/src/app/

# Set Variables
ENV NODE_ENV production

# Build the app
CMD npm run build && \
	cd dist && \
	hs -p 3000

# Expose the app port
EXPOSE 3000
