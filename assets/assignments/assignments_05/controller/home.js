import {customers, items, orders} from "../db/dataBase.js";

setInterval(initialize, 1000)

function initialize() {
    $(`#totalCustomers`).text(customers.length);
    $("#totalItems").text(items.length);
    $("#totalOrders").text(orders.length);
};