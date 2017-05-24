$(document).ready(function () {
    $('#button').click(function () {

        alert("clicked");

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/signup.php',
            success: function (data) {
                $("#message").html(data);
            }
        });
    });
});