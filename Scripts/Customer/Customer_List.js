function go(id, type_id) {
    var name = document.getElementById('juni1' + id);
    var phone = document.getElementById('juni2' + id);
    var address = document.getElementById('juni3' + id);
    var postcode = document.getElementById('juni4' + id);
    var email = document.getElementById('juni5' + id);
    var balance = document.getElementById('juni6' + id);
    var credit = document.getElementById('juni7' + id);
    var credit_limit = document.getElementById('juni8' + id);
    var type1 = type_id;





    var name1 = name.innerHTML;
    var phone1 = phone.innerHTML;
    var address1 = address.innerHTML;
    var postcode1 = postcode.innerHTML;
    var email1 = email.innerHTML;
    var balance1 = balance.innerHTML;
    var credit1 = credit.innerHTML;
    var credit_limit1 = credit_limit.innerHTML;

    //alert(name1);
    //alert(phone1);
    //alert(address1);
    //alert(postcode1);
    //alert(email1);
    //alert(type1);

    //$("#ExistingModal").hide;   //alert(type1);

    //$("#ExistingModal").hide;//$("#ExistingModal").hide;


    $("#customer_name").text(name1);
    $("#customer_address").text(phone1);
    $("#customer_postcode").text(address1);
    $("#customer_phone").text(postcode1);
    $("#customer_email").text(email1);
    $("#customer_balance").text(balance1);
    $("#customer_credit").text(credit1);
    $("#customer_credit_limit").text(credit_limit1);
    $("#exist_customer_id").val(id);
    $("#credit_limit_input").val(credit_limit1);

    $("#customer_summary").removeClass("none");
    $("#customer_summary").addClass("showDiv");


    if (type1 == 1) {
        $("#type_customer").text("Normal Customer");
    }
    else if (type1 == 2) {
        $("#type_customer").text("Premium Customer");
    }

    else if (type1 == 3) {
        $("#type_customer").text("Trade Customer");
    }
    else if (type1 == 4) {
        $("#type_customer").text("Other Customer");
    }


    $("#customer_name_quote").text(name1);
    $("#customer_address_quote").text(phone1);
    $("#customer_postcode_quote").text(address1);
    $("#customer_phone_quote").text(postcode1);
    $("#customer_email_quote").text(email1);

    if (type1 == 1) {
        $("#type_customer_quote").text("Normal Customer");
    }
    else if (type1 == 2) {
        $("#type_customer_quote").text("Premium Customer");
    }

    else if (type1 == 3) {
        $("#type_customer_quote").text("Trade Customer");
    }
    else if (type1 == 4) {
        $("#type_customer_quote").text("Other Customer");
        //$("#type_customer_quote").text("Other Customer");
    }

    $("#customer_name_item_sale").text(name1);
    $("#customer_address_item_sale").text(phone1);
    $("#customer_postcode_item_sale").text(address1);
    $("#customer_phone_item_sale").text(postcode1);
    $("#customer_email_item_sale").text(email1);


    if (type1 == 1) {
        $("#type_customer_item_sale").text("Normal Customer");
    }
    else if (type1 == 2) {
        $("#type_customer_item_sale").text("Premium Customer");
    }

    else if (type1 == 3) {
        $("#type_customer_item_sale").text("Trade Customer");
    }
    else if (type1 == 4) {
        $("#type_customer_item_sale").text("Other Customer");
    }



    $("#ExistingModal").hide('slow');
    //$("#ExistingModal").closest();




    //var name = $("#existing_customer_name").val()
    //alert(name);
    //var phone = $("#existing_customer_phone").val;
    //alert(phone);
    //var address = $("#existing_customer_billing_address").val;
    //alert(address);
    //var post = $("#existing_customer_billing_postcode").val;
    //alert(post);
    //var mail = $("#existing_customer_email").val;
    //alert(mail);
    //var type = $("#c_type").val;
    //alert(type);
}


function close_modal_confirm_postcode() {
    $("#Postcode_Confirmation_Edit").hide();
    $("#Postcode_House_Number_Edit").hide();
}


function Custom_List() {
    //alert("CUSTOM_LIST")


    $("#loader_div").show();
    $("#customer_table_div").hide();
    $("#customer_summary").hide();
    var type_ID = document.getElementById("customer_type_dropdown").value;
    $('#chuss').DataTable().destroy();
    //alert(type_ID)

    $.ajax({

        url: '/Customer/Customer_List_Custom/',
        data: { customer_type_id: type_ID },
        cache: false,
        type: 'GET',
        success: function (data) {
            //alert("Success");
            //alert(data);
            $("#customer_table_div").show();
            $("#loader_div").hide();
            document.getElementById('updated_customer_list').innerHTML = data;
            
            $('#chuss').DataTable({
                "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]]
            });
            $(".print_btn_view").show();


        },
        error: function (response) {
            //alert("Error");
        }

    })
}

var tableToExcel = (function () {

    var uri = 'data:application/vnd.ms-excel;base64,'
      , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
      , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
      , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }

    return function (table, name) {
        if (!table.nodeType) table = document.getElementById(table)

        var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }

        window.location.href = uri + base64(format(template, ctx));


    }



})()




function printData() {
    var divToPrint = document.getElementById("customer_table_div");

    $(".print_btn_hide_cols").hide();
    
    $("#chuss_filter").hide();
    $("#chuss_length").hide();
    $("#chuss_info").hide();
    $("#chuss_paginate").hide();

    
    $("#chuss").css("border", "2px solid black");

    $("th").css('background', '#404040');
    $("th").css('color', '#FFF');

    $("td").css('background', '#e6e6e6');

    
    //alert(divToPrint);

    $(".print_page_heading").show();
    newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
    $(".print_btn_hide_cols").show();
    $(".print_page_heading").hide();

    $("#chuss_filter").show();
    $("#chuss_length").show();
    $("#chuss_info").show();
    $("#chuss_paginate").show();

}

$('.print_btn_view').on('click', function () {
    printData();
})