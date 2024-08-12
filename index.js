function validateForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;
    const subject = document.getElementById("degree").value;
    const age = document.getElementById("age").value;
    const agree = document.getElementById("agree").checked;

    const nameError = document.getElementById("name-error");
    
    const addressError = document.getElementById("address-error");
    const passwordError = document.getElementById("password-error");
    const ageError=document.getElementById("age-error");
    const cpasswordError = document.getElementById("cpassword-error");
    const subjectError = document.getElementById("degree-error");
    const agreeError = document.getElementById("agree-error");

    nameError.textContent = "";
    addressError.textContent = "";
    passwordError.textContent = "";
    cpasswordError.textContent = "";
    subjectError.textContent = "";
    agreeError.textContent = "";
    ageError.textContent="";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (address === "") {
        addressError.textContent =
            "Please enter your address.";
        isValid = false;
    }

    if (password === "") {
        passwordError.textContent =
            "Please enter a valid password address.";
        isValid = false;
    }

    if (cpassword !=password) {
        cpasswordError.textContent =
            "Your password does not match.";
        isValid = false;
    }

    if (subject === "") {
        subjectError.textContent =
            "Please select your course.";
        isValid = false;
    }

    if (age === "") {
        ageError.textContent =
            "Please enter your age.";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent =
            "Please agree to the above information.";
        isValid = false;
    }

    return isValid;
}
