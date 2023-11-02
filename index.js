$(document).ready(function() {
    $("#submit-button").click(function() {
        
        let name = $("#name").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        let message = $("#message").val();

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Please fill in all fields.");
        } else if (!isValidEmail(email) || !isValidPhone(phone)) {
            alert("Please enter a valid email and phone number.");
        } else {

            $("#contact-form").hide();
            $("#confirmation-message").text("Message sent successfully. We will get back to you soon.");
        }
    });

    function isValidEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
       
        return /^\d{10}$/.test(phone);
    }
});
