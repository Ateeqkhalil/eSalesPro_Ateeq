$(document).ready(function () {
    $("#table_div_Load").hide();

    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/SaleReportToday_Yesterday/',
        data: {},
        type: 'Get',
        cache: false,
        success: function (data) {
            //alert("SUCCESS");

            $("#date_click_div").show();
            document.getElementById('date_click_div').innerHTML = data;
            $("#loader_div").hide();

            $('#table_on_dates').dataTable();

            //$("#table_on_dates_length").hide();
            //$("#table_on_dates_filter").hide();

        },
        error: function (response) {
            //alert("ERROR");
        }
    })
});

function findByUser() {
    $("#table_div_Load").hide();

    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();
    var user = document.getElementById('User_ID').value;

    $.ajax({

        url: '/Report/SaleReportByUser/',
        data: { str: user },
        type: 'Get',
        cache: false,
        success: function (data) {

            //alert("SUCCESS");
            $("#date_click_div").show();
            document.getElementById('date_click_div').innerHTML = data;
            $("#loader_div").hide();
            //$("#table_on_dates_filter").hide();
            
            $('#table_on_dates').dataTable();

            $("#table_on_dates_length").hide();
            $("#table_on_dates_filter").hide();
        },
        error: function (response) {
            alert("ERROR");
        }
    })
}


function findBySerial(e) {

    var serial = document.getElementById('serial_number_id').value;

    if (e.keyCode === 13) {
        //alert("dsadadsada " + serial);
    

    $("#table_div_Load").hide();

    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();
    

    $.ajax({

        url: '/Report/SaleReportBySerial/',
        data: { str: serial },
        type: 'Get',
        cache: false,
        success: function (data) {

            //alert("SUCCESS");
            $("#date_click_div").show();
            document.getElementById('date_click_div').innerHTML = data;
            $("#loader_div").hide();
            //$("#table_on_dates_filter").hide();

              $('#table_on_dates').dataTable();

            //$("#table_on_dates_length").hide();
            //$("#table_on_dates_filter").hide();
        },
        error: function (response) {
            swal({
                title: "CANNOT FIND THE SERIAL NUMBER",
                text: "No Serial Number Available.",
                type: "warning",
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Okay',
            })
            $("#loader_div").hide();
            return false;
        }
    })
    }
}




function findByInvoice(id) {

    $("#table_div_Load").hide();
    
    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/SaleReportByInvoice/',
        data: { invoiceId: id },
        type: 'Get',
        cache: false,
        success: function (data) {
            //alert("SUCCESS");
            $('#table_on_dates').dataTable();
            $("#date_click_div").show();
            document.getElementById('date_click_div').innerHTML = data;
            $("#loader_div").hide();

            $("#table_on_dates_length").hide();
            $("#table_on_dates_filter").hide();
            
        },
        error: function (response) {
            //alert("ERROR");
        }
    })
}

function findByDocType(id) {
    
    $("#table_div_Load").hide();
    //var table = $('#table_on_dates').DataTable();

    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/SaleReportByDocType/',
        data: { docTypeId: id },
        type: 'Get',
        cache: false,
        success: function (data) {
            //alert("DAta" + data);
            
            $("#date_click_div").show();
            document.getElementById('date_click_div').innerHTML = data;
            $("#loader_div").hide();
            $('#table_on_dates').dataTable();
        },
        error: function (response) {
            
            alert(response);
        }

    })
}

function findByPayType(id) {

    $("#table_div_Load").hide();

    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/SaleReportByPayType/',
        data: { payTypeId: id },
        type: 'Get',
        cache: false,
        success: function (data) {
            
            $("#date_click_div").show();
            document.getElementById('date_click_div').innerHTML = data;
            $("#loader_div").hide();
            $('#table_on_dates').dataTable();
        },
        error: function (response) {
            
        }

    })
}

function Delete_Sale(ID) {

    $("#table_div_Load").hide();

    $("#loader_div").hide();
    //alert("IdK" + ID);

    $.ajax({

        url: "/Sale/Delete_Sale/",
        data: { id: ID },
        cache: false,
        type: "Get",
        success: function (data) {
            //alert("SUCCESS");

            $("#date_click_div").show();
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();



            //$("#hhh").show('fast');

            //$("#asa").show();


        },
        error: function (response) {
            //alert("Error" + response);
        }

    })
}

function showToDate() {
    var from = document.getElementById("from_date").value;

    if (from == "") {
    }

    else {
        document.getElementById("to_date").removeAttribute('disabled');
    }
}

$(document).ready(function () {
    $('#table_Load').dataTable();
});

function findByDate() {
    
    $("#table_div_Load").hide();

    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();
    
    //alert("dsfdsdfvdfgdfgdfsgdfhbgefagdsgrgfsgsdggbwdgdsagfgfgdfg");
    var to = document.getElementById('to_date').value;
    var from = document.getElementById('from_date').value;
    $.ajax({

        url: '/Report/SaleReportByDate/',
        data: { dateFrom: from, dateTo: to },
        type: 'Get',
        cache: false,
        success: function (data) {
            $("#date_click_div").show();
            document.getElementById('date_click_div').innerHTML = data;
            $("#loader_div").hide();
            $('#table_on_dates').dataTable();
        },
        error: function (response) {

        }

    })
}


function Delete_Sale_by_Ajax(ID,del_id) {
    //alert("del_id" + del_id);
    //alert("ID" + ID);
    $("#table_div_Load").hide();
    $("#loader_div").show();
    $("#date_click_div").hide();
    $.ajax({
        url: "/Sale/Delete_Sale/",
        data: { id: ID , page:del_id },
        cache: false,
        type: "Post",
        
        success: function (data) {
            document.getElementById('date_click_div').innerHTML = data;
            
            $("#loader_div").hide();
            if (del_id == 1) {
                //alert(del_id);
                $('#tr_' + ID).fadeOut();
                $("#table_div_Load").show();

                $('#table_Load').dataTable();
            }
            else {
                //alert(del_id);
                $('#Partial_tr' + ID).fadeOut();
                $("#date_click_div").show();
                $('#table_on_dates').dataTable();
                del_id = 2;
            }
        },
        error: function () {
            alert("FAILURE");
        }
    });
}






function Delete_Sale_Error() {
    swal({
        title: "CANNOT DELETE THE SALE",
        text: "You have to clear all Dues Before Deleting it.",
        type: "warning",
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Okay',
    })

    return false;
}