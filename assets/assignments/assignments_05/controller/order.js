import OrderModel from "../model/OrderModel.js";
import {customers, items, orderDetails, orders} from "../db/dataBase.js";
import {OrderDetailModel} from "../model/OrderDetailModel.js";
import {loadOrderTable} from "./orderDetails.js";
let cart = [];

const customerId = $('#customerIdDRD');
const item_Id = $('#itemIdDRD');
const customerName = $('#customerName');
const itemName = $('#ItemName1');
const qtyOnHand = $('#qtyOnHand');
const unit_Price = $('#unitPrice');
const orderDate = $('#orderDate');
const net_total = $('#netTotal');
const sub_total = $('#subTotal');
const order_quantity = $('#order_quantity');
const discount = $('#inputItemDiscount');
const addCartBtn = $('#addCartBtn');
const cash = $('#inputItemCash');
const balance = $('#inputQntOnBalance');
const order_id = $('#orderId');
const order_btn = $('#order_btn');

initialize()

function initialize(){
    if (orders.length === 0) {
        order_id.val(1);
    } else {
        order_id.val(parseInt(orders[orders.length - 1].orderId) + 1);
    }
}
customerId.on('input', () => {
    console.log("set cmb box value")

    if (customerId.val() !== 'select the customer'){

        customerName.val(customers[customerId.val() - 1].name);

    }else{
        customerName.val('');
    }
});

const formattedDate = new Date().toISOString().substr(0, 10);
orderDate.val(formattedDate);

export function setCustomerIds(data) {
    customerId.empty();
    customerId.append('<option selected>select the customer</option>');

    for (let i = 0; i < data.length; i++) {
        customerId.append('<option value="' + (i + 1) + '">' + data[i].id + '</option>');
    }
}

export function setItemIds(data) {
    item_Id.empty();
    item_Id.append('<option selected>select the item</option>');

    for (let i = 0; i < data.length; i++) {
        item_Id.append('<option value="' + (i + 1) + '">' + data[i].itemCode + '</option>');
    }
}

item_Id.on('input', () => {
    if (item_Id.val() !== 'select the customer'){
        itemName.val(items[item_Id.val() - 1].itemName);
        qtyOnHand.val(items[item_Id.val() - 1].itemQty);
        unit_Price.val(items[item_Id.val() - 1].itemPrice);
    }else{
        itemName.val('');
        qtyOnHand.val('');
        unit_Price.val('');
    }
});

addCartBtn.on('click', () => {
    let itemId = item_Id.val();
    let orderQTY = parseInt(order_quantity.val());
    let unitPrice = unit_Price.val();
    let qty = qtyOnHand.val();
    let total = unitPrice * orderQTY;

    if (qty >= orderQTY) {
        let cartItemIndex = cart.findIndex(cartItem => cartItem.itemId === itemId);
        if (cartItemIndex < 0) {
            let cart_item = {
                itemId: itemId,
                unitPrice: unitPrice,
                qty: orderQTY,
                total: total
            }
            cart.push(cart_item);
            loadCart();
            setTotalValues()
            clearItemSection();
        } else {
            cart[cartItemIndex].qty += orderQTY;
            cart[cartItemIndex].total = cart[cartItemIndex].qty * cart[cartItemIndex].unitPrice;
            loadCart();
            setTotalValues()
            clearItemSection();
        }
    } else {
        customAlert("බඩු ඉවරයි");
    }

});

function loadCart() {
    $('tbody').eq(2).empty();
    cart.map((item) => {
        $('tbody').eq(2).append(
            `<tr>
                <th scope="row">${item.itemId}</th>
                <td>${item.unitPrice}</td>
                <td>${item.qty}</td>
                <td>${item.total}</td>
                <td><button class="cart_remove" data-id="${item.itemId}">Remove</button></td>
            </tr>`
        );
    });
}

function setTotalValues(){
    let netTotal = calculateTotal();
    net_total.text(`${netTotal}/=`);

    let discount_percentage = discount.val() || 0;
    let discountAmount = (netTotal * discount_percentage) / 100;
    sub_total.text(`${netTotal - discountAmount}/=`);
}

function calculateTotal(){
    let netTotal = 0;
    cart.map((cart_item) => {
        netTotal += cart_item.total;
    });
    return netTotal;
}

function clearItemSection() {
    item_Id.val('select the item');
    itemName.val('');
    unit_Price.val('');
    qtyOnHand.val('');
    order_quantity.val('')

}
function setBalance(){
    let subTotal = parseFloat(sub_total.text());
    let cashAmount = parseFloat(cash.val());
    balance.val(cashAmount - subTotal);
}

cash.on('input', () => setBalance());

//set sub total value
discount.on('input', () => {
    let discountValue = parseFloat(discount.val()) || 0;
    if (discountValue < 0 || discountValue > 100) {
        discountValue = Math.min(100, Math.max(0, discountValue));
        discount.val(discountValue);
    }

    let total_value = calculateTotal();
    let discountAmount = (total_value * discountValue) / 100;
    sub_total.text(`${total_value - discountAmount}/=`);
    setBalance();
});

$('tbody').on('click', '.cart_remove', function() {
    const item_Id = $(this).data('id');
    console.log(item_Id)
    const index = item_Id - 1;

    if (index !== -1) {
        cart.splice(index, 1);
        loadCart();
        setTotalValues();
    }

});

order_btn.on('click', () => {

    let orderId = order_id.val();
    let order_date = orderDate.val();
    let customer_Id = customerId.val();
    let subTotal = parseFloat(sub_total.text());
    let cashAmount = parseFloat(cash.val());
    let discountValue = parseInt(discount.val()) || 0;

    if (cashAmount >= subTotal) {
        if (cart.length !== 0) {

            let order = new OrderModel(orderId, order_date, discountValue, subTotal, customer_Id);
            orders.push(order);
            loadOrderTable();

            cart.forEach((cart_item) => {
                let order_detail = new OrderDetailModel(orderId, cart_item.itemId, cart_item.qty, cart_item.unitPrice, cart_item.total);
                orderDetails.push(order_detail);
            });
            cart.splice(0, cart.length);
            loadCart();
            clearItemSection();
            customerId.val('select the customer');
            customerName.val('');
            discount.val('');
            cash.val('');
            balance.val('');
            net_total.text('0/=');
            sub_total.text('0/=');


            alert("Order is placed successfully");
            initialize();

            console.log(orderDetails);

        } else {
            customAlert("please add items to cart");
        }
    } else {
        customAlert("Payment is not enough");
    }

});