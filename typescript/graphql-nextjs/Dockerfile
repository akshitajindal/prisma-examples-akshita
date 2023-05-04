# base image
FROM alpine AS BUILD_IMAGE

RUN apk add --update nodejs npm
RUN apk add yarn

COPY . ./graphql-nextjs

WORKDIR /graphql-nextjs

RUN yarn install
RUN npx prisma migrate dev --name init
RUN yarn build-with-logs

EXPOSE 3000 5555
CMD yarn start