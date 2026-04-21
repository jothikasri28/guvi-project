$(document).ready(function () {

    let email = localStorage.getItem("user");

    if (!email) {
        window.location.href = "login.html";
    }

    // 🔽 Fetch data
    $.ajax({
        url: "../backend/profile.php",
        type: "POST",
        data: { email: email },

        success: function (res) {
            let data = JSON.parse(res);

            $("#name").val(data.name);
            $("#email").val(data.email);
            $("#age").val(data.age);
            $("#dob").val(data.dob);
            $("#contact").val(data.contact);
        }
    });

    // 🔽 Update data
    $("#profileForm").submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: "../backend/update.php",
            type: "POST",
            data: {
                email: $("#email").val(),
                age: $("#age").val(),
                dob: $("#dob").val(),
                contact: $("#contact").val()
            },

            success: function (res) {
                alert(res);
            }
        });
    });

});