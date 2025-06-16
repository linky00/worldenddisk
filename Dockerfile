FROM node:alpine AS node-builder

WORKDIR /src

COPY . .

RUN npm ci && npm run generate-git-json

FROM hugomods/hugo:exts AS hugo-builder

ARG HUGO_BASEURL=https://worldenddisk.com
ENV HUGO_BASEURL=${HUGO_BASEURL}

WORKDIR /src

COPY --from=node-builder /src .

RUN hugo --minify

FROM hugomods/hugo:nginx

COPY --from=hugo-builder /src/public /site
