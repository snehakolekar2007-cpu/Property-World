const emailEL=document.querySelector("#email");
const passwordEL=document.querySelector("#password");
const form=document.querySelector("#Login");


const isRequired = value => value === '' ? false : true;
const isBetween=(length,min,max)=>length<min||length>max?false:true;

const isEmailValid = email => {
    const re=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(email);
};

const isPasswordValid = password => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
};

const showError=(input,message)=>{
    const formField=input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error=formField.querySelector('small');
    error.textContent=message;
}
const showSuccess=input=>{
    const formField=input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error=formField.querySelector('small');
    error.textContent='';
}

const checkEmail=()=>{
    let valid=false;
    const email=emailEL.value.trim();
    if(!isRequired(email)){
        showError(emailEL,'Email cannot be blank');
    }
    else if(!isEmailValid(email)){
        showError(emailEL,'Email is not valid');
    }
    else{
        showSuccess(emailEL);
        valid=true;
    }
    return valid;
}

const checkPassword = () => {
    let valid = false;
    const password = passwordEL.value.trim();

    if (!isRequired(password)) {
        showError(passwordEL, "Password cannot be blank");
    }
    else if (!isPasswordValid(password)) {
        showError(passwordEL, "Password must be 8 characters with uppercase, lowercase, number and special character");
    }
    else {
        showSuccess(passwordEL);
        valid = true;
    }

    return valid;
};

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();

    let isFormValid = isEmailValid && isPasswordValid;

    if (isFormValid) {
        alert("Login Successful");
    }
});

form.addEventListener("input", function(e) {
    switch (e.target.id) {

        case "email":
            checkEmail();
            break;

        case "password":
            checkPassword();
            break;
    }
});