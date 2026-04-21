$(document).ready(function () {

    $("#registerForm").submit(function (e) {
        e.preventDefault(); // form reload aagatha

        let name = $("#name").val();
        let email = $("#email").val();
        let password = $("#password").val();

        // basic validation
        if (name === "" || email === "" || password === "") {
            alert("Please fill all fields");
            return;
        }

        $.ajax({
            url: "../backend/register.php",
            type: "POST",
            data: {
                name: name,
                email: email,
                password: password
            },

            success: function (response) {
                alert(response);

                if (response === "Registered Successfully") {
                    window.location.href = "login.html";
                }
            },

            error: function () {
                alert("Server error");
            }
        });

    });

});