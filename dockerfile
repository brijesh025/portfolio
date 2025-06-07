FROM node:18 AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18

WORKDIR /app

COPY package*.json ./ 

RUN npm install --omit=dev --no-audit --no-fund --no-optinal

COPY --from=base /app/.next .next
COPY --from=base /app/public public 
COPY --from=base /app/node_modules node_modules
COPY --from=base /app/next.config.js .
COPY --from=base /app/package.json .

#Expose Port 
EXPOSE 3000

#start the Next.js server
CMD ["npm","start"]
