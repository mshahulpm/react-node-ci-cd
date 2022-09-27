FROM node:13-alpine 

COPY . .

RUN npm i 
RUN cd frontend 
RUN npm run build 
RUN cd .. 

CMD ["npm","start"] 