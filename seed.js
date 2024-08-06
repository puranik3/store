const { writeFileSync } = require("node:fs");
const { faker } = require("@faker-js/faker");

const orders = [];
const lineItems = [];

for (let i = 0; i < 10; ++i) {
    let total = 0;
    let lineItemId = 1;

    const order = {
        id: "" + (i + 1),
        OrderPrice: total,
        CustomerName: faker.name.firstName(),
        OrderDate: faker.date.recent(7),
    };

    orders.push(order);

    for (let j = 0; j < faker.datatype.number({ min: 1, max: 4 }); ++j) {
        const lineItem = {
            id: "" + (lineItemId + i + j),
            orderId: "" + order.id,
            ItemName: faker.commerce.productName(),
            PricePerUnit: faker.number.int({
                min: 5,
                max: 100,
            }),
            Qty: faker.datatype.number({
                min: 2,
                max: 4,
            }),
        };

        total += lineItem.PricePerUnit * lineItem.Qty;

        lineItems.push(lineItem);
    }
}

writeFileSync("db.json", JSON.stringify({ orders, lineItems }, null, 4));
