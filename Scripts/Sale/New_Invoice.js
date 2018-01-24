$(document).ready(function () {
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
});

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

                //$("#ExistingModal").toggle("slow");

                //  $("#hhh").toggle();

                //  $("#ExistingModal").removeClass("fade").modal("hide");
                


                //$("#hhh").show('fast');

                //$("#asa").show();


            },
            error: function (response) {
                alert("Error" + response);
            }

        })




    }

}

function close_image_modal(){
    $("#Image_Modal").hide();
}


function run_invoice() {
    //alert("Run Invoice");

    var selectedValue = document.getElementById("language").value;
    var exclude = $("#excludeVat").val();
    //alert("Selected Value: " + selectedValue);

    document.getElementById('doc_type_page_load').value = selectedValue;

    if (selectedValue == 1) {


        //alert("Invoice Document");
        
        $(".hide_partial_deposit_quote").show();
        $(".hide_partial_deposit_quote").show();
        

        //Invoice Show
        $("#payment_method_div").show();
        $("#payment_status_tr").show();
        $("#invoice_number_div").show();
        $("#new_invoice_heading").show();
        $("#hideExcludeVat").show();

        $("#net_tr").show();
        $("#vat_tr").show();

        $(".priceVAT").show();

        $("#global_dicsount_div").show();
        $("#hideExcludeVat").show();

        //Quote Hide
        $("#quote_number_div").hide();
        $("#new_quote_heading").hide();

        //Item Sale Hide
        $("#show_details").hide();
        $("#item_sale_div").hide();
        $("#new_item_sale_heading").hide();

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

        //alert("Quote Document");

        $(".hide_partial_deposit_quote").hide();
        $(".hide_partial_deposit_quote").hide();

        $("#hideExcludeVat").show();
        $("#net_tr").show();
        $("#vat_tr").show();

        //Invoice Hide
        $("#payment_method_div").hide();
        $("#payment_status_tr").hide();
        $("#invoice_number_div").hide();
        $("#new_invoice_heading").hide();

        $("#global_discount_div").hide();

        //Item Sale Hide
        $("#item_sale_div").hide();
        $("#new_item_sale_heading").hide();


        //Quote Show
        $("#quote_number_div").show();
        $("#new_quote_heading").show();
        $("#show_details").show();
        $(".priceVAT").show();

        if (exclude == 1) {
            $(".priceVAT").hide();
            $("#net_tr").hide();
            $("#vat_tr").hide();

        }
    }

    else if (selectedValue == 3) {
        //document.getElementById('doc_type_page_load').value = selectedValue;

        //alert("Item Sale Document");

        $(".hide_partial_deposit_quote").show();
        $(".hide_partial_deposit_quote").show();
       
        //Invoice Hide
        $("#invoice_number_div").hide();
        $("#new_invoice_heading").hide();
        $("#hideExcludeVat").hide();
        $("#net_tr").hide();
        $("#vat_tr").hide();


        //Quote Hide
        $("#quote_number_div").hide();
        $("#new_quote_heading").hide();


        $("#payment_method_div").show();
        $("#global_discount_div").show();
        $("#payment_status_tr").show();


        $(".priceVAT").hide();

        $("#show_details").hide();
        
        $("#item_sale_div").show();
        $("#new_item_sale_heading").show();

        $("#input_view_detail").val(0);
        document.getElementById("view_details").checked = false;

        //$("#item_sale_id").show();
        //$("#invoice_id").hide();
        //$("#quote_id").hide();



        //var b = $("#language option:selected").text();
        //alert(b);

        //$("#language").val("Item Sale");



    }

    //var aaa = '@(ViewBag.config.Vat_Percentage)';

   
    
    
}

function set_amount_left_in_partial_payment() {
    var amount = document.getElementById("invoice_gross").innerHTML;
    //alert(amount);

    $("#partial_amount").val(amount);

}


function submitResult() {

    //alert('submit');


    if (checkCreditLimit() == false) {
        return false;

    } else {
        return true;
    }
}

function right_click(id) {
    alert("Id" + id);
}



function Different_Address() {
    if (document.getElementById("billing_address_checkbox").checked) {
        $(".Shipping_Address_Div").hide();
    }
    else {
        $(".Shipping_Address_Div").show();
    }
}


function close_modal() {
    $("#Edit_Customer_on_Context").toggle();
    //$("#Edit_Customer_Modal").hide();
    

    //alert("CLOSE");
}

//$('.rightclick').on('contextmenu', function (e) {
//    alert(e.target.id);
    
//    alert('you right clicked! congrats.');
//    return false;
//});


function customer_credit() {
    
    var balance = document.getElementById("customer_balance");
    var balance1 = balance.innerHTML;
    //alert(balance1);



    if (balance1 <= 0) {
        $(".displayDIV").hide();
    }
    else {
        $(".displayDIV").show();
        $("#outstanding_balance").val("£" + balance1);
    }
}



function excludeVatUnchecked() {
    if (document.getElementById("excludeVat").checked) {
        $(".hidecolumn").hide();
        //$(".PriceVAT").show();
    } else {
        $(".hidecolumn").show();
    }
}





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

function draft_saved() {
    //alert("DRAFT");

    $("#payment_status_id").val(2);
    //$("#po_status").val(1);
    var paid= $("#amount_paid_hidden").val();
    $("#left_amount_hidden").val(paid);
    $("#amount_paid_hidden").val(0);
    //payment_status();
}

function payment_status() {
    var selectedValue = document.getElementById("payment_status_id").value;
    //alert(selectedValue);
    //jQuery.noConflict();
    var gross = $("#gross_invoice").val();
    $("#amount_paid_hidden").val(0);

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

        var amount = document.getElementById("invoice_gross").innerHTML;
        //alert(amount);

        $("#partial_amount").val(amount);

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

function hhh() {
    $("#Sold_History_Modal").modal('show');
}

function Partial_Payment_Calculation() {
    var gross = $("#partial_amount").val();

    var net = (gross / 1.2).toFixed(3);

    var vat = (gross - net).toFixed(3);


    $("#partial_net_sale_history").val(net);
    $("#partial_vat_sale_history").val(vat);
    $("#partial_gross_sale_history").val(gross);

    //alert(" net  " + net + "           \n vat " + vat + "             \n  gross " + gross);
}




function Partial_Payment() {

    $(".partial_paid").show();
    $("#deposit_paid_tr").hide();

    var discount = $("#discount_value").val();

    var gross = $("#gross_invoice").val();

    var amount = $("#partial_amount").val();

    var rem = gross - amount - discount;
    var remaining = rem.toFixed(2);

    $("#amount_paid_hidden").val(amount);


    document.getElementById("partial_paid_td").innerHTML = ("£" + amount);
    document.getElementById("amount_left_td").innerHTML = remaining;
    $("#left_amount_hidden").val(remaining);
    //$("#partial_paid_td").val(amount);
    //alert("REMAINING" + remaining);//alert("REMAINING" + remaining);

    Partial_Payment_Calculation()

}

function Deposit_Payment() {
    $(".deposit_paid").show();
    $("#partial_paid_tr").hide();

    var discount = $("#discount_value").val();

    var gross = $("#gross_invoice").val();

    var amount = $("#partial_amount_deposit").val();
    //alert("Deposit Value:" + amount);

    var rem = gross - amount - discount;
    var remaining = rem.toFixed(2);

    $("#amount_paid_hidden").val(amount);


    document.getElementById("deposit_paid_td").innerHTML = ("£" + amount);
    document.getElementById("amount_left_td").innerHTML = remaining;
    $("#left_amount_hidden").val(remaining);
    //$("#partial_paid_td").val(amount);
    //alert("REMAINING: " + " " + remaining);
}

function RemoveAddedRow(id) {
    //alert(id);
    var total = document.getElementById("invoice_total_vat" + id).value;
    var net = $("#gross_invoice").val();

    //var vat = $("#vat_invoice").val();
    

    //var new_net = net - total;
    //var vat = (new_net * 0.2);
    //var gross = +(new_net * 0.2) + +new_net;

    var gross = (net - total).toFixed(2);
    var new_net = (gross / 1.2).toFixed(2);
    var vat = (gross - new_net).toFixed(2);

    $("#net_invoice_hidden").val(new_net);
    $("#net_invoice").html("£" + new_net);


    $("#vat_invoice").val(vat);
    $("#invoice_vat").html(vat);


    $("#gross_invoice").val(gross);
    $("#invoice_gross").html(gross);

    
    //alert("NEW NET" + new_net);
    $("#rowId" + id).closest(".remove_div").remove();
    rowcounterMinus();
    $("#serial_number_value_input_checkbox" + id).val(0);

    payment_status();

    //$("#serial_number_value_input_checkbox" + id).val(0);

    //$("#serial_number_value_input_checkbox" + id).closest(".remove_div").remove();


    //alert("NET" + a);
}





function tbody_add_record(id, count) {

    //alert("count" + count);

    var c_type = $("#customer_type_selected").val();
    //alert("c_type " + c_type);

    var sku = document.getElementById('partial_row1' + id);
    $("#invoice_product_id" + count).val(id);

    var sku_inner = sku.innerHTML;
    $("#codeforProduct" + count).val(sku_inner);

    var desc = document.getElementById('partial_row2' + id);
    var desc_inner = desc.innerHTML;
    $("#invoice_description" + count).val(desc_inner);

    var quantity = document.getElementById('partial_row3' + id);
    var quantity_inner = quantity.innerHTML;
    //$("#invoice_quantity" + count).val(quantity_inner);


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
    //alert("a" + a);
    //            alert("a =" + a);


    //var price_vat = document.getElementById('partial_row5' + id);
    //var price_vat_inner = total_price_with_vat.innerHTML;
    $("#invoice_price_vat" + count).val(a);

    //var v = $("#invoice_price_vat" + count).val();
    //alert("V = " + v);

    document.getElementById("invoice_total" + count).value = "£" + price_inner;
    document.getElementById("invoice_total_vat" + count).value = "£" + total_price_with_vat;

    $("#total_hidden" + count).val(price_inner);
    $("#total_vat_hidden" + count).val(total_price_with_vat);

    //alert("TOTAL : " + price_inner);
    //alert("TOTAL VAT : " + total_price_with_vat);

    //$("#invoice_discount" + count).val("0");
    $("#invoice_quantity" + count).val("1");

    //alert("ITEM SALE1");

    $("#productList").hide();
    //alert(price_inner);

    //alert("ITEM SALE2");

    //$("#payment_status_id").prop("disabled", false);

    checkSoldHistory(count);
    Total(count);
    
    addNewRow();
    rowcounterPlus();

    //if($("#excludeVat").val() == 1){
    //    $(".hidecolumn").hide();
    //    alert("TBODY");
    //}
}





$(document).ready(function () {
    $('#kj').dataTable();
});





$('.add_new_row').click(function () {
    var i = 1;
    $('#maintable tr:last').after('<tr id="rowId" class="font-15  remove_div"><td class="border-right-td"><div class="text-center"><input placeholder="Code" class="yoyo unbold width-110" id="codeforProduct" name="yoyoyoyoyoyoyoy" onkeyup="productList(this.value)" type="text"></div></td><td class="border-right-td"><textarea class="description-text-area unbold width-100p" id="invoice_description" required="" placeholder="Description"></textarea></td><td class="border-right-td"><div class="text-center"><input id="invoice_quantity" placeholder="0" class="unbold width-45" name="" type="text"></div></td><td class="border-right-td"><div class="text-center"><input id="invoice_price" placeholder="0.0" class="new-invoice-width-boxes unbold width-68" name="" type="text"></div></td><td class="border-right-td hidecolumn text-center"><input id="invoice_price_vat" placeholder="0.0" class="new-invoice-width-boxes unbold width-78" name="" type="text"></td><td class="text-center border-right-td width-68"><div id="invoice_total" class="total_invoice_background">£0</div></td><td class="border-right-td text-center width-78 hidecolumn"><div id="invoice_total_vat" class="total_invoice_background">£0</div></td><td class="border-right-td"><div class="text-center"><input id="invoice_discount" placeholder="0.0" class="unbold width-45" name="" type="text"></div></td><td class="text-center width-25p" style="vertical-align:middle;"><a href="#" class="add_new_row showdiv"><img src="/img/images/plus_new_sale.png"></a><a href="#" class="kashif" onclick="removeRow()"><img src="/img/images/cross_new_sale.png" style="margin-left:3px;"></a><a href="#"><img src="/img/images/barcode_new_sale.png" style="margin-left:4px;"></a><a href="#"><img src="/img/images/findpost.png" style="margin-left:4px"></a></td></tr>');
});

//function removeRow()

$(document).on('click', '.kashif', function removeRow() {
});




function global_discount() {
    $(".discount_tr").show();

    var a = document.getElementById("discount_value").value;
    //alert(a);

    if (a == "") {
        swal({
            title: "DISCOUNT EMPTY",
            text: "Please Enter Discount Price",
            type: "warning",
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Okay',
        },
     function () {
     });
    }

    else {
        document.getElementById("invoice_discount_td").innerHTML = ("£" + a);

        var b = $("#invoice_gross").html();






        var after_discount = b - a;
        //alert("After :" + after_discount);
        document.getElementById("invoice_after_discount_td").innerHTML = ("£" + after_discount.toFixed(2));

        $("#global_discount_hidden").val(a);
        $("#total_after_discount_hidden").val(after_discount);
        var amount_left = document.getElementById("amount_left_td").innerHTML;
        var remaining = amount_left - a;

        document.getElementById("amount_left_td").innerHTML = ("£" + remaining.toFixed(2));
        $("#left_amount_hidden").val(remaining);
    }


}


function addNewRow() {
    //alert();
    //alert("ADD_NEW_ROW")
    var doc_value = $("#doc_type_page_load").val();
    //alert("doc_value       " + doc_value);
    
    arguments.callee.myStaticVar = arguments.callee.myStaticVar || 2;
    var count = arguments.callee.myStaticVar++;
    document.getElementById("counters").value = count;


    var hrRowkoUsKaNumberDeneKLiye = document.getElementById('ApnaApnaRowNumber').value;
    document.getElementById('ApnaApnaRowNumber').value = +hrRowkoUsKaNumberDeneKLiye + +1;
    hrRowkoUsKaNumberDeneKLiye = +hrRowkoUsKaNumberDeneKLiye + +1;

    var exclude_vat_value = $("#excludeVat").val();
    //alert(exclude_vat_value);

    $.ajax({

        url: '/Product/AddNewRow/',
        data: { counter: count, serialkisser: hrRowkoUsKaNumberDeneKLiye, doc_type: doc_value,exclude_vat:exclude_vat_value },
        type: "Get",
        cache: false,
        success: function (data) {
            

            var iddd = 'newrow' + count;

            document.getElementById('newrow' + count).innerHTML = data;

        }

    })
}

function spacebar(e) {
    if (e.keyCode == 32) {
        alert("spacebar");
    }
    else {
        alert("ELSE");
    }

}


function productList(e, char, serialnumber) {


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
            data: { ch: char, counte: Count, SR: serialnumber, flag:flag_value },
            cache: false,
            type: "Get",
            success: function (data) {

                document.getElementById('productList').innerHTML = data;
                
            },
            error: function (response) {
                //alert("ERRORRRRRRRRRRRRRRRRRRRRR");
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


function Clear_Row_Values() {
    $("#codeforProduct1").val("");
    $("#invoice_description1").val("");
    $("#invoice_quantity1").val("");
    $("#invoice_price1").val("");
    $("#invoice_price_vat1").val("");
    $("#invoice_total1").val("");
    $("#invoice_total_vat1").val("");
    $("#invoice_discount1").val("");

}




function Total(rownum) {
    var vat_percent_val = +(vat_percent / 100) + +1;
    //alert("rownum =  " + rownum);
    //alert("ROWCount Total" + document.getElementById('rowCounterrr').value);

    var quantity = document.getElementById('invoice_quantity' + rownum).value;

    var price = document.getElementById('invoice_price' + rownum).value;

    //var price_vat = ((20 / 100)) * price;

    //var price_vat = (+(vat_percent / 100) + +1) * price;

    //var price_vat = vat_percent_val;

    //alert(price_vat);
    

    var priceVatTotal = (price * vat_percent_val).toFixed(3);


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
    //alert("a " + a);
    var a_parsed = a.toFixed(3);
    //alert("a_parsed " + a_parsed);
    //alert("AGYA");

    $("#net_invoice").html("£" + a_parsed);


    //var total_vat = (((20 / 100)) * a_parsed).toFixed(2);

    

    var gross_without_parse = (a_parsed * vat_percent_val);

    var total_vat = (gross_without_parse - a_parsed).toFixed(2);

    var gross = gross_without_parse.toFixed(1);


    var discounted = gross - global_discount;


    $("#invoice_vat").html(total_vat);
    $("#invoice_gross").html(gross);

    $("#net_invoice_hidden").val(a_parsed);
    $("#vat_invoice").val(total_vat);
    $("#gross_invoice").val(gross);

    $("#amount_paid_hidden").val(gross);
    $("#payment_status_id").val(1);
    $("#partial_payment_option").hide();
}

function Total2(rownum) {

    var vat_percent_val = +(vat_percent / 100) + +1;
    //alert("ROWCount Total 2"+document.getElementById('rowCounterrr').value);

    var quantity = document.getElementById('invoice_quantity' + rownum).value;

    var priceVat = document.getElementById('invoice_price_vat' + rownum).value;
    var price = ((priceVat) / vat_percent_val).toFixed(2);

    

    var total = quantity * price;
    var totalVat = quantity * priceVat;

    document.getElementById('invoice_total' + rownum).value = total;
    document.getElementById('invoice_price' + rownum).value = price;
    document.getElementById('invoice_price_vat' + rownum).value = priceVat;
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

        check = document.getElementById('invoice_total_vat' + i);

        //alert("CHECK" + check);

        if (check !== null) {

            totaaaal = document.getElementById('invoice_total_vat' + i).value;

            a = +totaaaal + +a;
        }
        else {

            size = +size + +1;
            //alert("SIZE" + size);
        }
        //alert("i  " + i + "   totaaaal    " + totaaaal + "  a  " + a);
    }

    var a_parsed = a.toFixed(2);

    //$("#net_invoice").html("£" + a_parsed);
    //var total_vat = (((20 / 100)) * a_parsed).toFixed(2);

    //var gross_without_parse = +a_parsed + +total_vat;

    //var gross = gross_without_parse.toFixed(2);



    //var discounted = gross - global_discount;


    //$("#invoice_vat").html(total_vat)
    //$("#invoice_gross").html(gross);

    //$("#net_invoice_hidden").val(a_parsed);
    //$("#vat_invoice").val(total_vat);
    //$("#gross_invoice").val(gross);

    //$("#amount_paid_hidden").val(gross);
    ////alert("ASASSASAS");
    //$("#payment_status_id").val(1);
    //$("#partial_payment_option").hide();



    
    var net_pr = (a_parsed / vat_percent_val).toFixed(2);
    $("#net_invoice").html("£" + net_pr);
    
    var total_vat = (a_parsed - net_pr).toFixed(2);

    //var gross_without_parse = +a_parsed + +total_vat;

    //var gross = gross_without_parse.toFixed(2);



    var discounted = a_parsed - global_discount;


    $("#invoice_vat").html(total_vat)
    $("#invoice_gross").html(a_parsed);

    $("#net_invoice_hidden").val(net_pr);
    $("#vat_invoice").val(total_vat);
    $("#gross_invoice").val(a_parsed);

    $("#amount_paid_hidden").val(a_parsed);
    //alert("ASASSASAS");
    $("#payment_status_id").val(1);
    $("#partial_payment_option").hide();
}





function checkInvoiceNumber() {
    var number = document.getElementById("invoice_number").value;

    $.ajax({

        url: '/Sale/InvoiceNumberValidation/',
        data: { invoice: number },
        type: "Get",
        cache: false,
        success: function (data) {
            //alert(data);
            $("#custom_document_type_value").val(data);
            if (data == "False") {

                document.getElementById("invoice_number").value = "";
                swal({
                    title: "INVOICE NUMBER EXIST",
                    text: "Invoice Number Exist, Enter Some other Number",
                    type: "warning",
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Okay',
                },
    function () {
    });
            }

        },
        error: function (response) {
            alert("invoice validation Error Occured");
        }


    })
}




function checkQuoteNumber() {
    var number = document.getElementById("quote_number").value;

    $.ajax({

        url: '/Sale/QuoteNumberValidation/',
        data: { quote: number },
        type: "Get",
        cache: false,
        success: function (data) {
            $("#custom_document_type_value").val(data);

            if (data == "False") {
                document.getElementById("quote_number").value = "";
                
                swal({
                    title: "Quote NUMBER EXIST",
                    text: "Quote Number Exist, Enter Some other Number",
                    type: "warning",
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Okay',
                },
    function () {
    });
            }
        },
        error: function (response) {
            alert("Quote validation Error Occured");
        }


    })
}



function checkItemSaleNumber() {
    var number = document.getElementById("item_sale_number").value;

    $.ajax({

        url: '/Sale/ItemSaleNumberValidation/',
        data: { item_sale: number },
        type: "Get",
        cache: false,
        success: function (data) {
            $("#custom_document_type_value").val(data);
            if (data == "False") {

                document.getElementById("item_sale_number").value = "";
                //alert("item_sale_number already exist !")
                swal({
                    title: "ITEM SALE NUMBER EXIST",
                    text: "Item Sale Number Exist, Enter Some other Number",
                    type: "warning",
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Okay',
                },
   function () {
   });
            }
        },
        error: function (response) {
            alert("Item Sale validation Error Occured");
        }


    })
}

function checkSoldHistory(counter) {

    //alert(counter);
    //alert("agya");

    //$("#loader_div").show();
    if (document.getElementById("sold_history_checkbox").checked) {
        //alert("IF");
        var productID = document.getElementById("invoice_product_id" + counter).value;
        //alert("proID = " + productID);
        var customerID = document.getElementById("exist_customer_id").value;
        //alert("customID = " + customerID);
        $.ajax({

            url: '/Sale/SoldHistory/',
            data: { productId: productID, customerId: customerID },
            cache: false,
            type: 'Get',
            success: function (data) {
                //$("#loader_div").hide();
                //alert("Success");
                //alert(data);
                document.getElementById('soldHistory').innerHTML = data;
                if (document.getElementById("sold_history_checkbox").checked && document.getElementById('soldHistory').innerHTML != "") {
                    //alert("Checked Sold History");

                    //alert("Success Before Modal")
                    $("#Sold_History_Modal").modal('show');
                    //alert("Success After Modal")
                }
                else {
                    //alert("Unchecked Sold History");
                    //$("#Sold_History_Modal").modal('show');
                }

            },
            error: function (response) {
                alert("Error");
            }

        })
    }
}


function outstanding_balance_function() {
    $(".hide_invoice").hide();
    $("#loader_div").show();
    //alert("Outstanding Balance");
    var payment_method = $("#payment_method_id_outstanding_balance").val();
    //alert("payment_method " + payment_method);
    var customer_id = $("#exist_customer_id").val();
    //alert("customer_id "+customer_id);
    //var amount = $("#outstanding_amount").val();
    //alert("amount " + amount);

    var amount = $("#customer_balance").text();
    //alert("amount " + amount);

    $.ajax({

        url: '/Customer/Paying_Outstanding_Balance/',
        data: { amount_paid: amount, id : customer_id, method_id : payment_method },
        cache: false,
        type: "Get",
        success: function (data) {
            //alert(data);
            $(".hide_invoice").show();
            $("#loader_div").hide();
            $("#outstanding_balance").val("£" + data);
            location.reload();
        },
        error: function (response) {
            alert("Error");
        }

    })

    //$("#Outstanding_modal").hide();

}


function set_outstanding_value() {
    var amount = $("#outstanding_balance").val();
    //alert(amount);
    $("#outstanding_amount").val(amount);
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
                //
                document.getElementById('invoice_quantity' + id).value = "0";
            }

        },
        error: function (response) {

        }


    })
}






function purchase_number_empty() {
    alert("dsadas");
    $("#purchase_number").val("1231313");
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


//----------------------------SERIAL NUMBER JS FUNCTIONS------------------------------------

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

  
    
    var url = '/Product/Check_Serial_Number/';

  
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

                    if(value == -1 && data=="False"){

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





function ajax_call_for_serial(serial_input) {
    alert("serial_input" + serial_input);

    

  
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



//----------------------------SERIAL NUMBER JS FUNCTIONS------------------------------------





//function Serial_Number_Enter_Click(e) {

//    //alert("Serial Number");

//    var counter = $("#rowCounterSerialNumber").val();
//    var loop_size = $("#quantity_for_loop").val();
//    var enter_count = $("#EnterCounterSerialNumber").val();

//    //alert("enter_count " + enter_count + "  loop_size  " + loop_size)

//    if (enter_count != loop_size) {
//        //    alert("IF COUNT");

//        if (e.keyCode === 13) {
//            //alert("ENTER");
//            //e.preventDefault(); // Ensure it is only this code that rusn

//            //alert("variable " + variable);

//            var variable = " (Serial No. " + $("#serial_number_value").val() + ")";
//            var box = $("#invoice_description" + counter);
//            box.val(box.val() + variable);

//            enter_count = +enter_count + +1;

//            $("#EnterCounterSerialNumber").val(enter_count);

//            $("#serial_number_value").val("")
//            if (enter_count == loop_size) {
//                $("#Serial_Number_Modal").hide();
//            }
//            //alert($("#invoice_description" + counter).append($.trim(variable).text()));
//            //$("#invoice_description"+counter).append(variable);
//        }
//    }
//}


//function close_serial_number_modal() {
//    $("#Serial_Number_Modal").hide();
//}



var addButton = $('.add_button');
var wrapper = $('.field_wrapper');
var counter = 2;
$(addButton).click(function () {
    //alert("asasas");
    //$("#maintable").append('<tr class="font-15 id remove_div"><td class="border-right-td"><div class="text-center"><input placeholder="Code" class="yoyo unbold width-110 text-center" id="codeforProduct' + counter + '" name="yoyoyoyoyoyoyoy" onkeyup="productList(event,this.value,@ViewBag.serialNumber);Total(counter)" type="text" required></div></td><td class="border-right-td"><textarea class="2 description-text-area unbold width-100p text-center" id="invoice_description ' + counter + '" name="invoice_description" required="" placeholder="Description"></textarea></td><td class="border-right-td"><div class="text-center"> <input onkeypress="validate(event);" id="invoice_quantity' + counter + '" onkeyup="Total(@counter);checkQuantityAvailable(this.value,@counter);" placeholder="0" class="3 unbold width-45 text-center" name="invoice_quantity" type="text" required></div></td><td class="border-right-td"><div class="text-center"> <input onkeypress="validate(event)" id="invoice_price' + counter + '" onkeyup="Total(@counter)" placeholder="0.0" class="4 new-invoice-width-boxes unbold width-68 text-center" name="invoice_price" onkeyup="Total(@counter)" type="text" required></div></td><td class="border-right-td hidecolumn text-center"> <input onkeypress="validate(event)" id="invoice_price_vat' + counter + '" onkeyup="Total2(@counter)" placeholder="0.0" class="5 new-invoice-width-boxes unbold width-78 text-center" name="invoice_price_vat" type="text" required></td><td class="border-right-td text-center"><input readonly id="invoice_total' + counter + '" placeholder="0.0" class="6 new-invoice-width-boxes unbold width-68 text-center" name="invoice_total" type="text"></td><td class="border-right-td hidecolumn text-center"> <input readonly id="invoice_total_vat' + counter + '" placeholder="0.0" class="7 new-invoice-width-boxes unbold width-78 text-center" name="invoice_total_vat" type="text"></td>@*<td class="text-center border-right-td width-68" style="display:none"><div id="@String.Concat(" invoice_total ",counter)" class="6 total_invoice_background text-center">£0</div></td><td class="border-right-td text-center width-78 hidecolumn" style="display:none"><div id="@String.Concat(" invoice_total_vat ",counter)" class="7 total_invoice_background text-center">£0</div></td>*@<td class="border-right-td"><div class="text-center"> <input onkeypress="validate(event)" onkeyup="Total(@counter);" id="@String.Concat(" invoice_discount ",@counter)" placeholder="0.0" class="8 unbold width-45 text-center" name="@String.Concat(" invoice_discount ",counter)" type="text"></div></td><td class="hidden" style="display:none"> <input type="text" class="hidden" name="@String.Concat(" invoice_product_id ",counter)" id="@String.Concat(" invoice_product_id ",counter)" /></td><td class="text-center width-27p" style="vertical-align:middle;"> <a href="#" class="showdiv"> <img src="/img/images/plus_new_sale.png"> </a> <a href="#" class="remove" onclick="RemoveAddedRow(@counter)"> <img src="/img/images/cross_new_sale.png"> </a> <a href="#" id="@String.Concat(" serial_number ",counter)" onclick="serial_number_click(@counter)"> <img src="/img/images/barcode_new_sale.png"> </a> <a href="#" data-target="#" data-toggle="modal" id="@String.Concat(" img",counter)" onclick="image_click(@counter)"><img src="~/img/images/findpost.png"/></a></td> <input type="hidden" id="@String.Concat(" total_hidden ", counter)" name="@String.Concat(" total_hidden ", counter)"/> <input type="hidden" id="@String.Concat(" total_vat_hidden ", counter)" name="@String.Concat(" total_vat_hidden ", counter)"/> <input type="text" class="remove_div" id="@String.Concat(" serial_number_value_input_checkbox ", counter)" name="@String.Concat(" serial_number_value_input_checkbox ", counter)" value="0" hidden/></tr>');
    

    //jQuery('#from_medical_date' + hospital_counter).datepicker({
    //    format: 'dd-mm-yyyy',
    //    autoclose: true,
    //    todayHighlight: true
    //});

    //jQuery('#to_medical_date' + hospital_counter).datepicker({
    //    format: 'dd-mm-yyyy',
    //    autoclose: true,
    //    todayHighlight: true
    //});



    counter = +counter + +1;
});

$(wrapper).on('click', '.remove_button', function (e) {

    e.preventDefault();
    $(this).closest('.r').remove();
});

function view_detail_click() {
    if (document.getElementById("view_details").checked) {
        $("#input_view_detail").val(1);
    }
    else {
        $("#input_view_detail").val(0);
    }
}