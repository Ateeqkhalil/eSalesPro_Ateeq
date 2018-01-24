function findByDocType(id) {
    //alert(id);
    $('#table_on_dates').DataTable().destroy();

    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/CreditReportByDocType/',
        data: { docTypeId: id },
        type: 'Get',
        cache: false,
        success: function (data) {
            //alert("Success");
            document.getElementById('table_on_dates').innerHTML = data;
            $("#loader_div").hide();
            $("#date_click_div").show();

            $('#table_on_dates').DataTable({
                "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]]
            });
            
        },
        error: function (response) {
            //alert("Failure");
        }

    })
}

function findByCustomerType(id) {
    //alert(id);
    $('#table_on_dates').DataTable().destroy();
    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/CreditReportByCustomerType/',
        data: { customerTypeId: id },
        type: 'Get',
        cache: false,
        success: function (data) {
            //alert("Success");
            document.getElementById('table_on_dates').innerHTML = data;
            $("#loader_div").hide();
            $("#date_click_div").show();
            
            $('#table_on_dates').DataTable({
                "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]]
            });
            
        },
        error: function (response) {
            //alert("Failure");
        }

    })
}

function findRecord(date) {

    $(".loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();
    $('#table_on_dates').DataTable().destroy();

    var doc = document.getElementById('docType').value;
    var custType = document.getElementById('customerType').value;
    //alert("doc " + doc + "  custType " + custType);

    $.ajax({

        url: '/Report/creditSalesRecord/',
        data: { docType: doc, customerType: custType, dateLimit: date },
        type: 'Post',
        cache: false,
        success: function (data) {


            document.getElementById('table_on_dates').innerHTML = data;
            $(".loader_div").hide();
            $("#date_click_div").show();
            
            $('#table_on_dates').DataTable({
                "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]]
            });
            
        },
        error: function () {
            alert("ERROR");

        }


    })
}

function showDateDiv() {
    var to = document.getElementById("to_date").value;
    $("#date_click_div").removeClass("none");
    $("#date_click_div").addClass("showDiv");
    $("#customer_summary").addClass("none");
}

$(document).ready(function () {
    
    $("#date_click_div").show();
    //$('#table_on_dates').dataTable();
    $('#table_on_dates').DataTable({
        "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]]
    });
    
});

function printData() {
    //var divToPrint = document.getElementById("date_click_div");

    var divToPrint = document.getElementById("date_click_div");

    //window.print(divToPrint.outerHTML);

    //alert(divToPrint);

    $(".print_btn_hide_cols").hide();

    $("#table_on_dates_filter").hide();
    $("#table_on_dates_length").hide();
    $("#table_on_dates_info").hide();
    $("#table_on_dates_paginate").hide();

    $("#table_on_dates").show();

    $("#table_on_dates").css("border", "2px solid black");

    $("th").css('background', '#404040');
    $("th").css('color', '#FFF');

    $("td").css('background', '#e6e6e6');


    

    $(".print_page_heading").show();
    newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();

    $(".print_btn_hide_cols").show();
    $(".print_page_heading").hide();

    $("#table_on_dates_filter").show();
    $("#table_on_dates_length").show();
    $("#table_on_dates_info").show();
    $("#table_on_dates_paginate").show();

}

$('.print_btn_view').on('click', function () {
    printData();
})