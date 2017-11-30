FROM node:8-alpine

# install python
RUN apk --update add python

# install webpack and http-server
RUN npm install webpack http-server -g

# Change the working directory
WORKDIR /tmp
COPY package.json /tmp/

# Install dependencies
RUN npm config set registry http://registry.npmjs.org/ && npm install

# Create app directory
RUN mkdir -p /usr/src/app

# Change the working directory
WORKDIR /usr/src/app

# Copy content into the working directory
COPY . /usr/src/app

# copy node_modules into app folder
RUN cp -a /tmp/node_modules /usr/src/app/

# Set environmental variables
ENV NODE_ENV production

# Build the app and run static server
CMD npm run build && \
	cd dist && \
	hs -p 3000

# Expose the app port
EXPOSE 3000
