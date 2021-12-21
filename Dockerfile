# FROM node:lts-alpine
FROM node:latest
# set your working directory  
WORKDIR /app  
 
# add `/app/node_modules/.bin` to $PATH  
ENV PATH /app/node_modules/.bin:$PATH  
 
# install application dependencies  
COPY package.json ./  
COPY package-lock.json ./  
RUN npm install --silent  
RUN npm install react-scripts@3.4.1 -g  
 
# add app  
COPY . ./  
 
# will start app  
CMD ["npm", "start"] 