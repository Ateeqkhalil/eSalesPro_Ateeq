
var vat_percent_val = +(vat_percent / 100) + +1;

//---------------Price & VAT Calculations onkeypress ---------------//

function Normal_Price_Calculating_VAT(id) {
    //alert(vat_percent_val);
    if (id == 1) {
        var price = $("#NormalPrice").val();
        //alert("price" + price);
        var vat_price = ( vat_percent_val * price).toFixed(3);
        //alert("vat_price" + vat_price);
        $("#NormalTotal").val(vat_price);



    }
    else {
        var price1 = $("#NormalPriceEdit").val();
        //alert("price" + price1);
        var vat_price1 = (vat_percent_val * price1).toFixed(3);
        //alert("vat_price" + vat_price1);
        $("#NormalTotalEdit").val(vat_price1);
    }
}

function Normal_Price_by_Vat(id) {
    if (id == 1) {
        var vat_price = $("#NormalTotal").val();
        var price = (vat_price /vat_percent_val).toFixed(3);
        $("#NormalPrice").val(price);
    }
    else {
        var vat_price1 = $("#NormalTotalEdit").val();
        var price1 = (vat_price1 / vat_percent_val).toFixed(3);
        $("#NormalPriceEdit").val(price1);
    }
}

function Trade_Price_Calculating_VAT(id) {
    if (id == 1) {
        var price = $("#TradePrice").val();
        var vat_price = (vat_percent_val * price).toFixed(3);
        $("#TradeTotal").val(vat_price);
    }
    else {
        var price1 = $("#TradePriceEdit").val();
        var vat_price1 = (vat_percent_val * price1).toFixed(3);
        $("#TradeTotalEdit").val(vat_price1);
    }
}

function Trade_Price_by_Vat(id) {
    if (id == 1) {
        var vat_price = $("#TradeTotal").val();
        var price = (vat_price / vat_percent_val).toFixed(3);
        $("#TradePrice").val(price);
    }
    else {
        var vat_price1 = $("#TradeTotalEdit").val();
        var price1 = (vat_price1 / vat_percent_val).toFixed(3);
        $("#TradePriceEdit").val(price1);
    }
}

function Premium_Price_Calculating_VAT(id) {
    if (id == 1) {
        var price = $("#PremiumPrice").val();
        var vat_price = (vat_percent_val * price).toFixed(3);
        $("#PremiumTotal").val(vat_price);
    }
    else {
        var price1 = $("#PremiumPriceEdit").val();
        var vat_price1 = (vat_percent_val * price1).toFixed(3);
        $("#PremiumTotalEdit").val(vat_price1);
    }
}

function Premium_Price_by_Vat(id) {
    if (id == 1) {
        var vat_price = $("#PremiumTotal").val();
        var price = (vat_price / vat_percent_val).toFixed(3);
        $("#PremiumPrice").val(price);
    }
    else {
        var vat_price1 = $("#PremiumTotalEdit").val();
        var price1 = (vat_price1 / vat_percent_val).toFixed(3);
        $("#PremiumPriceEdit").val(price1);
    }
}

function Other_Price_Calculating_VAT(id) {
    if (id == 1) {
        var price = $("#OtherPrice").val();
        var vat_price = (vat_percent_val * price).toFixed(3);
        //var vat_price = (vat_price1 - 0).toFixed(3);
        $("#OtherTotal").val(vat_price);
    }
    else {
        var price1 = $("#OtherPriceEdit").val();
        var vat_price1 = (vat_percent_val * price1).toFixed(3);
        //var vat_price = (vat_price1 - 0).toFixed(3);
        $("#OtherTotalEdit").val(vat_price1);
    }
}

function Other_Price_by_Vat(id) {
    if (id == 1) {
        var vat_price = $("#OtherTotal").val();
        var price = (vat_price / vat_percent_val).toFixed(3);
        $("#OtherPrice").val(price);
    }
    else {
        var vat_price1 = $("#OtherTotalEdit").val();
        var price1 = (vat_price1 / vat_percent_val).toFixed(3);
        $("#OtherPriceEdit").val(price1);
    }
}

function Cost_Price_Calculating_VAT(id) {
    if (id == 1) {
        var price = $("#CostPrice").val();
        var vat_price = (vat_percent_val * price).toFixed(3);
        $("#CostTotal").val(vat_price);
    }
    else {
        var price1 = $("#CostPriceEdit").val();
        var vat_price1 = (vat_percent_val * price1).toFixed(3);
        $("#CostTotalEdit").val(vat_price1);
    }
}

function Cost_Price_by_Vat(id) {
    if (id == 1) {
        var vat_price = $("#CostTotal").val();
        var price = (vat_price / vat_percent_val).toFixed(3);
        $("#CostPrice").val(price);
    }
    else {
        var vat_price1 = $("#CostTotalEdit").val();
        var price1 = (vat_price1 / vat_percent_val).toFixed(3);
        $("#CostPriceEdit").val(price1);
    }
}

//---------------Price & VAT Calculations onkeypress ---------------//


//---------------Custom Field Checkboxes ---------------//
function abc() {
    if (document.getElementById("checkbox_normal").checked) {
        $(".normal_total").show('slow');
    }

    else {
        $(".normal_total").hide('slow');
    }
}

function abc1() {
    if (document.getElementById("checkbox_trade").checked) {
        $(".trade_total").show('slow');
    }

    else {
        $(".trade_total").hide('slow');
    }
}

function abc2() {
    if (document.getElementById("checkbox_premium").checked) {
        $(".premium_total").show('slow');
    }

    else {
        $(".premium_total").hide('slow');
    }
}

function abc3() {
    if (document.getElementById("checkbox_other").checked) {
        $(".other_total").show('slow');
    }

    else {
        $(".other_total").hide('slow');
    }
}

function abc4() {
    if (document.getElementById("checkbox_cost").checked) {
        $(".cost_total").show('slow');
    }

    else {
        $(".cost_total").hide('slow');
    }
}
//---------------Custom Field Checkboxes ---------------//

//---------------Data Table ---------------//

//$(document).ready(function () {
//    $('#product_list_tableeee').dataTable();
//});

//---------------Data Table ---------------//



//-----------------Category Modal Open----------------

//function category_modal_open() {
//    $("#create_category_modal").addClass("in").show("slow");
//}




//-----------------Category Modal Open----------------

function printData() {
    var divToPrint = document.getElementById("product_print_div");

    $(".print_page_heading").show();

    $(".print_btn_hide_cols").hide();
    

    $("#product_list_tableeee_filter").hide();
    $("#product_list_tableeee_length").hide();
    $("#product_list_tableeee_info").hide();
    $("#product_list_tableeee_paginate").hide();

    
    $("#product_list_tableeee").css("border", "2px solid black");
    $("td").css("border", "1px solid black");

    $("th").css('background', '#404040');
    $("th").css('color', '#FFF');

    $("td").css('background', '#e6e6e6');

    $("td").css("border", "0px solid black");

    
    
    newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    

    $(".print_btn_hide_cols").show();
    $(".print_page_heading").hide();


    $("#product_list_tableeee_filter").show();
    $("#product_list_tableeee_length").show();
    $("#product_list_tableeee_info").show();
    $("#product_list_tableeee_paginate").show();

    newWin.close();

}

$('.print_btn_view').on('click', function () {
    printData();
})