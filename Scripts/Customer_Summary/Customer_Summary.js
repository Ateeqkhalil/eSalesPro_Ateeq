function customer_summary_list(id, type_id) {

    //alert("asdd");
    $("#loader_div").show();
    $("#customer_summary_loading_hide").hide();
    $(".hide_credit_sales_report").hide();

    var name = document.getElementById('customer_value_1' + id);
    var phone = document.getElementById('customer_value_2' + id);
    var address = document.getElementById('customer_value_3' + id);
    var email = document.getElementById('customer_value_4' + id);
    var notes = document.getElementById('customer_value_5' + id);
    var credit_limit = document.getElementById('customer_value_6' + id);
    var balance = document.getElementById('customer_value_7' + id);



    var type1 = type_id;


    var a = name.innerHTML;
    var b = phone.innerHTML;
    var c = address.innerHTML;
    var d = email.innerHTML;
    var e = notes.innerHTML;
    var f = credit_limit.innerHTML;
    var g = balance.innerHTML;


    $("#customer_id").val(id);

    $("#id").html(id);
    $("#c_name").html(a);
    $("#c_phone").html(b);
    $("#c_address").html(c);
    $("#c_email").html(d);
    $("#c_notes").html(e);
    $("#c_credit_limit").html(f);
    $("#c_balance").html(g);

    if (type1 == 1) {
        $("#c_type").text("Normal Customer");
    }
    else if (type1 == 2) {
        $("#c_type").text("Premium Customer");
    }

    else if (type1 == 3) {
        $("#c_type").text("Trade Customer");
    }
    else if (type1 == 4) {
        $("#c_type").text("Other Customer");
    }

    $("#ExistingModal").hide('slow');
    customer_invoice_list(id);
    customer_item_sale_list(id);
    $("#customer_summary").show();
    $("#customer_table_div").hide();

    $("#customer_name_on_Payment_status").html(a);

    //View_Payment(id);
    //$("#View_Payment_Status_Modal").addClass("in").show("slow");
}

function customer_invoice_list(id) {
    
    var customerID = id;
    //alert(customerID);

    $.ajax({

        url: "/Customer/Customer_Invoices_List/",
        data: { id: customerID },
        cache: false,
        type: "Get",
        success: function (data) {
            //alert("SUCCESS");
            document.getElementById("invoice_by_customer_partial_view").innerHTML = data;
            
            $('#customer_invoices_table').dataTable();
            
        },
        error: function (response) {
            //alert("Error" + response);
        }

    })
}

function customer_item_sale_list(id) {
    
    var customerID = id;

    //alert("addsd "+customerID);

    $.ajax({
        url: "/Customer/Customer_Item_Sale_List/",
        data: { id: customerID },
        cache: false,
        type: "Get",
        success: function (data) {
            //alert("SUCCESS");
            document.getElementById("hhh").innerHTML = data;
            $("#loader_div").hide();
            $('#item_history_table').dataTable();

            $("#customer_summary_loading_hide").show();

        },
        error: function (response) {
            //alert("Error" + response);
        }

    })
}

     {
    $("#customer_summary").removeClass("none");
    $("#customer_summary").addClass("showDiv");


    //-------------FOR SALES REPORT---------------

    $("#date_click_div").hide();

    //-------------FOR CREDIT SALES REPORT---------------

    $("#table_on_dates").hide();

    $("#table_div_Load").hide();

    
    //$("#customer_table_div").addClass("none");
}

$(document).ready(function () {
    $('#customer_summary_table').dataTable();
});

function double_click_edit_sale(id) {
    //alert(id);

    var url = $("#RedirectTo").val();
    location.href = url + "/" + id;
}

function view_payment_status() {
    
    $("#View_Payment_Status_Modal").hide();
}

//jQuery.noConflict();
//$("#ExistingModal").hide();

function View_Payment() {
    //alert(iDD);




    
}

function showDateOption() {
    var from = document.getElementById("fff_date").value;
    if (from == "") {
    }

    else {
        document.getElementById("toooooo_date").removeAttribute('disabled');
    }
}

function show_selected_date() {
    $("#view_payment_div").show();
    var from = $("#fff_date").val();
    var to = $("#toooooo_date").val();

    $("#to_date_click").text(to);
    $("#from_date_click").text(from);

}

function payment_status_by_date() {
    $("#loader_div_payment").show();
    $(".hide_all_divs").hide();
    var iDD = $("#id").text();
    var from_date = $("#fff_date").val();
    var to_date = $("#toooooo_date").val();

    //alert(iDD);
    //alert("form " + from_date);
    //alert("to " + to_date);

    $.ajax({
        url: "/Customer/Customer_Payment_Status_by_Date/",
        data: { id: iDD , from : from_date , to : to_date },
        cache: false,
        type: "Get",
        success: function (data) {
            //

            document.getElementById("updated_div").innerHTML = data;
            //$("#PleaseWait").removeClass('showDiv');
            //$("#PleaseWait").addClass('hideDiv');
            //$('#item_history_table').dataTable();
            $("#loader_div_payment").hide();
            $(".hide_all_divs").show();
        },
        error: function (response) {
            alert("Error" + response);
        }

    })

}


function payment_status_by_default() {
    
    $("#loader_div_payment").show();
    $(".hide_all_divs").hide();
    var iDD = $("#id").text();
   

    //alert(iDD);
    //alert("form " + from_date);
    //alert("to " + to_date);

    $.ajax({
        url: "/Customer/Customer_Payment_Status_Default/",
        data: { id: iDD },
        cache: false,
        type: "Get",
        success: function (data) {

            document.getElementById("updated_div").innerHTML = data;
            //$("#PleaseWait").removeClass('showDiv');
            //$("#PleaseWait").addClass('hideDiv');
            //$('#item_history_table').dataTable();
            $("#loader_div_payment").hide();
            $(".hide_all_divs").show();
            
            $("#view_payment_div").show();
        },
        error: function (response) {
            alert("Error" + response);
        }

    })

}


function printData() {
    var divToPrint = document.getElementById("print_div");

    $(".print_btn_hide_columnsssssss").hide();

    
    newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);

    $(".print_btn_hide_columnsssssss").show();
    newWin.print();
    
    newWin.close();
    $(".print_btn_hide_columnsssssss").show();
    //$("#view_payment_div").show();
    
    $(".print_btn_view").show();
    $("#print_div").show();
    
    //$("#print_div").removeAttr("border", "2px solid black");
  
}

$('.print_btn_view_payment').on('click', function () {
    printData();
})