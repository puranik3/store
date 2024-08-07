# Store API

-   List of orders - `/orders`
-   List of orders with line items - `/orders?_embed=lineItems`
-   List of line items - `/lineItems`
-   Order details - `/orders/:id` (eg. `/orders/1`)
-   Order details with line items - `/orders/:id?_embed=lineItems` (eg. `/orders/1?_embed=lineItems`)
-   List of line items for an order - `/orders/:id/lineItems` (eg. `/orders/1/lineItems`)
-   Health check - `/health`

## Note on PORT

By default, the server listens on port `3000`. Set the `PORT` environment variable or add `PORT=<your_port>` in a `.env` file.

## Dockerizing the app

-   Create Dockerfile

```
FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run seed

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "start"]
```

-   Add .dockerignore

```
node_modules
.env
.env.*
```

-   Build the Docker image

```
docker build -t store-api build .
```

-   Run a container

```
docker run -p 3000:3000 store-api
```
