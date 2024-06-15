import ItemModel from '../model/ItemModel.js';
import { items} from '../db/dataBase.js';
import {setItemIds} from './order.js';

var recordIndex;

initialize()

function initialize() {
    if (items.length === 0) {
        $('#ItemId').val(1);
    } else {
        $('#ItemId').val(parseInt(items[items.length-1].itemCode) + 1);
    }
    setItemIds(items)

    loadTable();

}

function loadTable() {

    $('#item-tbl-tBody').empty();
    items.map((item, index)=>{
        let record = `<tr>
             <td class="item-code-value">${item.itemCode}</td>
             <td class="item-name-value">${item.itemName}</td>
             <td class="item-price-value">${item.itemPrice}</td>
             <td class="item-qty-value">${item.itemQty}</td>
         </tr>`;
        $('#item-tbl-tBody').append(record);
    })

}
$('#newItem').on('click', ()=>{
    console.log("New Item save")
   var itemCode = $('#ItemId').val();
   var itemName = $('#ItemName').val();
   var itemPrice = $('#ItemPrice').val();
   var itemQty = $('#ItemQty').val();
    console.log(itemCode)

   let item = new ItemModel(itemCode, itemName, itemPrice, itemQty
   );
   items.push(item);

   loadTable();
   $('#item-reset').click();
    initialize();

});

$("#ItemUpdate").on("click", function() {

    console.log("update Item details")
    var itemName = $('#ItemName').val();
    var itemPrice = $('#ItemPrice').val();
    var itemQty = $('#ItemQty').val();




    let itemObj = items[recordIndex];

    itemObj.itemName = itemName;
    itemObj.itemPrice = itemPrice;
    itemObj.itemQty = itemQty;


    loadTable();
    $('#item-reset').click();

});

$('#item-tbl-tBody').on('click','tr', function () {
    recordIndex = $(this).index();
    let code = $(this).find('.item-code-value').text();
    let name = $(this).find('.item-name-value').text();
    let price = $(this).find('.item-price-value').text();
    let qty = $(this).find('.item-qty-value').text();



    $('#ItemId').val(code);
    $('#ItemName').val(name);
    $('#ItemPrice').val(price);
    $('#ItemQty').val(qty);
});

$('#searchItem').on('input',function (){
    console.log("search items")
    var typedText = $('#searchItem').val();
    items.map((item, index) => {
        if (typedText === "") {
            loadTable();
        }
        if (typedText === item.itemCode) {

            var select_index = index;

            $('#item-tbl-tBody').empty();

            var record = `<tr>
                <td class="item-code-value">${items[select_index].itemCode}</td>
                <td class="item-name-value">${items[select_index].itemName}</td>
                <td class="item-price-value">${items[select_index].itemPrice}</td>
                <td class="item-qty-value">${items[select_index].itemQty}</td>
            </tr>`;

            $('#item-tbl-tBody').append(record);
        }

    })
})
