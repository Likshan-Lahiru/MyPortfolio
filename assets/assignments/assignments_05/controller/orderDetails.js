import { orders, orderDetails, items} from "../db/dataBase.js";




var index;

export function loadOrderTable() {
    $('#order_table').empty();

    orders.map((order, index) => {


        var record = `<tr>
        <td class="order-id-val">${order.orderId}</td>
        <td class="cus-id-val">${order.subTotal}</td>
        <td class="order-date-val">${order.date}</td>
        <td class="order-total-val">${order.customerId}</td>
        
    </tr>`;

        console.log(record)

        $('#order_table').append(record);
    });

}

$("#order_search").on("input", function() {
    var typedText = $("#order_search").val();
    orders.map((order, index) => {
        if (typedText == "") {
            loadOrderTable()
        }

        if (typedText == order.orderId) {
            var select_index = index;

            $('#order_table').empty();

            var record = `<tr>
                <td class="order-id-val">${orders[select_index].orderId}</td>
                <td class="cus-id-val">${orders[select_index].customerId}</td>
                <td class="order-date-val">${orders[select_index].date}</td>
                <td class="order-total-val">${orders[select_index].subTotal}</td>
            </tr>`;

            $('#order_table').append(record);
        }
    })
});

$('#order_table').on('click','tr', function () {
    index = $(this).index();
    let o_id = $(this).find('.order-id-val').text();
    let cus_id = $(this).find('.cus-id-val').text();
    let date = $(this).find('.order-date-val').text();

    orders.map((order, index) => {
        if (o_id == order.orderId) {
            var select_index = index;
            $('#order_details_discount').val(order.discount,"%");

            loadDetailTable(o_id);
        }
    })


    $('#order_detail_id').val(o_id);
    $('#order_detail_customer_id').val(cus_id);
    $('#order_details_date').val(date);
});

function loadDetailTable(o_id) {
    $('#order_detail_table').empty();

    orderDetails.map((orderDetail, index) => {
        if (o_id == orderDetail.orderId) {
            var i_id = orderDetail.itemId;
            var qty = orderDetail.qty;
            var price = orderDetail.unitPrice;
            var total = orderDetail.total;
            var desc = "";

            items.map((item, index) => {
                if (i_id == item.itemCode) {
                    var select_index = index;
                    desc = item.description;

                }
            })


            var record = `<tr>
                <td class="item-id-val">${i_id}</td>
                <td class="discount-val">${desc}</td>
                <td class="price-val">${price}</td>
                <td class="qty-val">${qty}</td>
                <td class="total-val">${total}</td>
            </tr>`;

            $('#order_detail_table').append(record);
        }
    });
}