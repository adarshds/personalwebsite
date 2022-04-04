$(document).ready(function(){
    $("#btnSubmit").click(function(e){
        e.preventDefault();
        debugger;
        var email = $("#email");
        if(ValidateEmail(email))
        {
            $("#gform")[0].submit();
        }
    });

    function ValidateEmail(inputText)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.val().match(mailformat))
        {
            $("#email_error").html("");            
            return true;
        }
        else
        {
            $("#email_error").html("You have entered an invalid email address!");
            return false;
        }
    }

});