FROM node:23-alpine3.20

RUN ["mkdir", "/home/app"]

WORKDIR /home/app

COPY . /home/app/

RUN npm install
RUN npm run build
RUN rm -rf .eslintignore .eslintrc.cjs .prettierignore package.json \
public qwik.env.d.ts tmp tsconfig.json vite.config.ts src package-lock.json adapters

EXPOSE 5173

CMD ["node", "server/entry.express"]
