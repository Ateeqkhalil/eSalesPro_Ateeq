function Loading_Purchase_Report() {
    alert("ASASASAS");
    //$("#table_div_Load").hide();

}
$(document).ready(function () {

    $("#loader_div").show();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/PurchaseReportToday_Yesterday/',
        data: {},
        type: 'Get',
        cache: false,
        success: function (data) {
            //alert("SUCCESS");

            $("#date_click_div").show();
            document.getElementById('updatedDiv').innerHTML = data;
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



function poByPayPriority(id) {
    //alert("ASASSAS");
    //$("#loader_div").show();
    $("#loader_div").show();

    $.ajax({

        url: '/Report/purchaseReportByPayPriority/',
        data: { id: id },
        cache: false,
        type: 'Post',
        success: function (data) {

            document.getElementById('updatedDiv').innerHTML = data;
            //$("#loader_div").hide();
            $("#loader_div").hide();
            //$("#table_on_dates_filter").hide();

            $('#table_on_dates').dataTable();
        },
        error: function (response) {

        }


    })
}

function poByPayStatus(id) {
    $("#loader_div").show();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/purchaseReportByPayStatus/',
        data: { id: id },
        cache: false,
        type: 'Post',
        success: function (data) {
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();
            $("#date_click_div").show();
            $('#table_on_dates').dataTable();
        },
        error: function (response) {

        }


    })


}

function poByNumber(id) {
    id = +id + +1;
    //alert("ID " + id)
    $("#loader_div").show();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/purchaseReportByNumber/',
        data: { id: id },
        cache: false,
        type: 'Post',
        success: function (data) {
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();
            $("#date_click_div").show();
            $('#table_on_dates').dataTable();
        },
        error: function (response) {

        }


    })

}

function poByDate() {
    $("#loader_div").show();
    $("#date_click_div").hide();

    var to = document.getElementById('to_date').value;
    var from = document.getElementById('from_date').value;

    $.ajax({

        url: '/Report/purchaseReportByDate/',
        data: { fromDate: from, toDate: to },
        cache: false,
        type: 'Post',
        success: function (data) {
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();
            $("#date_click_div").show();
            $('#table_on_dates').dataTable();
        },
        error: function (response) {

        }


    })

}