# Dockerfile
FROM mcr.microsoft.com/playwright:v1.36.1-focal

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

# set default env variable, can be override in GitHub Actions
ENV ENVIRONMENT=qa

CMD ["npx", "cross-env", "ENVIRONMENT=$ENVIRONMENT", "npx", "playwright", "test", "--reporter=list"]
