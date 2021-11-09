#BUILD NESTJS
FROM node:16-alpine As nest-dev

WORKDIR /usr/src/app

COPY server/package*.json .

RUN npm install

COPY server .

RUN npm run build


#BUILD REACT
FROM node:16-alpine As react

WORKDIR /usr/src/app

COPY client/package*.json .

RUN npm install

COPY client .

RUN npm run build


# PROD
FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# COPY SERVER BUILD
WORKDIR /usr/src/app/server

COPY server/package*.json ./

RUN npm install --only=production

COPY --from=nest-dev /usr/src/app/dist ./dist

# COPY CLIENT BUILD
WORKDIR /usr/src/app/client

COPY client/package*.json ./

RUN npm install --force

COPY --from=react /usr/src/app/build ./build

RUN npm install -g serve

## EXPOSE and CMD

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

EXPOSE 3001
EXPOSE 3000

CMD ["npm", "run", "prod"]