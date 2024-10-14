var emailInput = document.getElementById("email");
var myInput = document.getElementById("pwd");
var ReInput = document.getElementById("Repwd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

document.getElementById("myForm").addEventListener('submit', (event) => {
    event.preventDefault();
});

function emailValidate() {
    const pattern = /^[a-zA-Z0-9._%+-]+@pramericalife\.in$/;
    
    if (emailInput.value.match(pattern)) {
        emailInput.style.border = "2px solid green"; // Valid email
    } else if (emailInput.value.length > 0) {
        emailInput.style.border = "2px solid red"; // Invalid email but longer than 0 chars
    } else {
        emailInput.style.border = ""; // Reset if it's too short
    }
}

// Show password criteria
const criteria = () => {
    document.getElementById("message").style.display = "block";
};

const hide = () => {
    document.getElementById("message").style.display = "none";
};

let pass;
const validate = () => {
    // Validate lowercase
    if (/[a-z]/g.test(myInput.value)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate uppercase
    if (/[A-Z]/g.test(myInput.value)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    if (/[0-9]/g.test(myInput.value)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

    if (/[a-z]/g.test(myInput.value) && /[A-Z]/g.test(myInput.value) && /[0-9]/g.test(myInput.value) && myInput.value.length >= 8) {
        pass = myInput.value;
    }
};

const submitForm = (event) => {
    console.log("run");
    console.log( myInput.value, '->>', ReInput.value)
    console.log("email is"+ (emailInput.value + "-> password: " + CryptoJS.SHA512(pass) ));
    if(emailInput.value==='' && myInput.value=='' && ReInput.value==''){
        alert('Please give input first');
        
    }
     if ( myInput.value !== ReInput.value) {
        alert("Passwords must match.");
    }
};
document.getElementById("myForm").addEventListener("onkeyup",submitForm);
