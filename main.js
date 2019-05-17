// Prevent form submit
document.getElementById('form').addEventListener('submit', submitEmail);
function submitEmail(e) {
    e.preventDefault();

    
    // Hide alert after 3 seconds
    setTimeout(function() {
        validationSuccessful.style.display = 'none';
    }, 5000);

    // Clear form
    document.getElementById('form').reset();
}

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let message = document.getElementById('message');
let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

let validationError = document.getElementById('validationError');


function checkEmail() {
    if (firstName.value == "" || lastName.value == "" || message.value == "" || !filter.test(email.value)) {
        validationError.style.display = 'block';
        return false;
    }else {
        setTimeout(function() {
            validationSuccessful.style.display = 'block';
        }, 1000);
        return true;
    }
}


// Add event listiner 
email.addEventListener('blur', firstNameVerify, true);
firstName.addEventListener('blur', lastNameVerify, true);
lastName.addEventListener('blur', emailVerify, true);
message.addEventListener('blur', messageVerity, true);

function firstNameVerify() {
    if (firstName != "") {
        validationError.style.display = 'none';
        return true;
    }
}

function lastNameVerify() {
    if (lastName != "") {
        validationError.style.display = 'none';
        return true;
    }
}

function emailVerify() {
    if (email != "") {
        validationError.style.display = 'none';
        return true;
    }
}

function messageVerity() {
    if (message != "") {
        validationError.style.display = 'none';
        return true;
    }
}


// Smooth scroll
const scroll = new SmoothScroll('.navber a[href*="#"', {
    speed: 800
})



