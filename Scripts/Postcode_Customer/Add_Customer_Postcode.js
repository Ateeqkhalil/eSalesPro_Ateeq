
function Postcode_Enter_Click(e) {
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that rusn
        postcode_testing();

    }
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


    //------------------FOR SHIPPING ADDRESS--------------------//

    $("#shipping_street_add").val(street_add);
    $("#shipping_town_add").val(town_add);
    $("#shipping_county_add").val(county_add);
    $("#shipping_country_add").val(country_add);
    $("#shipping_postcode_add").val(postcode_add);

    //------------------FOR SHIPPING ADDRESS--------------------//


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
        $("#shipping_street_add").val(house + " " + street);
    }
    $("#Postcode_House_Number").hide();
    //$("#Postcode_Confirmation").hide();

    $("#CreateModal").addClass("in").show("slow");
}

function close_modal_new_Customer() {
    $("#Postcode_Confirmation").hide();
    $("#Postcode_House_Number").hide();
}

function close_modal_cancel_Customer() {
    $("#Postcode_House_Number").hide();
    $("#CreateModal").addClass("in").show("slow");
}


function Different_Address_New() {
    if (document.getElementById("billing_address_checkbox_new").checked) {
        $(".Shipping_Address_Div_New").hide();
    }
    else {
        $(".Shipping_Address_Div_New").show();
    }
}

function hide_add_customer_modal() {
    $("#CreateModal").hide();
}



$('#add_street_postcode').bind('keypress keyup blur', function () {
    $('#shipping_street_add').val($(this).val());
});

//$('#add_street_postcode').keyup(function () {
//    $('#shipping_street_add').val($(this).val());
//});
$('#add_town_postcode').keyup(function () {
    $('#shipping_town_add').val($(this).val());
});
$('#add_county_postcode').keyup(function () {
    $('#shipping_county_add').val($(this).val());
});
$('#add_country_postcode').keyup(function () {
    $('#shipping_country_add').val($(this).val());
});
$('#postcode_add').keyup(function () {
    $('#shipping_postcode_add').val($(this).val());
});

