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
