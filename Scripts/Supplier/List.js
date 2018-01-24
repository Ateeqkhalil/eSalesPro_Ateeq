function edit_supp(Id) {
    //var page = $("#pageValue").val();
    

    //alert("ASASASDADADASDAS");
    //alert("Page" + page);
    $.ajax({

        url: '/Supplier/Edit_Supplier_Values/',
        data: { id: Id },
        cache: false,
        type: 'Get',
        success: function (data) {
            //alert("SUCCESS");
            document.getElementById('updated_div').innerHTML = data;
            $("#EdittttModal").addClass("in").show("slow");

            $("#Existing_Supplier_Modal").hide();

            //if (page == "Purchase") {
            //    $("#Existing_Supplier_Modal").hide();
            //}
            
        },
        error: function (response) {
            alert("ERROR");
        }


    })

}

    //to diable right click in certain element
    $('.disableRightClick').on("contextmenu", function (e) {

        return false;
    });

function cancel_purchase() {
    $("#EdittttModal").hide();
}

function cancel_purchase() {
    $("#EdittttModal").hide();
}

function cancel_purchase() {
    $("#EdittttModal").hide();
}


function close_modal_123() {
    $("#Postcode_Confirmation").hide();
    $("#Postcode_House_Number").hide();
    $("#EdittttModal").hide();
}

$(document).ready(function () {
    $('#supplier_table').dataTable();
    $('#kj').dataTable();

});

function close_modal_confirm_postcode() {
    $("#Postcode_Confirmation_Edit").hide();
    $("#Postcode_House_Number_Edit").hide();
}

function postcode_testing() {

    var postcode = $("#postcode_add").val().toUpperCase();
    //alert(postcode);

    if (postcode == null || postcode == "") {
        //alert("IF");
        swal({
            title: "POSTCODE FIELD IS EMPTY",
            text: "You have to Enter some Postcode",
            type: "warning",
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Okay',
        })

        return false;
        postcode_testing()
    }

    //Get latitude & longitude
    $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + postcode + '&sensor=false', function (data) {


        var siteArray = data.siteArray;

        // Handle the case where the user may not belong to any groups
        if (siteArray === null || siteArray === undefined || siteArray === '' || siteArray.length === 0) {
            $("#street_postcode").text("null");
            $("#town_postcode").text("null");
            $("#county_postcode").text("null");
            $("#country_postcode").text("null");
            $("#postcode_popup").text(postcode);

            $("#Postcode_Confirmation").addClass("in").show("slow");
        }

        var lat = data.results[0].geometry.location.lat;
        var lng = data.results[0].geometry.location.lng;
        //alert("lng  " + lng);

        //Get address
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=false', function (data) {

            var address = data.results[0].address_components;
            var street = address[1].long_name;
            var town = address[2].long_name;
            var county = address[4].long_name;
            var country = address[5].long_name;

            $("#street_postcode").text(street);
            $("#town_postcode").text(town);
            $("#county_postcode").text(county);
            $("#country_postcode").text(country);
            $("#postcode_popup").text(postcode);

            //alert(address);

            $("#Postcode_Confirmation").addClass("in").show("slow");

            //Insert
            //alert("street  " + street + ', ' + "   town   " + town + ', ' + "    county  " + county + ', ' + "    postcode  " + postcode);

        });
    });
}

function Add_Postcode_New_Supplier() {
    var street_add = $("#street_postcode").html();
    var town_add = $("#town_postcode").html();
    var county_add = $("#county_postcode").html();
    var country_add = $("#country_postcode").html();
    var postcode_add = $("#postcode_popup").html();

    $("#add_street_postcode").val(street_add);
    $("#add_town_postcode").val(town_add);
    $("#add_county_postcode").val(county_add);
    $("#add_country_postcode").val(country_add);

    $("#Postcode_Confirmation").hide();
    $("#CreateModal").hide();
    //$("#Postcode_Confirmation").addClass("out");

    

    $("#Postcode_House_Number").addClass("in").show("slow");

}

function House_no_Postcode_New_Supplier() {
    var house = $("#house_number_postcode_add").val();

    var street = $("#add_street_postcode").val();

    if (house == "" || house == null) {
        $("#add_street_postcode").val(street);
    }
    else {
        $("#add_street_postcode").val(house + " " + street);
    }
    $("#Postcode_House_Number").hide();
    //$("#Postcode_Confirmation").hide();

    $("#CreateModal").addClass("in").show("slow");
}


function close_modal_House_Cross() {
    $("#Postcode_House_Number").hide();
    $("#CreateModal").addClass("in").show("slow");
}



function postcode_testing_edit() {

    var postcode = $("#postcode_edit").val().toUpperCase();
    //alert(postcode);

    if (postcode == null || postcode == "") {
        //alert("IF");
        swal({
            title: "POSTCODE FIELD IS EMPTY",
            text: "You have to Enter some Postcode",
            type: "warning",
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Okay',
        })

        return false;
        postcode_testing_edit()
    }

    //Get latitude & longitude
    $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + postcode + '&sensor=false', function (data) {


        var siteArray = data.siteArray;

        // Handle the case where the user may not belong to any groups
        if (siteArray === null || siteArray === undefined || siteArray === '' || siteArray.length === 0) {
            $("#street_postcode_edit").text("null");
            $("#town_postcode_edit").text("null");
            $("#county_postcode_edit").text("null");
            $("#country_postcode_edit").text("null");
            $("#postcode_popup_edit").text(postcode);

            $("#Postcode_Confirmation_Edit").addClass("in").show("slow");
        }

        var lat = data.results[0].geometry.location.lat;
        var lng = data.results[0].geometry.location.lng;
        //alert("lng  " + lng);

        //Get address
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=false', function (data) {

            var address = data.results[0].address_components;
            var street = address[1].long_name;
            var town = address[2].long_name;
            var county = address[4].long_name;
            var country = address[5].long_name;

            $("#street_postcode_edit").text(street);
            $("#town_postcode_edit").text(town);
            $("#county_postcode_edit").text(county);
            $("#country_postcode_edit").text(country);
            $("#postcode_popup_edit").text(postcode);

            //alert(address);

            $("#Postcode_Confirmation_Edit").addClass("in").show("slow");

            //Insert
            //alert("street  " + street + ', ' + "   town   " + town + ', ' + "    county  " + county + ', ' + "    postcode  " + postcode);

        });
    });
}



function Add_Postcode_Edit_Supplier() {
    var street_add = $("#street_postcode_edit").html();
    var town_add = $("#town_postcode_edit").html();
    var county_add = $("#county_postcode_edit").html();
    var country_add = $("#country_postcode_edit").html();
    var postcode_add = $("#postcode_popup_edit").html();

    $("#edit_street_postcode").val(street_add);
    $("#edit_town_postcode").val(town_add);
    $("#edit_county_postcode").val(county_add);
    $("#edit_country_postcode").val(country_add);

    $("#Postcode_Confirmation_Edit").hide();
    //$("#Postcode_Confirmation").addClass("out");

    $("#Postcode_House_Number_Edit").addClass("in").show("slow");

}


function House_no_Postcode_Edit_Supplier() {
    var house = $("#house_number_postcode_edit").val();

    var street = $("#edit_street_postcode").val();

    if (house == "" || house == null) {
        $("#edit_street_postcode").val(street);

    }
    else {
        $("#edit_street_postcode").val(house + " " + street);
    }
    $("#Postcode_House_Number_Edit").hide();
}

function Postcode_Enter_Click(e) {
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that rusn
        postcode_testing();
        
    }
}

function Postcode_Enter_Click_Edit(e) {
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that rusn
        postcode_testing_edit();

    }
}