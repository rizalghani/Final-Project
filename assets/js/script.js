$(function(){

    $("#send").click(function(){
        $email = $('#InputEmail').val();
        $em = document.getElementById("myForm").action = "https://formspree.io/"+ $email;
        // alert($em);
    })

});