//---------------------------CREDIT BALANCE CALCULATIONS--------------------------------------
function abc123() {
    //alert("abcc");
    var old_limit = $("#old_credit_limit_").val();
    var new_limit = $("#new_credit_limit_entered_").val();
    var available_credit_limit = $("#available_credit_limit_").val();

    var amount = old_limit - available_credit_limit;
    //alert(amount);

    available_credit_limit = new_limit - amount;

    //var remaining = new_limit - amount;
    if (available_credit_limit < 0) {
        $("#check_edit_click").val(-1);
        //alert("available_credit_limit" + available_credit_limit);
        swal({
            title: "Credit Limit Error",
            text: "Balance Pending is Greater than Credit Limit",
            type: "warning",
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Okay',
        },
  function () {
  });
        return false;
    }
    else {
        $("#check_edit_click").val(0);
        //alert("else");
        //alert("available_credit_limit" + available_credit_limit);
        $("#available_credit_limit_").val(available_credit_limit);
    }
    //alert("old_limit" + old_limit + "       new_limit" + new_limit + "     credit_limit     " + available_credit_limit);

}

function click_check() {



    var value = $("#check_edit_click").val();
    //alert(value);
    if (value != -1) {
        //alert("else");

    }

    else {

        swal({
            title: "Credit Limit Error",
            text: "Balance Pending is Greater than Credit Limit",
            type: "warning",
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Okay',
        },
        function () {
        });
        return false;
    }

}

//---------------------------CREDIT BALANCE CALCULATIONS--------------------------------------


function GetCustomer(ID) {
    //alert("GetCustomer");
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

            //alert(data);

            $("#ExistingModal").hide();
            document.getElementById("edit_customers").innerHTML = data;
            $("#Edit_Customer_on_Context").addClass("in").show("slow");
            

            
            
            //  $("#hhh").toggle();

            //  $("#ExistingModal").removeClass("fade").modal("hide");
            


            //$("#hhh").show('fast');

            //$("#asa").show();


        },
        error: function (response) {
            //alert("Error" + response);
        }

    })
}

function delete_customer(ID) {
    //alert("delete_customer");
    if (ID == -1) {
        ID = document.getElementById("customer_id").value;
    }

    //alert("ID" + ID);

    $.ajax({
        url: "/Customer/Delete_Customer/",
        data: { id: ID },
        cache: false,
        type: "Get",

        success: function (data) {
            //alert("ok");
            $('#tr_' + ID).fadeOut();
            document.getElementById("updated_customer_list").innerHTML = data;
            $('#customer_list_table').dataTable();
            //$("#customer_list_table").load();
            //alert("MUZAMMIL");
        },
        error: function () {
            //alert("FAILURE");
        }
    });
}

