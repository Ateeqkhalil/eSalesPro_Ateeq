$(document).ready(function () {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = day + "-" + month + "-" + year;

    document.getElementById('purchase_order_date').valueAsDate = new Date();
});


function rowcounterPlus() {

    var number = document.getElementById('rowCounterrr').value;

    document.getElementById('rowCounterrr').value = +number + +1;

    //alert("ADD" + document.getElementById('rowCounterrr').value)

}
function rowcounterMinus() {
    var number = document.getElementById('rowCounterrr').value;

    document.getElementById('rowCounterrr').value = number - 1;
    //alert("CROSS" + document.getElementById('rowCounterrr').value)
    //Total(number);
    //Total2(number);
    //TotalReceived1(number);
    //TotalReceived2(number);
}



function existing_supplier_click(id) {
    //alert("adadasdsada");


    var name = document.getElementById('suppliers1' + id);
    var address = document.getElementById('suppliers2' + id);
    var postcode = document.getElementById('suppliers3' + id);
    var email = document.getElementById('suppliers4' + id);
    var phone = document.getElementById('suppliers5' + id);
    var credit_limit = document.getElementById('suppliers6' + id).value;
    //var supp_code = document.getElementById('supp6' + id);
 

    //var balance = document.getElementById('supp6' + id);
    //var credit = document.getElementById('supp7' + id);
    //var credit_limit = document.getElementById('supp8' + id);
    //var type1 = type_id;

    //var balance1 = balance.innerHTML;
    //var credit1 = credit.innerHTML;
    //var credit_limit1 = credit_limit.innerHTML;


    //alert("check1");
    var name1 = name.innerHTML;

    var address1 = address.innerHTML;
    var postcode1 = postcode.innerHTML;
    var email1 = email.innerHTML;
    var phone1 = phone.innerHTML;
    //var limit = credit_limit.innerHTML;
    
    //alert("LIMIT" + credit_limit);

    //var supp_code1 = supp_code.textContent;
    //            alert("GOOD" + name1);

    $("#supplier_names").text(name1);
    $("#supplier_addresss").text(address1);
    $("#supplier_postcodes").text(postcode1);
    $("#supplier_emails").text(email1);
    $("#supplier_phones").text(phone1);
    $("#credit_limit_input").val(credit_limit);
    

    
    $("#supplier_IDD").val(id);
    //$("#supplier_codes").val(supp_code1);
    $("#Existing_Supplier_Modal").hide('slow');
}

function RemoveAddedRow(id) {
    


    //alert("DONE");

    var total = document.getElementById("invoice_price_vat" + id).value;
    var net = $("#order_total_hidden").val();
    
    var received_total1 = document.getElementById("received_total" + id).value;
    var received_net = $("#received_sub_total_hidden").val();

    var received_new_net = (received_net - received_total1).toFixed(2);
    var received_vat = (received_new_net * 0.2).toFixed(2);
    var received_gross = (+(received_new_net * 0.2) + +received_new_net).toFixed(2);



    //var vat = $("#vat_invoice").val();
    //alert("DONE1");


    //var order_new_net = (net - total).toFixed(2);
    //var order_vat = (order_new_net / 1.2).toFixed(2);
    //var order_gross = (+(order_vat) + +order_new_net).toFixed(2);

    var order_gross = (net - total).toFixed(2);
    var order_new_net = (order_gross / 1.2).toFixed(2);
    var order_vat = (order_gross - order_new_net).toFixed(2);

    //alert("DONE2");

    $("#order_sub_total_hidden").val(order_new_net);
    $("#sub_total_td").html("£" + order_new_net);

    //alert("DONE3");

    $("#order_vat_hidden").val(order_vat);
    $("#vat_td").html(order_vat);


    $("#order_total_hidden").val(order_gross);
    $("#total_td").html(order_gross);

    //-----------------------------------------

    $("#received_sub_total_hidden").val(received_new_net);
    $("#received_sub_total_td").html("£" + received_new_net);

    $("#received_vat_hidden").val(received_vat);
    $("#received_vat_td").html(received_vat);

    $("#received_total_hidden").val(received_gross);
    $("#received_total_td").html(received_gross);

    $("#rowId" + id).closest(".remove_div").remove();
    rowcounterMinus();

    $("#serial_number_value_input_checkbox" + id).val(0);
    payment_status();
}

function hhh() {
    jQuery.noConflict();
    $("#Sold_History_Modal").modal('show');
}



function addNewRow() {

    
    arguments.callee.myStaticVar = arguments.callee.myStaticVar || 2;
    var count = arguments.callee.myStaticVar++;
    document.getElementById("counters").value = count;

    var hrRowkoUsKaNumberDeneKLiye = document.getElementById('ApnaApnaRowNumber').value;
    document.getElementById('ApnaApnaRowNumber').value = +hrRowkoUsKaNumberDeneKLiye + +1;
    hrRowkoUsKaNumberDeneKLiye = +hrRowkoUsKaNumberDeneKLiye + +1;

    //alert("new Row counter = "  + count);

    $.ajax({

        url: '/Purchase/AddNewRowPurchases/',
        data: { counter: count, serialkisser: hrRowkoUsKaNumberDeneKLiye },
        type: "Get",
        cache: false,
        success: function (data) {


            var iddd = 'newrow' + count;

            document.getElementById('newrow' + count).innerHTML = data;

        }

    })
}




function tbody_add_record(id, count) {

    //alert("tbody Counter =" + count);

    //alert("Count" + count);

    var sku = document.getElementById('partial_row1' + id);
    $("#invoice_product_id" + count).val(id);



    var sku_inner = sku.innerHTML;
    $("#codeforProduct" + count).val(sku_inner);

    var supplier_code = document.getElementById('partial_row2' + id);
    var supp_code = supplier_code.innerHTML;
    $("#supplier_code" + count).val(supp_code);


    var desc = document.getElementById('partial_row3' + id);
    var desc_inner = desc.innerHTML;
    $("#invoice_description" + count).val(desc_inner);

    var quantity = document.getElementById('partial_row4' + id);
    var quantity_inner = quantity.innerHTML;

    var price = document.getElementById('partial_row4' + id);
    var price_inner = price.innerHTML;
    $("#invoice_price" + count).val(price_inner);

    //alert("Price" + price);

    var percent_price = ((20 / 100)) * price_inner;
    total_price_with_vat = +percent_price + +price_inner;

    var a = total_price_with_vat.toFixed(2);

    $("#invoice_price_vat" + count).val(a);


    //alert("Price" + price_inner);
    $("#invoice_total" + count).val(price_inner);
    $("#invoice_total_vat" + count).val(total_price_with_vat);

    //alert("Total" + $("#invoice_total" + count).val());

    //alert("Price VALUE" + $("#invoice_total" + count).val());
    //document.getElementById("invoice_total" + count).value = price_inner;
    //document.getElementById("invoice_total_vat" + count).value = total_price_with_vat;

    //$("#total_hidden" + count).val(price_inner);
    //$("#total_vat_hidden" + count).val(total_price_with_vat);


    $("#invoice_quantity" + count).val("1");
    $("#invoice_receieved_quantity" + count).val("1");
    $("#productList").hide();

    //alert("Total(count);");

    Total(count);

    //alert("START");

    TotalReceived1(count);

    //alert("START1");


    //Commented on January 2,2018
    //checkFilterSupplier(count);
    
    //alert("START2");
    

    addNewRow();
    rowcounterPlus();
    
    //alert("END");



}




$(document).ready(function () {
    $('#kj').dataTable();
});


$('.add_new_row').click(function () {
    var i = 1;
    $('#maintable tr:last').after('<tr id="rowId" class="font-15  remove_div"><td class="border-right-td"><div class="text-center"><input placeholder="Code" class="yoyo unbold width-110" id="codeforProduct" name="yoyoyoyoyoyoyoy" onkeyup="productList(this.value)" type="text"></div></td><td class="border-right-td"><textarea class="description-text-area unbold width-100p" id="invoice_description" required="" placeholder="Description"></textarea></td><td class="border-right-td"><div class="text-center"><input id="invoice_quantity" placeholder="0" class="unbold width-45" name="" type="text"></div></td><td class="border-right-td"><div class="text-center"><input id="invoice_price" placeholder="0.0" class="new-invoice-width-boxes unbold width-68" name="" type="text"></div></td><td class="border-right-td hidecolumn text-center"><input id="invoice_price_vat" placeholder="0.0" class="new-invoice-width-boxes unbold width-78" name="" type="text"></td><td class="text-center border-right-td width-68"><div id="invoice_total" class="total_invoice_background">£0</div></td><td class="border-right-td text-center width-78 hidecolumn"><div id="invoice_total_vat" class="total_invoice_background">£0</div></td><td class="border-right-td"><div class="text-center"><input id="invoice_discount" placeholder="0.0" class="unbold width-45" name="" type="text"></div></td><td class="text-center width-25p" style="vertical-align:middle;"><a href="#" class="add_new_row showdiv"><img src="/img/images/plus_new_sale.png"></a><a href="#" class="kashif" onclick="removeRow()"><img src="/img/images/cross_new_sale.png" style="margin-left:3px;"></a><a href="#"><img src="/img/images/barcode_new_sale.png" style="margin-left:4px;"></a><a href="#"><img src="/img/images/findpost.png" style="margin-left:4px"></a></td></tr>');
});


function PO__Status() {
    
    var selectedValue = document.getElementById("po_status").value;
    //alert(selectedValue);

    if (selectedValue == 1) {
        $(".received_div").hide();
    }

    else if (selectedValue == 2) {
        $(".received_div").hide();
    }

    else if (selectedValue == 3) {
        $(".received_div").show();
    }
}



function productList(e, char, serialnumber) {

    //alert("ENTER");
    //arguments.callee.counter = arguments.callee.counter || 1;
    //var productID = document.getElementById("invoice_product_id" + counter).value;
    
    //alert("Supplier ID" + Supplier_ID);

    var url = '/Purchase/GetProducts/';
    var flag_value = 0;


  


    if (serialnumber == "" || serialnumber == null) {

        serialnumber = 1;
    }

    var supplierID = document.getElementById("supplier_IDD").value;

    if (supplierID != null && supplierID != "") {

        var Count = document.getElementById("counters").value;
        if (Count == "") {
            Count = 1;
        }
        //alert("Product List Counter ="+  Count)

        if (document.getElementById("filter_supplier_checkbox").checked) {
            //alert("CHECKED");
            $("#productList").show();
            $.ajax({

                url: '/Purchase/Filter_Supplier/',
                data: { supplierId: supplierID, counter: Count },
                cache: false,
                type: 'Get',
                success: function (data) {
                    //alert("Success");
                    document.getElementById('productList').innerHTML = data;
                },
                error: function (response) {
                    //alert(response + "ERROR Response");
                }
            })
        }


        else {
            $("#productList").show();

            if (e.ctrlKey && e.keyCode == 32) {
                flag_value = 1;
                //alert("CONTROL & SPACEBAR");
            }

            //alert(flag_value);
            $.ajax({
                url: '/Purchase/GetProducts/',
                data: { ch: char, counter: Count, SR: serialnumber, flag: flag_value },
                cache: false,
                type: "Get",
                success: function (data) {

                    document.getElementById('productList').innerHTML = data;




                },
                error: function (response) {
                    //alert(response + "JD ERROR");
                }
            })
        }
    }
    else {

        swal({
            title: "SUPPLIER NOT SELECTED",
            text: "You have to Select Supplier first, to Select Products",
            type: "warning",
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Okay',
        },
      function () {
      });

        //alert("Please Select Supplier First");
    }

}



function Total(rownum) {
    var vat_percent_val = +(vat_percent / 100) + +1;

    //alert("TOTAL");
    //alert("ROWCount Total " + document.getElementById('rowCounterrr').value);
    var quantity = document.getElementById('invoice_quantity' + rownum).value;

    

    var price = document.getElementById('invoice_price' + rownum).value;

    var priceVatTotal = (price * vat_percent_val).toFixed(3);


    
    var total = quantity * price;

    

    var totalVat = quantity * priceVatTotal;


    //alert(priceVatTotal);
    document.getElementById('invoice_total' + rownum).value = total;
    document.getElementById('invoice_price_vat' + rownum).value = priceVatTotal;
    document.getElementById('invoice_total_vat' + rownum).value = totalVat;

    //alert("Total" + total);

    $("#total_hidden" + rownum).val(total);
    $("#total_vat_hidden" + rownum).val(totalVat);

    //alert("hIDDEN tOTAL" + $("#total_hidden" + rownum).val());

    var discount_enter = $("#invoice_discount" + rownum).val();




    //var after_discount_total = total - discount_enter;
    //var after_discount_total_Vat = totalVat - discount_enter;

    //document.getElementById('invoice_total' + rownum).value = after_discount_total.toFixed(2);
    //document.getElementById('invoice_total_vat' + rownum).value = after_discount_total_Vat.toFixed(2);

    //alert("alert total" + (document.getElementById('invoice_total' + rownum).value));

    var a = 0;
    var size = document.getElementById('rowCounterrr').value;
    var totaaaal = 0;
    var check = 0;
    //alert("sizeFIRST" + size);
    for (i = 1; i <= size ; ++i) {

        check = document.getElementById('invoice_total' + i);

        //alert("CHECK" + check);

        if (check !== null) {

            totaaaal = document.getElementById('invoice_total' + i).value;

            a = +totaaaal + +a;
        }
        else {

            size = +size + +1;
            //alert("SIZE" + size);
        }
        //alert("i  " + i + "   totaaaal    " + totaaaal + "  a  " + a);
    }

    var a2 = a - 0;
    var a1 = a2.toFixed(2);

    $("#sub_total_td").html("£" + a1);

    var gross_without_parse = (a1 * vat_percent_val);

    var total_vat = (gross_without_parse - a1).toFixed(2);

    var gross = gross_without_parse.toFixed(1);




    //var gross1 = (+a1 + +total_vat);

    //var gross2 = gross1 - 0;
    //var gross = gross2.toFixed(2);

    

    $("#vat_td").html(total_vat);
    $("#total_td").html(gross);

    $("#order_sub_total_hidden").val(a1);
    $("#order_vat_hidden").val(total_vat);
    $("#order_total_hidden").val(gross);

    $("#amount_paid_hidden").val(gross);


    //$("#received_sub_total_hidden").val(a1);
    //$("#received_vat_hidden").val(total_vat);
    //$("#received_total_hidden").val(gross);

   
    

    //alert("TOTAL ::" + document.getElementById('invoice_price_vat' + rownum).value);
}



function Total2(rownum) {
    var vat_percent_val = +(vat_percent / 100) + +1;


    //alert("TOTAL 2");
    //alert("ROWCount Total 2" + document.getElementById('rowCounterrr').value);
    var quantity = document.getElementById('invoice_quantity' + rownum).value;

    var priceVat = document.getElementById('invoice_price_vat' + rownum).value;
    var price = (priceVat / vat_percent_val).toFixed(2);
    //alert("Price " + price);
    //alert("PRICE VAt" + priceVat);
    //alert("PRICE" + price);

    var total = quantity * price;
    
    var totalVat = quantity * priceVat;

    document.getElementById('invoice_total' + rownum).value = total;
    document.getElementById('invoice_price' + rownum).value = price;
    document.getElementById('invoice_price_vat' + rownum).value = priceVat;
    document.getElementById('invoice_total_vat' + rownum).value = totalVat;

   
    $("#total_hidden" + rownum).val(total);
    $("#total_vat_hidden" + rownum).val(totalVat);

    //alert("TOTAL" + total);

    var a = 0;
    var size = document.getElementById('rowCounterrr').value;
    var totaaaal = 0;
    var check = 0;
    //alert("sizeFIRST" + size);
    for (i = 1; i <= size ; ++i) {

        check = document.getElementById('invoice_total' + i);

        //alert("CHECK" + check);

        if (check !== null) {

            totaaaal = document.getElementById('invoice_total' + i).value;

            a = +totaaaal + +a;
        }
        else {

            size = +size + +1;
            //alert("SIZE" + size);
        }
        //alert("i  " + i + "   totaaaal    " + totaaaal + "  a  " + a);
    }

    var a2 = a - 0;
    var a1 = a2.toFixed(2);

    $("#sub_total_td").html("£" + a1);

    





    var gross_without_parse = (a1 * vat_percent_val);

    var total_vat = (gross_without_parse - a1).toFixed(2);

    var gross = gross_without_parse.toFixed(1);

    

    //var total_vat = (((20 / 100)) * a1).toFixed(2);

    

    //var gross1 = (+a1 + +total_vat);

    //var gross2 = gross1 - 0;
    //var gross = gross2.toFixed(2);
    //alert("VAT" + total_vat);
    //alert("Total" + gross);


    

    $("#vat_td").html(total_vat);
    $("#total_td").html(gross);


    $("#order_sub_total_hidden").val(a1);
    $("#order_vat_hidden").val(total_vat);
    $("#order_total_hidden").val(gross);

    $("#amount_paid_hidden").val(gross);

    //$("#received_sub_total_hidden").val(a1);
    //$("#received_vat_hidden").val(total_vat);
    //$("#received_total_hidden").val(gross);


}



function TotalReceived1(rownum) {
    //alert("RCVD1");
    var vat_percent_val = +(vat_percent / 100) + +1;


    //alert("ROWCount TotalReceived1" + document.getElementById('rowCounterrr').value);
    var received_quantity = document.getElementById('invoice_receieved_quantity' + rownum).value;
    //alert("RCVD" + received_quantity);
    var price = document.getElementById('invoice_price' + rownum).value;
    //alert(price);



    var total = received_quantity * price;

    document.getElementById('received_total' + rownum).value = total;

    var a1 = 0;
    var a = a1.toFixed(2);
    var sum_received = a;
    //alert("SUM" + sum_received);
    var size = document.getElementById('rowCounterrr').value;
    //var size = rownum;
    var check = 0;
    for (i = 1; i <= size; i++) {

        check = document.getElementById('received_total' + i);

        if (check !== null) {

            var totaaaal = document.getElementById('received_total' + i).value;
            sum_received = +totaaaal + +sum_received;
        }
        else {

            size = +size + +1;
            //alert("SIZE" + size);
        }
        //received_total
    }

    var a = sum_received - 0;
    var total_sum = a.toFixed(2);

    //alert("SUM" + sum_received);

    $("#received_sub_total_td").html("£" + total_sum);



    var gross1 = total_sum * vat_percent_val;
    //alert("grosstest" + grosstest);

    var total_vat1 = gross1 - total_sum;

    var total_vat = total_vat1.toFixed(2);

    //alert("total_vat" + total_vat);

    var gross = gross1.toFixed(1);

    //alert("VAT:" + total_vat);
    //alert("Total" + gross);

    //alert("GLOBAL VALUE :" + global_discount);
    //var discounted = gross - global_discount;

    //alert("VAT" + total_vat);
    //alert("Total" + gross);

    $("#received_vat_td").html(total_vat);
    $("#received_total_td").html(gross);



  

    $("#received_sub_total_hidden").val(a);
    $("#received_vat_hidden").val(total_vat);
    $("#received_total_hidden").val(gross);


}




function TotalReceived2(rownum) {
    var vat_percent_val = +(vat_percent / 100) + +1;


    //alert("RCVD2");
    //alert("ROWCount TotalReceived2" + document.getElementById('rowCounterrr').value);
    var received_quantity = document.getElementById('invoice_receieved_quantity' + rownum).value;
    //alert("RCVD" + received_quantity);
    var priceVat = document.getElementById('invoice_price_vat' + rownum).value;
    var price = (priceVat/vat_percent_val);
    //alert(price);



    var total = received_quantity * price;

    document.getElementById('received_total' + rownum).value = total;

    var a1 = 0;
    var a = a1.toFixed(2);
    var sum_received = a;
    //var size = rownum;
    var check = 0;
    var size = document.getElementById('rowCounterrr').value;
    for (i = 1; i <= size; i++) {

        check = document.getElementById('received_total' + i);

        if (check !== null) {

            var totaaaal = document.getElementById('received_total' + i).value;
            sum_received = +totaaaal + +sum_received;
        }
        else {

            size = +size + +1;
            //alert("SIZE" + size);
        }
        //received_total
    }

    var a = sum_received - 0;
    var total_sum = a.toFixed(2);

    //alert("SUM" + sum_received);

    $("#received_sub_total_td").html("£" + total_sum);


    //alert("SUM" + sum_received);

    var gross1 = total_sum * vat_percent_val;

    //alert("grosstest" + grosstest);

    var total_vat1 = gross1 - total_sum;

    var total_vat = total_vat1.toFixed(2);

    //alert("total_vat" + total_vat);

    var gross = gross1.toFixed(1);

    $("#received_vat_td").html(total_vat);
    $("#received_total_td").html(gross);


    //$("#order_sub_total_hidden").val(a1);
    //$("#order_vat_hidden").val(total_vat);
    //$("#order_total_hidden").val(gross);

    $("#received_sub_total_hidden").val(a);
    $("#received_vat_hidden").val(total_vat);
    $("#received_total_hidden").val(gross);


}




function checkPurchaseNumber() {
    var number = document.getElementById("purchase_number").value;

    $.ajax({

        url: '/Purchase/PurchaseNumberValidation/',
        data: { invoice: number },
        type: "Get",
        cache: false,
        success: function (data) {

            if (data == "False") {

                document.getElementById("purchase_number").value = "";
                alert("Invoice_number already exist !")
            }
        },
        error: function (response) {
            alert("invoice validation Error Occured");
        }


    })
}



function checkQuantityAvailable(quantiy, id) {

    var proID = document.getElementById('invoice_product_id' + id).value;

    $.ajax({

        url: '/Product/QuantityCheck/',
        data: { quantity: quantiy, productId: proID },
        cache: false,
        type: 'Get',
        success: function (data) {


            if (data == "False") {
               
                swal({
                    title: "QUANTITY EXCEEDED",
                    text: "You don't have Enough Quantity",
                    type: "warning",
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Okay',
                },
    function () {
    });

                document.getElementById('invoice_quantity' + id).value = "0";
            }

        },
        error: function (response) {
            //alert(response);
        }


    })
}



function payment_piriority() {
    var value = $("#payment_piriority_id").val();

    if (value == 1) {
        $("#custom_date_show_invoice").hide();
    }

    else if (value == 2) {
        $("#custom_date_show_invoice").hide();
    }

    else if (value == 3) {
        $("#custom_date_show_invoice").hide();
    }

    else if (value == 4) {
        $("#custom_date_show_invoice").hide();
    }
    else if (value == 5) {
        $("#custom_date_show_invoice").show();
    }
}

function draft_saved() {
    //alert("dadadsads");

    $("#payment_status_id").val(2);
    $("#po_status").val(1);
    
    payment_status();
}

function payment_status() {
    
    //alert("ddsaadssaasd");
    var value = $("#payment_status_id").val();

    var gross = $("#order_total_hidden").val();
    //alert("GROSS " + gross);
    
    //$("#left_amount_hidden").val(0);


    if (value == 1) {
        $("#amount_paid_hidden").val(gross);
        $("#left_amount_hidden").val(0);
        $("#payment_piriority_tr").hide();
        $("#partial_payment_option").hide();
    }

    else if (value == 2) {
        $("#amount_paid_hidden").val(0);
        $("#left_amount_hidden").val(gross);
        $("#payment_piriority_tr").show();
        $("#partial_payment_option").hide();
    }

    //else if (value == 3) {
    //    //$("#Partial_Payment_Modal").modal("show");
    //    //alert("3");
    //    $("#Partial_Payment_Modal").modal("show");
    //    $("#payment_piriority_tr").show();
    //    $("#partial_payment_option").show();
        
        
    //}
}



function Partial_Payment() {

    $(".partial_paid").show();
    $("#deposit_paid_tr").hide();
    $(".hide_border").show();

    //var discount = $("#discount_value").val();

    var gross = $("#order_total_hidden").val();

    var amount = $("#partial_amount").val();
    //alert("Gross " + gross);
    var rem = gross - amount;
    var remaining = rem.toFixed(2);

    $("#amount_paid_hidden").val(amount);


    document.getElementById("partial_paid_td").innerHTML = ("£" + amount);
    document.getElementById("amount_left_td").innerHTML = remaining;
    $("#left_amount_hidden").val(remaining);
    //$("#partial_paid_td").val(amount);
    //alert("REMAINING" + remaining);//alert("REMAINING" + remaining);

}


function submitResult() {

    //alert('submit');


    if (checkCreditLimit() == false) {
        return false;

    } else {
        return true;
    }
}




function checkCreditLimit() {

    //alert("check_credit_limit");
    var limits = document.getElementById('credit_limit_input').value;
    //alert("Credit Limit" + limits);

    var order_total1 = document.getElementById("order_total_hidden").value;
    var payment_status = document.getElementById("payment_status_id").value;

    var order_total2 = order_total1 - 0;
    var order_total = order_total2.toFixed(2);
    var limit_float = limits - 0;

    

    var limit = limit_float.toFixed(2);
    //alert("total" + order_total);
    //alert("limit" + limit);


    if (payment_status == 1) {
        //alert("NOT 1");
        //alert("LIMIT" + limit);
        //alert("Amount Left" + amount_left);
        //alert("payment_status " + payment_status);
        return true;


    }
    else {

        //alert("payment_status " + payment_status);
        //alert("else 3");
        //alert("total" + order_total);
        //alert("limit" + limit);

        if (parseFloat(order_total) > parseFloat(limit)) {
            //alert("if 2");
            //alert("Gross" + gross);
            //alert("Limit" + limit);
            //alert("You have Reached your Credit Limit\nYou have to Update your Credit Limit");

            swal({
                title: "LIMIT REACHED",
                text: "Reached to your Credit Limit, Please update your Credit Limit",
                type: "warning",
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Okay',
            },
function () {
});

            return false;
        }
        else {
            //alert("else 2");
            //alert("Else limit" + limit);
            //alert("Else total" + order_total);
            //alert("Not Reached your Credit Limit");
            return true;
        }
    }











}



function serial_number_click(counter) {
    //alert(counter);
    $("#EnterCounterSerialNumber").val(0);
    $("#rowCounterSerialNumber").val(counter);
    var quantity = $("#invoice_quantity" + counter).val();




    if (quantity == null || quantity == "") {
        //alert(p_name);

        swal({
            title: "NO PRODUCT SELECTED",
            text: "Please Select the Product to view the Image",
            type: "warning",
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Okay',
        },

        function () {
        });
        return false;
    }

    else {
        $("#Serial_Number_Modal").addClass("in").show("slow");

        $("#quantity_for_loop").val(quantity);

        document.getElementById("serial_number_checkedbox").checked = false;
        $("#serial_number_value").prop("readonly", true);

        $('#serial_number' + counter).css('pointer-events', 'none');

        $("#invoice_quantity" + counter).prop("readonly", true);
        //alert("Quantity " + quantity);
    }

}

function Serial_Number_Enter_Click(e) {

    //alert("Serial Number");

    var counter = $("#rowCounterSerialNumber").val();
    var loop_size = $("#quantity_for_loop").val();
    var enter_count = $("#EnterCounterSerialNumber").val();



    var url = '/Product/Check_Serial_Number_PO/';


    //alert("enter_count " + enter_count + "  loop_size  " + loop_size)

    if (enter_count != loop_size) {
        //    alert("IF COUNT");

        if (e.keyCode === 13) {
            //alert("ENTER");
            //e.preventDefault(); // Ensure it is only this code that rusn

            //alert("variable " + variable);

            var desc = $("#invoice_description" + counter).val();

            var split = desc.substring(desc.indexOf("("));
            if (split == desc) {
                split = "";
            }

            //alert("Desc " + desc);

            var serial_input_lower = $("#serial_number_value").val();
            var serial_input = serial_input_lower.toLowerCase();

            //var n = serial_input.localeCompare(desc);

            //var re = new RegExp(serial_input, 'gi');

            //var re = new RegExp(serial_input,'gi');

            //var duplicate = desc.localeCompare(re);
            //alert(duplicate);

            var ajax_return_value = 0;

            //if (desc.indexOf(serial_input) != -1) {
            //    alert(serial_input + " found");
            //}


            $.ajax({
                url: url,
                data: { SR_Value: serial_input },
                cache: false,
                type: "Get",
                success: function (data) {
                    //alert("DATA "+ data);
                    //ajax_return_value = data;
                    //alert("ajax_return_value " + ajax_return_value);
                    //document.getElementById('productList').innerHTML = data;
                    var value = split.indexOf(serial_input);

                    //alert("value" + value);

                    if (value == -1 && data == "False") {

                        //alert("DONE12");
                        var variable = " (Serial No." + serial_input + ")";
                        var box = $("#invoice_description" + counter);
                        box.val(box.val() + variable);

                        enter_count = +enter_count + +1;

                        $("#EnterCounterSerialNumber").val(enter_count);

                        $("#serial_number_value").val("")
                        if (enter_count == loop_size) {
                            $("#Serial_Number_Modal").hide();
                        }
                        //alert("DONE");
                    }
                    else {
                        //alert("ELSE");
                        $("#serial_number_value").val("")

                        swal({
                            title: "SERIAL NUMBER DUPLICATION",
                            text: "Serial Number Duplicated",
                            type: "warning",
                            confirmButtonColor: '#DD6B55',
                            confirmButtonText: 'Okay',
                        })

                    }






                },
                error: function (response) {
                    alert("ERROR");
                }
            })




            //  alert("after ajax");

            //alert($("#invoice_description" + counter).append($.trim(variable).text()));
            //$("#invoice_description"+counter).append(variable);
        }
    }


}


function close_serial_number_modal() {
    $("#Serial_Number_Modal").hide();
}


function serial_number_checkbox() {
    //alert("sadsadsadas");
    var value = $("#serial_number_checkedbox").val();
    var row_count = $("#rowCounterSerialNumber").val();



    if (document.getElementById("serial_number_checkedbox").checked) {
        //alert("IF");
        $("#serial_number_value_input_checkbox" + row_count).val(1);
        $("#serial_number_value").prop("readonly", false);
        $(".hide_close_btn_on_checked").hide();
    }
    else {
        $("#serial_number_value_input_checkbox" + row_count).val(0);
        $("#serial_number_value").prop("readonly", true);
        $(".hide_close_btn_on_checked").show();
        //alert("ELSE");
    }


    //if (value == 1) {
    //    $("#serial_number_value").prop("readonly", false);
    //}

    //else {
    //    var value = $("#serial_number_checkedbox").val(0);
    //}

}


Check_Serial_Number_PO