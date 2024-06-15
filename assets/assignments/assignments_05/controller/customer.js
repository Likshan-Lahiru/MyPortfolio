import CustomerModel from "../model/CustomerModel.js";
import {customers} from "../db/dataBase.js";
import {setCustomerIds} from './order.js';

var recordIndex;

initialize()

function initialize() {
    loadTable();


    if (customers.length == 0) {
        $('#customerId').val(1);
    } else {
        var nextCustomerId = parseInt(customers[customers.length - 1].id) + 1;
        $('#customerId').val(nextCustomerId);
    }

    setCustomerIds(customers);
}


function loadTable(){

    $('#customer-tbl-tBody').empty();
    customers.map((item, index)=>{
        let record = `<tr>
            <td class="customer-id-value">${item.id}</td>
            <td class="customer-name-value">${item.name}</td>
            <td class="customer-address-value">${item.address}</td>
            <td class="customer-phone-value">${item.phone}</td>
        </tr>`;
        $('#customer-tbl-tBody').append(record)
    })
}

$('#register1').on('click',()=>{

    var customerId = $('#customerId').val();
    var customerName = $('#newCustomerName').val();
    var customerAddress = $('#customerAddress').val();
    var customerPhone = $('#customerPhone').val();

    let customer = new CustomerModel(
        customerId,customerName,customerAddress,customerPhone
    );
    customers.push(customer);

    loadTable();

    $('#customerButtonReset').click();
    initialize();

})
$("#customerButtonUpdate").on("click", function() {
    console.log("update customer details")
    var newCustomerName = $('#newCustomerName').val();
    var customerAddress = $('#customerAddress').val();
    var customerPhone = $('#customerPhone').val();

    let customerObj = customers[recordIndex];

    customerObj.name = newCustomerName;
    customerObj.address = customerAddress;
    customerObj.phone = customerPhone;


    loadTable();
    $('#customerButtonReset').click();

});

$('#customer-tbl-tBody').on('click','tr', function () {
    recordIndex = $(this).index();
    let id = $(this).find('.customer-id-value').text();
    let name = $(this).find('.customer-name-value').text();
    let address = $(this).find('.customer-address-value').text();
    let phone = $(this).find('.customer-phone-value').text();

    console.log("Customer id: ",id);
    console.log(recordIndex)

    $('#customerId').val(id);
    $('#newCustomerName').val(name);
    $('#customerAddress').val(address);
    $('#customerPhone').val(phone);
});

$("#searchCustomer").on("input", function() {
    var typedText = $("#searchCustomer").val();
    customers.map((customer, index) => {
        if (typedText == "") {
            loadTable()
        }

        if (typedText == customer.id) {
            var select_index = index;

            $('#customer-tbl-tBody').empty();

            var record = `<tr>
                <td class="customer-id-value">${customers[select_index].id}</td>
                <td class="customer-name-value">${customers[select_index].name}</td>
                <td class="customer-address-value">${customers[select_index].address}</td>
                <td class="customer-phone-value">${customers[select_index].phone}</td>
            </tr>`;

            $('#customer-tbl-tBody').append(record);
        }
    })
});

$("#customerButtonDelete").on('click', () => {
    customers.splice(recordIndex, 1);
    loadTable();
    $("#customerButtonReset").click();
});





