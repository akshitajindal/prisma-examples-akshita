# base image
FROM alpine AS BUILD_IMAGE

######################## Setup Internal Monorepo Structure ###############################
RUN apk add --update nodejs npm
RUN apk add yarn

COPY . ./graphql-nextjs

WORKDIR /graphql-nextjs

RUN yarn install
RUN npx prisma migrate dev --name init
# RUN npx prisma studio 
RUN yarn build

# COPY .next/standalone ./standalone
# COPY ./prisma ./standalone/prisma
# COPY .next/static ./standalone/.next/static

# WORKDIR /standalone

EXPOSE 3000 5555
# CMD node server.js
CMD yarn start