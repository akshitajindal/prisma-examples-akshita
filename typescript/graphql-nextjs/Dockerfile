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


######################## Multistage Build ###############################
FROM alpine 

RUN apk add --update nodejs npm

COPY --from=BUILD_IMAGE ./graphql-nextjs/.next/standalone ./standalone
COPY --from=BUILD_IMAGE ./graphql-nextjs/prisma ./standalone/prisma
COPY --from=BUILD_IMAGE ./graphql-nextjs/.next/static ./standalone/.next/static

WORKDIR /standalone

EXPOSE 3000
CMD node server.js
# CMD yarn start