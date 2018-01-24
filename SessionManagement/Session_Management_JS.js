
var timoutWarning = 1200000;
//var timoutWarning = 10000;
var warningTimer;



function StartTimers() {
    warningTimer = setTimeout("IdleWarning()", timoutWarning);
    //alert(warningTimer);

}


function ResetTimers() {
    clearTimeout(warningTimer);
    //alert();
    
    StartTimers();
}


function IdleWarning() {
    ////alert();
    //location.href = "/Home/Logout";
    //var url = '/Home/ResetSession';

    //$.ajax({
    //    url: url,
    //    data: {  },
    //    cache: false,
    //    type: "Get",
    //    success: function (data) {
    //       alert(data);

    //        //$("#abc").val(data);

    //        //alert(data);
           

    //    },
    //    error: function (reponse) {
    //        alert("error : " + reponse);
    //    }
    //});

    $('#Logout_Modal_Session').hide();
    $('#Logout_Modal_Session').show();

}


function ValidateUser() {

    var password = $("#logout_pass").val();

    //alert(password);
    var url = '/Home/SessionLogin';


    $.ajax({
        url: url,
        data: { pass: password },
        cache: false,
        type: "Get",
        success: function (data) {
            //alert(data);

            //$("#abc").val(data);

            //alert(data);
            if (data == 1) {
                $("#Logout_Modal_Session").hide();
                $(".show_wrong_password").hide();
                $("#logout_pass").removeClass('red_border');
                $("#logout_pass").val("");
            } else {
                $(".show_wrong_password").show();
                $("#logout_pass").addClass('red_border');
                $("#logout_pass").val("");
            }

        },
        error: function (reponse) {
            //location.reload();\
            alert("errorrrrrrrrrrrrrrrrrrrrrrrrrrrr "+reponse);
        }
    });

}
