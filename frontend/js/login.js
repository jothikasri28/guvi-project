$(document).ready(function () {

    $("#loginForm").submit(function (e) {
        e.preventDefault();

        let email = $("#email").val();
        let password = $("#password").val();

        $.ajax({
            url: "../backend/login.php",
            type: "POST",
            data: {
                email: email,
                password: password
            },

            success: function (response) {

                let data = JSON.parse(response);

                if (data.status === "success") {

                    // store session in localStorage
                    localStorage.setItem("user", data.email);

                    alert("Login Successful");

                    window.location.href = "profile.html";

                } else {
                    alert("Invalid Credentials");
                }
            }
        });

    });

});