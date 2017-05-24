

$(document).ready(function() {
    $('#button').click(function () {

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/signup.php',
            success: function (data) {
                $("#message").html(data);
            }
        });
    });
}