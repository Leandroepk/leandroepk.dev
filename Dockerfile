FROM node:22-alpine AS base
WORKDIR /app

FROM base AS development-dependencies
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

FROM base AS production-dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

FROM base AS build
COPY --from=development-dependencies /app /app
RUN npm run build

FROM base AS final
COPY package.json package-lock.json ./
COPY --from=production-dependencies /app/node_modules ./node_modules
COPY --from=build /app/build ./build
CMD ["npm", "run", "start"]
