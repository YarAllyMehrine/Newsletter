function handleError () {
    let isValidEmail = false;

    $("input").on("blur", function() {
        const email = $(this).val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
        if(emailRegex.test(email)) {
            $(this).removeClass("error");
            isValidEmail = true; 
            
        } else {            
            $(this).addClass("error");
            isValidEmail = false;
        }
    })
    $("#subscribe-btn").click(function() {
        if (isValidEmail) {
            console.log(email);
            submissionText(email);
        } else {
            $(".error-msg").removeClass("hidden");
        }
    });
}

$(document).ready(() => {
    handleError();
})

function submissionText(email) {
    $(".title").text("Thanks for subscribing!");
    $(".message-text").text("A confirmation email has been sent to <strong>${email}</strong>. 
                            Please open it and click the button inside to confirm your subscription.");
    $("#subscribe-btn").text("Dismiss message");
    $(".list-item, .email, .error-msg").addClass("hidden");
    $("#mobile-img, #desktop-img").addClass("hidden");
    $("#success-img").removeClass("hidden");
    $("body").addClass("success-page");
}






