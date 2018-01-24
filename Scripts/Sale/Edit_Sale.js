function Edit_Sale_Onload() {
    var doc_type_load = $("#language").val();
    //alert(doc_type_load);

    var status_type = $("#payment_status_id").val();
    //alert(status_type);
    if (status_type != 3) {
        $("#partial_payment_option").hide();
    }
    document.getElementById('doc_type_page_load').value = doc_type_load;
    $("#doc_type_on_page_load_not_change").val(doc_type_load);
    //alert("RUN INVOICE");

    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = day + "-" + month + "-" + year;

    document.getElementById('edit_date').valueAsDate = new Date();


    make_readonly_on_Invoice(doc_type_load);

    run_invoice();

    $("#payment_status_value_after_disabled").val(status_type);

    if (exclude == 1) {
        //alert("exculde" + exclude);
        document.getElementById("excludeVat").checked = true;
        $(".priceVAT").hide();
        $("#net_tr").hide();
        $("#vat_tr").hide();

    }
    if (sold == 1) {
        document.getElementById("sold_history_checkbox").checked = true;
        //alert("sold" + sold);
    }

    if (detail == 1) {
        document.getElementById("view_details").checked = true;
        //alert("sold" + sold);
    }
    //alert("NOT RUN INVOICE");
}




function set_amount_left_in_partial_payment() {
    var amount = $("#amount_left_input_field").val();
    //alert(amount);

    $("#partial_amount").val(amount);

}

function make_readonly_on_Invoice(doc_type) {

    for (var i = 1 ; i < 1000   ; i++) {
        //document.getElementById("codeforProduct" + i).readOnly = true;
        //document.getElementById("invoice_description" + i).readOnly = true;
        //document.getElementById("invoice_quantity" + i).readOnly = true;
        //document.getElementById("invoice_price" + i).readOnly = true;
        //document.getElementById("invoice_price_vat" + i).readOnly = true;
        if (doc_type == 1 || doc_type == 3) {

            $("#codeforProduct" + i).prop("disabled", true).css({ "background-color": "white" });
            $("#invoice_description" + i).prop("readonly", true).css("background-color", "white");
            $("#invoice_quantity" + i).prop("disabled", true).css("background-color", "white");
            $("#invoice_price" + i).prop("disabled", true).css("background-color", "white");
            $("#invoice_price_vat" + i).prop("disabled", true).css("background-color", "white");
            $("#invoice_total" + i).prop("disabled", true).css("background-color", "white");
            $("#invoice_total_vat" + i).prop("disabled", true).css("background-color", "white");
            $("#invoice_discount" + i).prop("disabled", true).css("background-color", "white");
            //$("#language").prop("disabled", true).css({ "background-color": "#8B0000", "color": "#fff" });

        }

        else {
            $("#codeforProduct" + i).prop("disabled", false);
            $("#invoice_description" + i).prop("readonly", false);
            $("#invoice_quantity" + i).prop("disabled", false);
            $("#invoice_price" + i).prop("disabled", false);
            $("#invoice_price_vat" + i).prop("disabled", false);
            $("#invoice_total" + i).prop("disabled", false);
            $("#invoice_total_vat" + i).prop("disabled", false);
            $("#invoice_discount" + i).prop("disabled", false);
        }
    }

}



function image_click(counter) {
    //alert("counter" + counter);
    var p_name = $("#codeforProduct" + counter).val();

    //alert("Name " + p_name);

    if (p_name == null || p_name == "") {
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

        $.ajax({

            url: "/Sale/SearchProductbyName/",
            data: { name: p_name },
            cache: false,
            type: "Get",
            success: function (data) {
                //alert("SUCCESS");
                //alert(data);
                document.getElementById("updated_div").innerHTML = data;
                $("#Image_Modal").addClass("in").show("slow");
            },
            error: function (response) {
                alert("Error" + response);
            }

        })
    }
}

function close_image_modal() {
    $("#Image_Modal").hide();

}


function run_invoice() {
    //alert("Run Invoice");

    var selectedValue = document.getElementById("language").value;

    //alert("Selected Value: " + selectedValue);
    
    //document.getElementById('doc_type_page_load').value = selectedValue;
    var old_doc = $("#doc_type_page_load").val();
    document.getElementById('new_document_type_changed').value = selectedValue;
    
    



    if (selectedValue == 1) {


        //alert("Invoice Document");


        //Invoice Show
        $("#payment_method_div").show();
        $("#payment_status_tr").show();
        $("#invoice_number_div").show();
        $("#new_invoice_heading").show();
        $("#hideExcludeVat").show();

        $(".hide_quotation").show();

        $("#net_tr").show();
        $("#vat_tr").show();

        $(".priceVAT").show();

        $("#global_discount_div").show();
        $("#hideExcludeVat").show();
        $("#Give_Refund_Div").show();
        
        $("#show_details").hide();

        //Quote Hide
        $("#quote_number_div").hide();
        $("#new_quote_heading").hide();

        //Item Sale Hide
        
        $("#item_sale_div").hide();
        $("#new_item_sale_heading").hide();

        if (old_doc == 1 && selectedValue == 1) {
            $("#invoice_number_div").show();
            $("#item_sale_max").hide();
        }

        if (old_doc == 3 && selectedValue == 1) {
            $("#item_sale_div").hide();
            $("#invoice_number_max").show();
        }

        if (old_doc == 2 && selectedValue == 1) {
            //alert("selectedValue == 1");
            $("#quote_number_div").hide();
            $("#item_sale_max").hide();
            $("#invoice_number_max").show();
            $("#payment_status_id").val(1);
            payment_status();
            //alert("3");
        }

        make_readonly_on_Invoice(1);
        $("#input_view_detail").val(0);
        document.getElementById("view_details").checked = false;

        if (exclude == 1) {
            $(".priceVAT").hide();
            $("#net_tr").hide();
            $("#vat_tr").hide();
        }

    }

    else if (selectedValue == 2) {
        //document.getElementById('doc_type_page_load').value = selectedValue;


      

       

        $(".hide_for_quote").hide();
        //alert("Quote Document");


        $("#hideExcludeVat").show();
        $("#net_tr").show();
        $("#vat_tr").show();

        //Invoice Hide
        $("#payment_method_div").hide();
        $("#payment_status_tr").hide();
        $("#invoice_number_div").hide();
        $("#new_invoice_heading").hide();

        $("#global_discount_div").hide();
        $("#Give_Refund_Div").hide();
        $(".hide_quotation").hide();

        //Item Sale Hide
        $("#item_sale_div").hide();
        $("#new_item_sale_heading").hide();


        //Quote Show
        $("#quote_number_div").show();
        $("#new_quote_heading").show();
        $("#show_details").show();
        $(".priceVAT").show();

        if (old_doc == 2 && selectedValue == 1) {
            alert("selectedValue == 1");
            $("#quote_number_div").hide();
            $("#invoice_number_max").show();
        }

        if (old_doc == 2 && selectedValue == 3) {
            alert("selectedValue == 3");
            $("#quote_number_div").hide();
            $("#item_sale_max").show();
        }


        if (old_doc == 2 && selectedValue == 2) {
            $("#quote_number_div").show();
            $("#invoice_number_max").hide();
            $("#item_sale_max").hide();
        }

        make_readonly_on_Invoice(2);
        if (exclude == 1) {
            $(".priceVAT").hide();
            $("#net_tr").hide();
            $("#vat_tr").hide();
        }
    }

    else if (selectedValue == 3) {
        //document.getElementById('doc_type_page_load').value = selectedValue;

        //alert("Item Sale Document");

        //Invoice Hide
        $("#invoice_number_div").hide();
        $("#new_invoice_heading").hide();
        $("#hideExcludeVat").hide();
        $("#net_tr").hide();
        $("#vat_tr").hide();


        //Quote Hide
        $("#quote_number_div").hide();
        $("#new_quote_heading").hide();
        $("#show_details").hide();

        $("#payment_method_div").show();
        $("#global_discount_div").show();
        $("#Give_Refund_Div").show();
        $("#payment_status_tr").show();

        $(".hide_quotation").show();

        $(".priceVAT").hide();

        
        //Item Sale Show
        $("#item_sale_div").show();
        $("#new_item_sale_heading").show();

        if (old_doc == 1 && selectedValue == 3) {
            $("#invoice_number_div").hide();
            $("#item_sale_max").show();
        }

        if (old_doc == 2 && selectedValue == 3) {
            //alert("selectedValue == 3");
            $("#quote_number_div").hide();
            $("#invoice_number_max").hide();
            $("#item_sale_max").show();

            $("#payment_status_id").val(1);
            payment_status();
        }


        if (old_doc == 3 && selectedValue == 3) {
            $("#item_sale_div").show();
            $("#invoice_number_max").hide();
            //$("#invoice_number_div").show();
            //$("#item_sale_max").hide();
        }

        make_readonly_on_Invoice(3);


        $("#input_view_detail").val(0);
        document.getElementById("view_details").checked = false;
        //$("#item_sale_id").show();
        //$("#invoice_id").hide();
        //$("#quote_id").hide();



        //var b = $("#language option:selected").text();
        //alert(b);

        //$("#language").val("Item Sale");//$("#language").val("Item Sale");

        
    }

    var detail = $("#input_view_detail").val();
    if (detail == 1) {
        document.getElementById("view_details").checked = true;
    }
    

}


function checkQuoteNumber() {
    //alert("SASASSAS");
    //alert("number");

    var number = document.getElementById("doc_type_page_load").value;

    var old_doc_type = $("#doc_type_on_page_load_not_change").val();

    

    if ((old_doc_type == 2 && number == 1) || ((old_doc_type == 2 && number == 3))) {
        alert("   old_doc_type : " + old_doc_type + "  number : " + number);
        $.ajax({

            url: '/Sale/Changing_Quote_Number_to_Invoice/',
            data: { doct_type: number },
            type: "Get",
            cache: false,
            success: function (data) {
                //alert(data);    
                if (number == 1) {
                    document.getElementById('invoice_number').value = data;
                }
                else if (number == 3) {
                    document.getElementById('item_sale').value = data;
                }
                //alert(data);

            },
            error: function (response) {
                alert("Quote validation Error Occured");
            }


        })
    }
}

function Total_Refund(rownum) {

    var quan = document.getElementById('refund_quantity' + rownum).value;

    var price = document.getElementById('invoice_price' + rownum).value;

    var price_vat = ((20 / 100)) * price;

    var priceVatTotal = +price + +price_vat;


    var total = quantity * price;

    var totalVat = quantity * priceVatTotal;

    document.getElementById('invoice_total' + rownum).value = total;
    document.getElementById('invoice_price_vat' + rownum).value = priceVatTotal;
    document.getElementById('invoice_total_vat' + rownum).value = totalVat;

    $("#total_hidden" + rownum).val(total);
    $("#total_vat_hidden" + rownum).val(totalVat);

    var discount_enter = $("#invoice_discount" + rownum).val();




    var after_discount_total = total - discount_enter;
    var after_discount_total_Vat = totalVat - discount_enter;

    document.getElementById('invoice_total' + rownum).value = after_discount_total.toFixed(2);
    document.getElementById('invoice_total_vat' + rownum).value = after_discount_total_Vat.toFixed(2);



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

    var a_parsed = a.toFixed(2);

    $("#net_invoice").html("£" + a_parsed);


    var total_vat = (((20 / 100)) * a_parsed).toFixed(2);

    var grosswithoutpoint = +a_parsed + +total_vat;

    var gross = grosswithoutpoint.toFixed(2);

    var discounted = gross - global_discount;


    $("#invoice_vat").html(total_vat);
    $("#invoice_gross").html(gross);

    $("#net_invoice_hidden").val(a);
    $("#vat_invoice").val(total_vat);
    $("#gross_invoice").val(gross);

    //$("#partial_net_id").val(a);
    //$("#partial_vat_price_id").val(total_vat);
    //$("#partial_gross_id").val(gross);

}

function payment_status() {
    var selectedValue = document.getElementById("payment_status_id").value;
    //alert("selectedValue  " + selectedValue);
    //jQuery.noConflict();
    var gross = $("#gross_invoice").val();
    $("#amount_paid_hidden").val(0);

    $("#payment_status_value_after_disabled").val(selectedValue);

    if (selectedValue == 1) {
        $("#amount_paid_hidden").val(gross);
        $("#left_amount_hidden").val(0);

        $("#custom_date_show_invoice").hide();
        $("#partial_payment_option").hide();
        $("#Deposit_payment_option").hide();

    }
    else if (selectedValue == 2) {
        $("#custom_date_show_invoice").hide();
        $("#partial_payment_option").hide();
        $("#Deposit_payment_option").hide();
    }
    else if (selectedValue == 3) {
        $("#custom_date_show_invoice").hide();
        $("#partial_payment_option").show();
        $("#Deposit_payment_option").hide();

        var amount = $("#amount_left_input_field").val();
        //alert(amount);

        $("#partial_amount").val(amount);
        $("#Partial_Payment_Modal").addClass("in").show("slow");

        $("#Partial_Payment_Modal").modal("show");
    }
    else if (selectedValue == 4) {
        $("#custom_date_show_invoice").hide();
        $("#partial_payment_option").hide();
        $("#Deposit_payment_option").show();


        $("#Deposit_Modal").modal("show");
    }



    else if (selectedValue == 5) {
        $("#custom_date_show_invoice").hide();
        $("#partial_payment_option").hide();
        $("#Deposit_payment_option").hide();
    }

    else if (selectedValue == 6) {
        $("#custom_date_show_invoice").hide();
        $("#partial_payment_option").hide();
        $("#Deposit_payment_option").hide();
    }
    else if (selectedValue == 7) {
        $("#partial_payment_option").hide();
        $("#custom_date_show_invoice").hide();
        $("#Deposit_payment_option").hide();
    }
    else if (selectedValue == 8) {
        $("#partial_payment_option").hide();
        $("#custom_date_show_invoice").show();
        $("#Deposit_payment_option").hide();
    }
}

function Refund_Payment_Amount() {
    $("#refund_tr").show();

    var amount = $("#refund_amount").val();
    var date = $("#date_refund").val();

    if (date == null || date == "") {
        

        swal({
            title: "DATE NOT SELECTED",
            text: "You have to Select Date",
            type: "warning",
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Okay',
        })

        return false;

    }

    $("#amount_refund_date_td").html(date);

    $("#amount_refund_td").html("£" + amount);

    var payment_id = $("#payment_method_refund_id").val();

    //if (payment_id == 1) {
    //    alert("IF");
    //    document.getElementById("amount_refund_type_td").innerHTML = "Cash";
    //}

    $("#Refund_Amount_Modal").hide();

    
    var gross=$("#invoice_gross").html();

    var total_after_refund = (gross - amount).toFixed(2);

    $("#Total_after_refund_td").html(total_after_refund);
    $("#Total_after_refund_tr").show();
}

function handling_fee() {
    var refund_amount = $("#refund_total_amount").val();
    var amount = $("#refund_total_amount").val();
    //var amount = (amount_without_fixed - 0).toFixed(2);
    //var amount = amount2.toFixed(2);
    var amount_20 = 0;
    //alert("amount")

    if (document.getElementById("handling_fee_checkbox").checked) {
        amount_20 = (amount - (0.2 * amount)).toFixed(2);
        $("#refund_amount").val(amount_20);
        //$("#amount_refund_td").val(amount_20);
        //$("#amount_refund_td").html("£" + amount_20);
    } else{
        $("#refund_amount").val(amount);
        
    }
}

function excludeVatUnchecked() {
    if (document.getElementById("excludeVat").checked) {
        $(".hidecolumn").hide();
    } else {
        $(".hidecolumn").show();
    }
}



function hhh() {
    //jQuery.noConflict();
    $("#Sold_History_Modal").modal('show');
}



function Partial_Payment() {
    var gross1 = document.getElementById("invoice_gross").innerHTML;
    
    //var gross = document.getElementById("amount_left_td").innerHTML;

    var gross = $("#amount_left_input_field").val();
    
    //alert("gross" + gross);

    $(".partial_paid").show();

    var discount = $("#discount_value").val();
    //alert("discount" + discount);
    //OLD gross wasn't getting
    //var gross = $("#gross_invoice").val();

    var amount = $("#partial_amount").val();

    //alert("amount" + amount);
    
    var rem = gross - amount - discount;
    var remaining = rem.toFixed(2);

    //alert("gross" + gross);

    $("#amount_paid_hidden").val(amount);


    document.getElementById("partial_paid_td").innerHTML = ("£" + amount);
    document.getElementById("amount_left_td").innerHTML = remaining;
    $("#left_amount_hidden").val(remaining);

    //alert("remaining" + remaining);

    //if (remaining <= 0) {
    //    $("#payment_status_id").val("Paid");
    //}


    var vat = $("#invoice_vat").text();

    $("#vat_invoice").val(vat)
    $("#gross_invoice").val(gross1)



    

    var partial_net_price = (amount/1.2).toFixed(2)

    var partial_vat_price = (amount - partial_net_price).toFixed(2);

    var partial_gross = amount;

    //$("#partial_net_id").val(partial_net_price);
    //$("#partial_vat_price_id").val(partial_vat_price);
    //$("#partial_gross_id").val(partial_gross);

    //alert("NET  " + partial_net_price + " VAT  " + partial_vat_price + " GROSS  " + partial_gross);
    
    //alert("ID " + payment_status);
    $("#payment_status_id").prop("disabled", true).css({ "background-color": "#8B0000", "color": "#fff" });

    //document.getElementById("payment_status_id").readonly = true;
    //document.getElementById("payment_status_id").readOnly = true;


    //document.getElementById("payment_status_id").style.backgroundColor = "#8B0000";
    //document.getElementById("payment_status_id").style.color = "#FFF";
    
    //alert("STATUS ID  " + $("#payment_status_id"));
    var payment_status = $("#payment_status_id").val();
    $("#payment_status_value_after_disabled").val(payment_status);
    //alert("ID " + payment_status);
    Partial_Payment_Calculation_on_Edit();


}

function Deposit_Payment() {
    $(".deposit_paid").show()

    var gross = document.getElementById("invoice_gross").innerHTML;

    //alert("Gross" + gross);

    var discount = $("#discount_value").val();

    //alert("Gross" + gross);

    

    var amount = $("#partial_amount_deposit").val();
    //alert("Deposit Value:" + amount);

    var rem = gross - amount - discount;
    var remaining = rem.toFixed(2);

    $("#amount_paid_hidden").val(amount);


    document.getElementById("deposit_paid_td").innerHTML = ("£" + amount);
    document.getElementById("amount_left_td").innerHTML = remaining;
    $("#left_amount_hidden").val(remaining);

    var vat = $("#invoice_vat").text();

    $("#vat_invoice").val(vat)
    $("#gross_invoice").val(gross)
    //$("#partial_paid_td").val(amount);
    //alert("REMAINING: " + " " + remaining);
}




function RemoveAddedRow(id) {

    //var net_value = $("#net_invoice").val();
    //var vat_value = $("#");
    //var gross_value = $("#");
    //alert("NET VALUE" + net_value);

    var total = document.getElementById("invoice_total" + id).value;
    var net = $("#net_invoice_hidden").val();

    //alert("NET" + net);

    //var vat = $("#vat_invoice").val();


    var new_net = net - total;
    var vat = (new_net * 0.2);
    var gross = +(new_net * 0.2) + +new_net;

    $("#net_invoice_hidden").val(new_net);
    $("#net_invoice").html("£" + new_net);


    $("#vat_invoice").val(vat);
    $("#invoice_vat").html(vat);


    $("#gross_invoice").val(gross);
    $("#invoice_gross").html(gross);


    $("#rowId" + id).closest(".remove_div").remove();
    rowcounterMinus();
}



function tbody_add_record(id, count) {

    //alert("tbody Counter ="+  count);
    //alert("id  " + id);
    var c_type = $("#customer_type_selected").val();
    //alert("c_type " + c_type);
    
    $("#invoice_product_id" + count).val(id);

    var sku = document.getElementById('partial_row1' + id);
    var sku_inner = sku.innerHTML;
    $("#codeforProduct" + count).val(sku_inner);

    var desc = document.getElementById('partial_row2' + id);
    var desc_inner = desc.innerHTML;
    $("#invoice_description" + count).val(desc_inner);

    var quantity = document.getElementById('partial_row3' + id);
    var quantity_inner = quantity.innerHTML;


    var price = 0;
    var price_inner = 0;


    if (c_type == 1) {
        price = document.getElementById('partial_row3' + id);
        price_inner = price.innerHTML;
        $("#invoice_price" + count).val(price_inner);
    }

    else if (c_type == 2) {
        price = document.getElementById('partial_row4' + id);
        price_inner = price.innerHTML;
        $("#invoice_price" + count).val(price_inner);
    }

    else if (c_type == 3) {
        price = document.getElementById('partial_row5' + id);
        price_inner = price.innerHTML;
        $("#invoice_price" + count).val(price_inner);
    }

    else if (c_type == 4) {
        price = document.getElementById('partial_row6' + id);
        price_inner = price.innerHTML;
        $("#invoice_price" + count).val(price_inner);
    }

    //alert("Price_inner" + price_inner);

    var vat_percent_val = +(vat_percent / 100) + +1;


    //var percent_price = vat_percent_val * price_inner;
    //alert("percent_price" + percent_price);
    total_price_with_vat = (vat_percent_val * price_inner);

    //alert("Price Vat =" + total_price_with_vat);
    var a = total_price_with_vat.toFixed(2);

    $("#invoice_price_vat" + count).val(a);



    document.getElementById("invoice_total" + count).value = "£" + price_inner;
    document.getElementById("invoice_total_vat" + count).value = "£" + total_price_with_vat;

    $("#total_hidden" + count).val(price_inner);
    $("#total_vat_hidden" + count).val(total_price_with_vat);

    $("#invoice_quantity" + count).val("1");

    $("#productList").hide();

   
    //checkSoldHistory(count);
    Total(count);

    //alert("ASDADDDD");


}







$(document).ready(function () {
    $('#kj').dataTable();
});




$('.add_new_row').click(function () {
    var i = 1;
    $('#maintable tr:last').after('<tr id="rowId" class="font-15  remove_div"><td class="border-right-td"><div class="text-center"><input placeholder="Code" class="yoyo unbold width-110" id="codeforProduct" name="yoyoyoyoyoyoyoy" onkeyup="productList(this.value)" type="text"></div></td><td class="border-right-td"><textarea class="description-text-area unbold width-100p" id="invoice_description" required="" placeholder="Description"></textarea></td><td class="border-right-td"><div class="text-center"><input id="invoice_quantity" placeholder="0" class="unbold width-45" name="" type="text"></div></td><td class="border-right-td"><div class="text-center"><input id="invoice_price" placeholder="0.0" class="new-invoice-width-boxes unbold width-68" name="" type="text"></div></td><td class="border-right-td hidecolumn text-center"><input id="invoice_price_vat" placeholder="0.0" class="new-invoice-width-boxes unbold width-78" name="" type="text"></td><td class="text-center border-right-td width-68"><div id="invoice_total" class="total_invoice_background">£0</div></td><td class="border-right-td text-center width-78 hidecolumn"><div id="invoice_total_vat" class="total_invoice_background">£0</div></td><td class="border-right-td"><div class="text-center"><input id="invoice_discount" placeholder="0.0" class="unbold width-45" name="" type="text"></div></td><td class="text-center width-25p" style="vertical-align:middle;"><a href="#" class="add_new_row showdiv"><img src="/img/images/plus_new_sale.png"></a><a href="#" class="kashif" onclick="removeRow()"><img src="/img/images/cross_new_sale.png" style="margin-left:3px;"></a><a href="#"><img src="/img/images/barcode_new_sale.png" style="margin-left:4px;"></a><a href="#"><img src="/img/images/findpost.png" style="margin-left:4px"></a></td></tr>');
});



$(document).on('click', '.kashif', function removeRow() {
});




function global_discount() {
    $(".discount_tr").show();

    var a = document.getElementById("discount_value").value;

    if (a == "") {
        alert("Please Enter Discount Price");
    }

    else {
        document.getElementById("invoice_discount_td").innerHTML = ("£" + a);

        var b = $("#invoice_gross").html();






        var after_discount = b - a;

        document.getElementById("invoice_after_discount_td").innerHTML = ("£" + after_discount.toFixed(2));

        $("#global_discount_hidden").val(a);
        $("#total_after_discount_hidden").val(after_discount);
        var amount_left = document.getElementById("amount_left_td").innerHTML;
        //alert(amount_left);
        var remaining = amount_left - a;

        document.getElementById("amount_left_td").innerHTML = ("£" + remaining.toFixed(2));
        $("#left_amount_hidden").val(remaining);
    }


}



function addNewRow(num) {
    var doc_value = $("#doc_type_page_load").val();
    //alert("doc_value    " + doc_value);
    if (doc_value != 2) {
        return false;
    }


    
    arguments.callee.myStaticVar = arguments.callee.myStaticVar || num+1;
    var count = arguments.callee.myStaticVar++;
    //alert("count " + count);
    document.getElementById("counters").value = count;

    var hrRowkoUsKaNumberDeneKLiye = document.getElementById('ApnaApnaRowNumber').value;
    document.getElementById('ApnaApnaRowNumber').value = +hrRowkoUsKaNumberDeneKLiye + +1;
    hrRowkoUsKaNumberDeneKLiye = +hrRowkoUsKaNumberDeneKLiye + +1;

    //alert("hrRowkoUsKaNumberDeneKLiye " + hrRowkoUsKaNumberDeneKLiye);

    $.ajax({
        url: '/Product/AddNewRow/',
        data: { counter: count, serialkisser: hrRowkoUsKaNumberDeneKLiye, doc_type: doc_value },
        type: "Get",
        cache: false,
        success: function (data) {


            var iddd = 'newrow' + count;

            document.getElementById('newrow' + count).innerHTML = data;

        },
        error: function (response) {
            //alert("ERROR");
        }
    })
}


function productList(e, char, serialnumber) {

    var Variable = '<%= ServerVaraible %>';

    var url = '/Product/GetProducts/';
    var flag_value = 0;


    if (e.ctrlKey && e.keyCode == 32) {
        flag_value = 1;
        //alert("CONTROL & SPACEBAR");
    }

    if (serialnumber == "" || serialnumber == null) {

        serialnumber = 1;
    }

    //alert("SUCCESS");

    var customerID = document.getElementById("exist_customer_id").value;

    if (customerID != null && customerID != "") {

        var Count = document.getElementById("counters").value;
        if (Count == "") {
            Count = 1;
        }
        //alert("Product List Counter ="+  Count)

        $("#productList").show();

        $.ajax({
            url: url,
            data: { ch: char, counte: Count, SR: serialnumber, flag: flag_value },
            cache: false,
            type: "Get",
            success: function (data) {

                document.getElementById('productList').innerHTML = data;
            },
            error: function (response) {
                //alert("productList");
            }
        })
    }
    else {

        swal({
            title: "CUSTOMER NOT SELECTED",
            text: "You have to Select Customer first, to Select Products",
            type: "warning",
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Okay',
        },
  function () {
  });

        //alert("Please Select customer First");
    }
}







function give_refund_value_set() {
    var check_give_refund = $("#check_give_refund_value").val(-1);
}

function Total(rownum) {
    var check_give_refund = $("#check_give_refund_value").val();
    var quantity = document.getElementById('invoice_quantity' + rownum).value;

    var vat_percent_val = +(vat_percent / 100) + +1;

    //alert("quantity" + quantity);

    var price = document.getElementById('invoice_price' + rownum).value;

    var priceVatTotal = (price * vat_percent_val).toFixed(3);

    //alert("priceVatTotal " + priceVatTotal);

    var total = quantity * price;

    var totalVat = quantity * priceVatTotal;

    document.getElementById('invoice_total' + rownum).value = total;
    document.getElementById('invoice_price_vat' + rownum).value = priceVatTotal;
    document.getElementById('invoice_total_vat' + rownum).value = totalVat;

    //alert("quantity" + quantity);
    //Refund Modal Tables values Setting

    if (check_give_refund == -1) {
        document.getElementById('ref_quantity' + rownum).value = quantity;
        document.getElementById('ref_price' + rownum).value = price;
        document.getElementById('ref_priceVat' + rownum).value = priceVatTotal;
        document.getElementById('ref_total' + rownum).value = total;
        document.getElementById('ref_totalVat' + rownum).value = totalVat;
    }
    //Refund Modal Tables values Setting
    //alert("quantity2   " + quantity);
    $("#total_hidden" + rownum).val(total);
    $("#total_vat_hidden" + rownum).val(totalVat);

    var discount_enter = $("#invoice_discount" + rownum).val();




    var after_discount_total = total - discount_enter;
    var after_discount_total_Vat = totalVat - discount_enter;

    document.getElementById('invoice_total' + rownum).value = after_discount_total.toFixed(2);
    document.getElementById('invoice_total_vat' + rownum).value = after_discount_total_Vat.toFixed(2);



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

    var a_parsed = a.toFixed(2);

    $("#net_invoice").html("£" + a_parsed);


    //var total_vat = (((20 / 100)) * a_parsed).toFixed(2);

    //var grosswithoutpoint = +a_parsed + +total_vat;

    //var gross = grosswithoutpoint.toFixed(2);

    var gross_without_parse = (a_parsed * vat_percent_val);

    var total_vat = (gross_without_parse - a_parsed).toFixed(2);

    var gross = gross_without_parse.toFixed(1);


    var discounted = gross - global_discount;


    $("#invoice_vat").html(total_vat);
    $("#invoice_gross").html(gross);

    $("#net_invoice_hidden").val(a);
    $("#vat_invoice").val(total_vat);
    $("#gross_invoice").val(gross);

    //$("#partial_net_id").val(a);
    //$("#partial_vat_price_id").val(total_vat);
    //$("#partial_gross_id").val(gross);

}

function Total2(rownum) {
    var vat_percent_val = +(vat_percent / 100) + +1;


    var check_give_refund = $("#check_give_refund_value").val();
    var quantity = document.getElementById('invoice_quantity' + rownum).value;

    var priceVat = document.getElementById('invoice_price_vat' + rownum).value;
    var price = ((priceVat) / vat_percent_val).toFixed(2);

    var total = quantity * price;
    var totalVat = quantity * priceVat;

    document.getElementById('invoice_total' + rownum).value = total;
    document.getElementById('invoice_price' + rownum).value = price;
    document.getElementById('invoice_price_vat' + rownum).value = priceVat;
    document.getElementById('invoice_total_vat' + rownum).value = totalVat;

    //Refund Modal Tables values Setting

    if (check_give_refund == -1) {
        document.getElementById('ref_quantity' + rownum).value = quantity;
        document.getElementById('ref_price' + rownum).value = price;
        document.getElementById('ref_priceVat' + rownum).value = priceVat;
        document.getElementById('ref_total' + rownum).value = total;
        document.getElementById('ref_totalVat' + rownum).value = totalVat;
    }
    //Refund Modal Tables values Setting


    $("#total_hidden" + rownum).val(total);
    $("#total_vat_hidden" + rownum).val(totalVat);

    var discount_enter = $("#invoice_discount" + rownum).val();

    


    var after_discount_total = total - discount_enter;
    var after_discount_total_Vat = totalVat - discount_enter;

    document.getElementById('invoice_total' + rownum).value = after_discount_total.toFixed(2);
    document.getElementById('invoice_total_vat' + rownum).value = after_discount_total_Vat.toFixed(2);


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

    var a_parsed = a.toFixed(2);

    
    $("#net_invoice").html("£" + a_parsed);


    var gross_without_parse = (a_parsed * vat_percent_val);

    var total_vat = (gross_without_parse - a_parsed).toFixed(2);

    var gross = gross_without_parse.toFixed(1);

    //alert("total_vat" + total_vat);

   



    var discounted = gross - global_discount;


    $("#invoice_vat").html(total_vat)
    $("#invoice_gross").html(gross);

    $("#net_invoice_hidden").val(a);
    $("#vat_invoice").val(total_vat);
    $("#gross_invoice").val(gross);

    //$("#partial_net_id").val(a);
    //$("#partial_vat_price_id").val(total_vat);
    //$("#partial_gross_id").val(gross);


}

function close_modal() {
    $(".close_modal").toggle();
}

function close_modal_refund() {
    $("#Refund_Amount_Modal").toggle();
}

function go(id, type_id) {

    var name = document.getElementById('juni1' + id);
    var phone = document.getElementById('juni2' + id);
    var address = document.getElementById('juni3' + id);
    var postcode = document.getElementById('juni4' + id);
    var email = document.getElementById('juni5' + id);
    var balance = document.getElementById('juni6' + id);
    var credit = document.getElementById('juni7' + id);
    var credit_limit = document.getElementById('juni8' + id).value;
    var type1 = type_id;


    //alert("name" + name);

    //alert("credit_limit" + credit_limit);

    var name1 = name.innerHTML;
    var phone1 = phone.innerHTML;
    var address1 = address.innerHTML;
    var postcode1 = postcode.innerHTML;
    var email1 = email.innerHTML;
    var balance1 = balance.innerHTML;
    var credit1 = credit.innerHTML;
    var credit_limit1 = credit_limit.innerHTML;

    //alert("credit_limit_new" + credit_limit1);
    //alert("name" + name1);

    //alert(name1);
    //alert(phone1);
    //alert(address1);
    //alert(postcode1);
    //alert(email1);
    //alert(type1);

    //$("#ExistingModal").hide;


    $("#customer_name").text(name1);
    $("#customer_address").text(phone1);
    $("#customer_postcode").text(address1);
    $("#customer_phone").text(postcode1);
    $("#customer_email").text(email1);
    $("#customer_balance").text(balance1);
    $("#customer_credit").text(credit1);
    $("#customer_credit_limit").text(credit_limit);
    $("#exist_customer_id").val(id);
    $("#credit_limit_input").val(credit_limit);



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

    $("#customer_type_selected").val(type1);


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



function checkInvoiceNumber() {
    var number = document.getElementById("invoice_number").value;

    $.ajax({

        url: '/Sale/InvoiceNumberValidation/',
        data: { invoice: number },
        type: "Get",
        cache: false,
        success: function (data) {

            if (data == "False") {

                document.getElementById("invoice_number").value = "";
                alert("Invoice_number already exist !")
            }
        },
        error: function (response) {
            alert("invoice validation Error Occured");
        }


    })
}


function GetCustomer(ID) {
    var page_id = $("#customer_list_edit_modal_value").val();


    var e = window.event;




    if (ID == -1) {
        ID = document.getElementById("customer_id").value;
    }

    //alert("ID" + ID);
    //alert("Id" + ID);

    $.ajax({

        url: "/Customer/Edit/",
        data: { id: ID, page_new_id: page_id },
        cache: false,
        type: "Get",
        success: function (data) {
            //alert("SUCCESS");

            document.getElementById("edit_customers").innerHTML = data;

            $("#ExistingModal").toggle("slow");

            //  $("#hhh").toggle();

            //  $("#ExistingModal").removeClass("fade").modal("hide");
            $("#Edit_Customer_on_Context").addClass("in").show("slow");


            //$("#hhh").show('fast');

            //$("#asa").show();


        },
        error: function (response) {
            //alert("Error" + response);
        }

    })
}



//function checkQuoteNumber() {
//    var number = document.getElementById("quote_number").value;

//    $.ajax({

//        url: '/Sale/QuoteNumberValidation/',
//        data: { quote: number },
//        type: "Get",
//        cache: false,
//        success: function (data) {

//            if (data == "False") {

//                document.getElementById("quote_number").value = "";
//                alert("Quote_number already exist !")
//            }
//        },
//        error: function (response) {
//            alert("Quote validation Error Occured");
//        }


//    })
//}

function checkItemSaleNumber() {
    var number = document.getElementById("item_sale_number").value;

    $.ajax({

        url: '/Sale/ItemSaleNumberValidation/',
        data: { item_sale: number },
        type: "Get",
        cache: false,
        success: function (data) {

            if (data == "False") {

                document.getElementById("item_sale_number").value = "";
                alert("item_sale_number already exist !")
            }
        },
        error: function (response) {
            alert("Item Sale validation Error Occured");
        }


    })
}


function checkSoldHistory(counter) {

    //$("#loader_div").show();
    //alert(counter);
    //alert("agya");
    var productID = document.getElementById("invoice_product_id" + counter).value;
    //alert("Product ID" + productID);
    
    var customerID = document.getElementById("exist_customer_id").value;
    //alert("Customer ID" + customerID);
    $.ajax({

        url: '/Sale/SoldHistory/',
        data: { productId: productID, customerId: customerID },
        cache: false,
        type: 'Get',
        success: function (data) {
            //alert("Success");
            //$("#loader_div").hide();
            document.getElementById('soldHistory').innerHTML = data;
            if (document.getElementById("sold_history_checkbox").checked && document.getElementById('soldHistory').innerHTML != "") {
                //alert("IF");
                //$("#Sold_History_Modal").modal('show');
                
                $("#Sold_History_Modal").addClass("in").show("fast");
                //alert("AFTER MODAL");
            }
            else {
                //alert("ELSE");
            }

        },
        error: function (response) {
            //alert("Error");
        }

    })
}


function outstanding_balance_function() {

    var customer_id = $("#exist_customer_id").val();

    var amount = $("#outstanding_amount").val();


    $.ajax({

        url: '/Customer/Paying_Outstanding_Balance/',
        data: { amount_paid: amount, id: customer_id },
        cache: false,
        type: "Get",
        success: function (data) {

            $("#outstanding_balance").val("£" + data);

        },
        error: function (response) {
            alert("Error");
        }

    })



}


function checkQuantityAvailable(quantiy, id) {

    var proID = document.getElementById('invoice_product_id' + id).value;
    //alert(proID);
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
                //
                document.getElementById('invoice_quantity' + id).value = "0";
            }

        },
        error: function (response) {

        }


    })
}


function submitResult() {

    if (checkCreditLimit() == false) {
        return false;
    } else {
        return true;
    }
}


//------------------------EDIT OLD CHECK CREDIT LIMIT-------------------------------

//function checkCreditLimit() {

//    var limits = document.getElementById('credit_limit_input').value;


//    var gross = document.getElementById("gross_invoice").value;
//    var payment_status = document.getElementById("payment_status_id").value;

//    var limit_float = limits - 0;

//    var limit = limit_float.toFixed(2);


//    if (payment_status != 1) {


//        if (payment_status == 3) {
//            var amount_left = document.getElementById("left_amount_hidden").value;


//            if (amount_left <= limit) {
//                alert("Partial Payment Not Reached your Credit Limit");
//                return true;
//            }
//            else {
//                alert("Partial Payment You have Reached your Credit Limit  \n You have to Update your Credit Limit");
//                return false;
//            }
//        }

//        else {
//            if (gross > limit) {
//                alert("You have Reached your Credit Limit \n You have to Update your Credit Limit");
//                return false;
//            }
//            else {
//                alert("Not Reached your Credit Limit");
//                return true;
//            }
//        }
//    }
//    else {
//        return true;
//    }
//}
//------------------------EDIT OLD CHECK CREDIT LIMIT-------------------------------

function checkCreditLimit() {

    //alert("check_credit_limit");
    var limits = document.getElementById('credit_limit_input').value;


    var gross1 = document.getElementById("gross_invoice").value;
    var payment_status = document.getElementById("payment_status_id").value;

    var gross2 = gross1 - 0;
    var gross = gross2.toFixed(2);
    var limit_float = limits - 0;


    var limit = limit_float.toFixed(2);

    //alert("gross" + gross);
    //alert("limit" + limit);


    if (payment_status != 1) {


        if (payment_status == 3) {
            var amount_left1 = document.getElementById("left_amount_hidden").value;

            var amount_left2 = amount_left1 - 0;
            var amount_left = amount_left2.toFixed(2);

            //alert("LIMIT" + limit);
            //alert("Amount Left" + amount_left);


            if (parseFloat(amount_left) <= parseFloat(limit)) {
                //alert("Amount Left" + amount_left);
                //alert("Partial Payment Not Reached your Credit Limit");
                return true;
            }
            else {

                swal({
                    title: "LIMIT REACHED",
                    text: "Reached to your Credit Limit, Please update your Credit Limit",
                    type: "warning",
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Okay',
                },
       function () {
       });

                //alert("Partial Payment You have Reached your Credit Limit\nYou have to Update your Credit Limit");
                return false;
            }
        }

        else {


            if (parseFloat(gross) > parseFloat(limit)) {

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
                return true;
            }
        }
    }
    else {
        return true;
    }
}


function rowcounterPlus() {

    var number = document.getElementById('rowCounterrr').value;

    document.getElementById('rowCounterrr').value = +number + +1;

    //alert("ADD" + document.getElementById('rowCounterrr').value)

}



function rowcounterMinus() {
    var number = document.getElementById('rowCounterrr').value;

    document.getElementById('rowCounterrr').value = number - 1;
    //alert("CROSS" + document.getElementById('rowCounterrr').value)
}



function Partial_Payment_Calculation_on_Edit() {
    var gross = $("#partial_amount").val();

    var net = (gross / 1.2).toFixed(3);

    var vat = (gross - net).toFixed(3);


    $("#partial_net_sale_history").val(net);
    $("#partial_vat_sale_history").val(vat);
    $("#partial_gross_sale_history").val(gross);

    $("#Partial_Payment_Modal").hide();

    //alert(" net  " + net + "           \n vat " + vat + "             \n  gross " + gross);
}

function close_partial_payment_modal() {
    $("#Partial_Payment_Modal").hide();
}


function view_detail_click() {
    if (document.getElementById("view_details").checked) {
        $("#input_view_detail").val(1);
    }
    else {
        $("#input_view_detail").val(0);
    }
}


