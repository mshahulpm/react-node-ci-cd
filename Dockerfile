FROM node:13-alpine as ui-build 

WORKDIR /app 

COPY frontend ./frontend
RUN cd frontend && npm i && npm run build 

FROM node:13-alpine as api-build 

WORKDIR /root/

COPY --from=ui-build /app/frontend/dist ./frontend/dist 
COPY package*.json ./ 
RUN npm i 
COPY app.js ./

EXPOSE 5000

CMD ["node","app.js"] 