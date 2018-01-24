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
            $("#street_postcode_edit_customer").text("null");
            $("#town_postcode_edit_customer").text("null");
            $("#county_postcode_edit_customer").text("null");
            $("#country_postcode_edit_customer").text("null");
            $("#postcode_popup_edit_customer").text(postcode);

            $("#Postcode_Confirmation_Edit").addClass("in").show("slow");
        }

        var lat = data.results[0].geometry.location.lat;
        var lng = data.results[0].geometry.location.lng;
        //alert("lng  " + lng);
        //alert("lat  " + lat);

        //Get address
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=false', function (data) {

            var address = data.results[0].address_components;
            var street = address[1].long_name;
            var town = address[2].long_name;
            var county = address[4].long_name;
            var country = address[5].long_name;


            $("#street_postcode_edit_customer").text(street);
            $("#town_postcode_edit_customer").text(town);
            $("#county_postcode_edit_customer").text(county);
            $("#country_postcode_edit_customer").text(country);
            $("#postcode_popup_edit_customer").text(postcode);


            $("#Postcode_Confirmation_Edit").addClass("in").show("slow");

            //Insert
            //alert("street  " + street + ', ' + "   town   " + town + ', ' + "    county  " + county + ', ' + "    postcode  " + postcode);

        });
    });
}



function Add_Postcode_Edit_Customer() {
    var street_add = $("#street_postcode_edit_customer").html();
    var town_add = $("#town_postcode_edit_customer").html();
    var county_add = $("#county_postcode_edit_customer").html();
    var country_add = $("#country_postcode_edit_customer").html();
    var postcode_add = $("#postcode_popup_edit_customer").html();

    $("#edit_customer_street_postcode").val(street_add);
    $("#edit_customer_town_postcode").val(town_add);
    $("#edit_customer_county_postcode").val(county_add);
    $("#edit_customer_country_postcode").val(country_add);


    //------------------FOR SHIPPING ADDRESS--------------------//

    $("#shipping_street_edit").val(street_add);
    $("#shipping_town_edit").val(town_add);
    $("#shipping_county_edit").val(county_add);
    $("#shipping_country_edit").val(country_add);
    $("#shipping_postcode_edit").val(postcode_add);

    //------------------FOR SHIPPING ADDRESS--------------------//


    $("#Postcode_Confirmation_Edit").hide();
    //$("#Postcode_Confirmation").addClass("out");

    $("#Postcode_House_Number_Edit").addClass("in").show("slow");

}


function House_no_Postcode_Edit_Supplier() {
    var house = $("#house_number_postcode_edit_customer").val();

    var street = $("#edit_customer_street_postcode").val();

    if (house == "" || house == null) {
        $("#edit_customer_street_postcode").val(street);

    }
    else {
        $("#edit_customer_street_postcode").val(house + " " + street);
        $("#shipping_street_edit").val(house + " " + street);
    }
    $("#Postcode_House_Number_Edit").hide();
}



function Postcode_Enter_Click_Edit(e) {
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that rusn
        postcode_testing_edit();
    }
}

function close_customer_postcode() {
    $("#Postcode_Confirmation_Edit").hide();
    $("#Postcode_House_Number_Edit").hide();
}


//---------------------------------------------------------------------------------------//


function shipping_postcode_testing_edit() {

    var postcode = $("#shipping_postcode_edit").val().toUpperCase();
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
            $("#street_postcode_shipping_edit_customer").text("null");
            $("#town_postcode_shipping_edit_customer").text("null");
            $("#county_postcode_shipping_edit_customer").text("null");
            $("#country_postcode_shipping_edit_customer").text("null");
            $("#postcode_shipping_popup_edit_customer").text(postcode);

            $("#Postcode_Shipping_Confirmation_Edit").addClass("in").show("slow");
        }

        var lat = data.results[0].geometry.location.lat;
        var lng = data.results[0].geometry.location.lng;
        //alert("lng  " + lng);
        //alert("lat  " + lat);

        //Get address
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=false', function (data) {

            var address = data.results[0].address_components;
            var street = address[1].long_name;
            var town = address[2].long_name;
            var county = address[4].long_name;
            var country = address[5].long_name;


            $("#street_postcode_shipping_edit_customer").text(street);
            $("#town_postcode_shipping_edit_customer").text(town);
            $("#county_postcode_shipping_edit_customer").text(county);
            $("#country_postcode_shipping_edit_customer").text(country);
            $("#postcode_shipping_popup_edit_customer").text(postcode);


            $("#Postcode_Shipping_Confirmation_Edit").addClass("in").show("slow");

            //Insert
            //alert("street  " + street + ', ' + "   town   " + town + ', ' + "    county  " + county + ', ' + "    postcode  " + postcode);

        });
    });
}



function Add_Shipping_Postcode_Edit_Customer() {
    //alert("asasas");
    var street_add = $("#street_postcode_shipping_edit_customer").html();
    var town_add = $("#town_postcode_shipping_edit_customer").html();
    var county_add = $("#county_postcode_shipping_edit_customer").html();
    var country_add = $("#country_postcode_shipping_edit_customer").html();
    var postcode_add = $("#postcode_shipping_popup_edit_customer").html();


    //alert("street_add  " + street_add + "  town_add  " + town_add + "  county_add  " + county_add + "  country_add  " + country_add + "  postcode_add   " + postcode_add);

    //------------------FOR SHIPPING ADDRESS--------------------//

    $("#shipping_street_edit").val(street_add);
    $("#shipping_town_edit").val(town_add);
    $("#shipping_county_edit").val(county_add);
    $("#shipping_country_edit").val(country_add);
    $("#shipping_postcode_edit").val(postcode_add);

    //------------------FOR SHIPPING ADDRESS--------------------//


    $("#Postcode_Shipping_Confirmation_Edit").hide();
    //$("#Postcode_Confirmation").addClass("out");

    $("#Postcode_Shipping_House_Number_Edit").addClass("in").show("slow");

}


function House_no_Postcode_Shipping_Edit() {
    var house = $("#house_number_postcode_shipping_edit_customer").val();

    var street = $("#shipping_street_edit").val();

    if (house == "" || house == null) {
        $("#shipping_street_edit").val(street);

    }
    else {
        $("#shipping_street_edit").val(house + " " + street);
    }
    $("#Postcode_Shipping_House_Number_Edit").hide();
}



function Postcode_Shipping_Enter_Click_Edit(e) {
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that rusn
        shipping_postcode_testing_edit();
    }
}

function close_customer_postcode_shipping() {
    $("#Postcode_Shipping_Confirmation_Edit").hide();
    $("#Postcode_Shipping_House_Number_Edit").hide();
}