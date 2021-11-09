#BUILD NESTJS
FROM node:16 As nest-dev

WORKDIR /usr/src/app

COPY server/package*.json .

RUN npm install --only=development

COPY ./server .

RUN npm run build


# PROD
FROM node:16 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=nest-dev /usr/src/app/dist ./dist

CMD ["node", "dist/main"]