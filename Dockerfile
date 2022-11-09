
# syntax=docker/dockerfile:1

FROM node:18-alpine
ENV NODE_ENV=testing
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --include=dev
COPY . .
ENTRYPOINT [ "npm", "run", "test" ]
EXPOSE 8000
