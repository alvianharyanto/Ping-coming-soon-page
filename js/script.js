let email = document.getElementById("email-input");
let allert = document.getElementById("allert");

email.addEventListener("invalid", function (event) {

    event.preventDefault();

    if (event.target.value === "") {
        allert.innerHTML = "Whoops! It looks like you forgot to add your email";
        allert.style.display = "block";
    } else if (event.target.validity.typeMismatch) {
        allert.innerHTML = "Please provide a valid email address";
        allert.style.display = "block";
    } else {
        allert.innerHTML = "";
    }

    return true;

});