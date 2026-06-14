FROM mcr.microsoft.com/playwright:v1.60.0-noble

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
RUN cp -a node_modules /opt/node_modules

ENV NODE_PATH=/opt/node_modules
ENV PATH=/opt/node_modules/.bin:$PATH

COPY . .

CMD ["/opt/node_modules/.bin/playwright", "test"]
