function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
        alert("Please Enter Only Numeric Value")
    }
}



function showDateDiv() {
    var to = document.getElementById("to_date").value;
    $("#date_click_div").removeClass("none");
    $("#date_click_div").addClass("showDiv");
    $("#customer_summary").addClass("none");
    $('#data_report_table_div').show();
}


function showToDate() {
    var from = document.getElementById("from_date").value;
    
    if (from == "") {
    }

    else {
        document.getElementById("to_date").removeAttribute('disabled');
    }
}

function startTime() {
    alert();
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }



    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    document.getElementById('date').innerHTML =
     dd + '/' + mm + '/' + yyyy;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}


function SetDate() {
    var doc_type_load = $("#language").val();
    //alert(doc_type_load);

    
    document.getElementById('doc_type_page_load').value = doc_type_load;

    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = day + "-" + month + "-" + year;

    document.getElementById('myDate').valueAsDate = new Date();
    document.getElementById('qwerty').valueAsDate = new Date();
    //Purchase_order_date

    //document.getElementById('myDate').value = today;
    //document.getElementById('date').value = today;
}



function SetDatePurchaseOrder() {

    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = day + "-" + month + "-" + year;

    document.getElementById('purchase_order_date').valueAsDate = new Date();
    //Purchase_order_date

    //document.getElementById('myDate').value = today;
    //document.getElementById('date').value = today;
}



$(document).ready(function () {
    $('#example').dataTable();
});

$(document).ready(function () {
    $('#example1').dataTable();
});

function PrintBtn() {
    $("#crud_btn_hide").addClass("none");
    $("#side_navi_hide").addClass("none");

    window.print();
}

function VatQuote() {
    
    if (document.getElementById("QuoteId").checked) {
        //alert("checked");
        $(".hidecolumnQuote").hide();
    }

    else {
        $(".hidecolumnQuote").show();
    }
}


function excludeVatQuote() {


    if (document.getElementById("excludeVatQuote").checked) {
        $("#price_vat_th_quote").addClass("none");
        $("#price_vat_td_quote").addClass("none");
        $("#total_vat_th_quote").addClass("none");
        $("#total_vat_td_quote").addClass("none");
        $("#vat_td_quote").removeClass('border-right-td');
        $("#price_vat_quote").removeClass('border-right-td');
    }

    else {
        $("#price_vat_th_quote").removeClass("none");
        $("#price_vat_td_quote").removeClass("none");
        $("#total_vat_th_quote").removeClass("none");
        $("#total_vat_td_quote").removeClass("none");
        $("#price_vat_th_quote").addClass("showDiv");
        $("#price_vat_td_quote").addClass("showDiv");
        $("#total_vat_th_quote").addClass("showDiv");
        $("#total_vat_td_quote").addClass("showDiv");
        $("#vat_td_quote").addClass('border-right-td');
        $("#price_vat_quote").addClass('border-right-td');
    }
}





//function Add() {
//    var a, b, c, d;
//    a = parseInt(document.getElementById("NormalPrice").value);

//    //
//    // If textbox value is null i.e empty, then the below mentioned if condition will
//    // come into picture and make the value to '0' to avoid errors.
//    //
//    if (isNaN(a) == true) {
//        a = 0;
//    }

//    var b = parseInt(document.getElementById("TradePrice").value);
//    if (isNaN(b) == true) {
//        b = 0;
//    }

//    var c = parseInt(document.getElementById("PremiumPrice").value);
//    if (isNaN(c) == true) {
//        c = 0;
//    }

//    var d = parseInt(document.getElementById("OtherPrice").value);
//    if (isNaN(d) == true) {
//        d = 0;
//    }

//    var e = parseInt(document.getElementById("CostPrice").value);
//    if (isNaN(e) == true) {
//        e = 0;
//    }

//    document.getElementById("NormalTotal").value = a + ((a * 20) / 100)
//    document.getElementById("TradeTotal").value = b + ((b * 20) / 100)
//    document.getElementById("PremiumTotal").value = c + ((c * 20) / 100)
//    document.getElementById("OtherTotal").value = d + ((d * 20) / 100)
//    document.getElementById("CostTotal").value = e + ((e * 20) / 100)
//}

function Different_Address() {
    //alert("EDIT");
    if (document.getElementById("billing_address_checkbox").checked) {
        //$(".Shipping_Address_Div").addClass('none');
        $(".Shipping_Address_Div").hide();
    }
    else {
        $(".Shipping_Address_Div").show();
        //$(".Shipping_Address_Div").removeClass('none');
        //$(".Shipping_Address_Div").addClass('showDiv');
    }
}

//function myNewFunction(element) {
//    var text = element.options[element.selectedIndex].text;
//    var kk = document.getElementById("language").innerHTML = text;
//    alert(kk);
    
//}



function show_custom_date_payment() {
    //var selectedValue = document.getElementById("payment_status_id").value;

    if (selectedValue == 1) {
        $("#custom_date_show_invoice").show();
    }
    else {
        $("#custom_date_show_invoice").hide();
    }
}

function show_custom_date_purchase_order() {
    var selectedValue = document.getElementById("custom_date_select_purchase_order").value;

    if (selectedValue == 1) {
        $("#custom_date_show_purchase_order").show();
    }
    else {
        $("#custom_date_show_purchase_order").hide();
    }
}


function run_invoice_price() {
    var selectedValue = document.getElementById("price_invoice_dropdown").value;
    //alert(selectedValue);
    if (selectedValue == 1) {
        $("#price_invoice_id").show();
        $("#price_quote_id").hide();
        $("#price_item_sale_id").hide();
    }

    else if (selectedValue == 2) {

        $("#price_quote_id").show();
        $("#price_invoice_id").hide();
        $("#price_item_sale_id").hide();

        //var a = $("#language option:selected").text();
        //alert(a);

        //var a = $('#language option[value="someValue"]').text("qttt");
        //alert(a);


        //$("#language").innerHTML(a);

        //var c = document.getElementById("language").innerHTML(a);
        //alert(c);
    }

    else if (selectedValue == 3) {

        $("#price_item_sale_id").show();
        $("#price_invoice_id").hide();
        $("#price_quote_id").hide();



        //var b = $("#language option:selected").text();
        //alert(b);

        //$("#language").val("Item Sale");



    }
}






//---------------------New Invoice Existing Customer---------------------
//---------------------New Invoice Existing Customer---------------------






function clear_customer_li() {
    //INVOICE
    $("#customer_name").text("");
    $("#customer_address").text("");
    $("#customer_postcode").text("");
    $("#customer_phone").text("");
    $("#customer_email").text("");
    $("#type_customer").text("");
    

    //QUOTE
    $("#customer_name_quote").text("");
    $("#customer_address_quote").text("");
    $("#customer_postcode_quote").text("");
    $("#customer_phone_quote").text("");
    $("#customer_email_quote").text("");
    $("#type_customer_quote").text("");

    //ITEM SALE
    $("#customer_name_item_sale").text("");
    $("#customer_address_item_sale").text("");
    $("#customer_postcode_item_sale").text("");
    $("#customer_phone_item_sale").text("");
    $("#customer_email_item_sale").text("");
    $("#type_customer_item_sale").text("");


}


function ghar() {
    alert();
}
//--------------------NEW INVOICE -------- ADD NEW ROW IN TABLE--------------------

//--------------------NEW INVOICE -------- ADD NEW ROW IN TABLE--------------------