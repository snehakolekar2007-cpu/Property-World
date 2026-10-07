const usernameEL = document.querySelector("#username");
const emailEL = document.querySelector("#email");
const passwordEL = document.querySelector("#password");
const confirmPasswordEL = document.querySelector("#confirmpassword");
const form = document.querySelector("#sign-up");


const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) =>
    length < min || length > max ? false : true;



const showError = (input, message) => {

    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');

    error.textContent = message;
};


// Show Success
const showSuccess = input => {

    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');

    error.textContent = '';
};



const isEmailValid = email => {

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return re.test(email);
};



const isPasswordValid = password => {

    const re =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return re.test(password);
};
const checkUsername = () => {

    let valid = false;

    const min = 3;
    const max = 25;

    const username = usernameEL.value.trim();

    if (!isRequired(username)) {

        showError(usernameEL, 'Username cannot be blank');

    }

    else if (!isBetween(username.length, min, max)) {

        showError(
            usernameEL,
            `Username must be between ${min} and ${max} characters`
        );

    }

    else {

        showSuccess(usernameEL);

        valid = true;
    }

    return valid;
};



const checkEmail = () => {

    let valid = false;

    const email = emailEL.value.trim();

    if (!isRequired(email)) {

        showError(emailEL, 'Email cannot be blank');

    }

    else if (!isEmailValid(email)) {

        showError(emailEL, 'Email is not valid');

    }

    else {

        showSuccess(emailEL);

        valid = true;
    }

    return valid;
};



const checkPassword = () => {

    let valid = false;

    const password = passwordEL.value.trim();

    if (!isRequired(password)) {

        showError(
            passwordEL,
            "Password cannot be blank"
        );

    }

    else if (!isPasswordValid(password)) {

        showError(
            passwordEL,
            "Password must be 8 characters with uppercase, lowercase, number and special character"
        );

    }

    else {

        showSuccess(passwordEL);

        valid = true;
    }

    return valid;
};



const checkConfirmPassword = () => {

    let valid = false;

    const confirmPassword = confirmPasswordEL.value.trim();
    const password = passwordEL.value.trim();

    if (!isRequired(confirmPassword)) {

        showError(
            confirmPasswordEL,
            "Confirm password cannot be blank"
        );

    }

    else if (password !== confirmPassword) {

        showError(
            confirmPasswordEL,
            "Password does not match"
        );

    }

    else {

        showSuccess(confirmPasswordEL);

        valid = true;
    }

    return valid;
};



form.addEventListener('submit', function (e) {

    e.preventDefault();

    const isUsernameValid = checkUsername();
    const isEmailValidResult = checkEmail();
    const isPasswordValidResult = checkPassword();
    const isConfirmPasswordValid = checkConfirmPassword();

    const isFormValid =
        isUsernameValid &&
        isEmailValidResult &&
        isPasswordValidResult &&
        isConfirmPasswordValid;


    if (isFormValid) {

        alert("Account created successfully!");

        
    }

});



form.addEventListener('input', function (e) {

    switch (e.target.id) {

        case 'username':
            checkUsername();
            break;

        case 'email':
            checkEmail();
            break;

        case 'password':
            checkPassword();
            break;

        case 'confirm-password':
            checkConfirmPassword();
            break;
    }

});