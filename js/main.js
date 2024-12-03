var signupNameInput = document.getElementById('signupName');
var signupEmailInput = document.getElementById('signupEmail');
var signupPasswordInput = document.getElementById('signupPassword');
var signupBtn = document.getElementById('signupBtn');

var userList = [];

if (localStorage.getItem('users') !== null) {
    userList = JSON.parse(localStorage.getItem('users'));
}

function validateSignUp() {
    if (!signupEmailInput || !signupNameInput || !signupPasswordInput) {
        return false;
    }

    if (!signupEmailInput.value || !signupNameInput.value || !signupPasswordInput.value) {
        document.getElementById('signupAlert').innerHTML =
            `<div class="alert alert-danger">All fields are required</div>`;
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(signupEmailInput.value)){
        document.getElementById('signupAlert').innerHTML = `<div class="alert alert-danger">Invalid Email Format</div>`;
        return false;
    }

    for (var i = 0; i < userList.length; i++) {
        if (userList[i] && userList[i].signupEmail == signupEmailInput.value) {
            document.getElementById('signupAlert').innerHTML = `<div class="alert alert-danger">Email Already Exists</div>`;
            return false
        }
    }
    return true;
}

function signUp() {
    if(validateSignUp()){
        var user = {
            signupName: signupNameInput.value,
            signupEmail: signupEmailInput.value,
            signupPassword: signupPasswordInput.value
        }
        userList.push(user);
        localStorage.setItem('users', JSON.stringify(userList));
        window.location.href = '/index.html';
    }
    // clearForm();
}

function clearForm() {
    signupNameInput.value = '';
    signupEmailInput.value = '';
    signupPasswordInput.value = '';
}

signupBtn.addEventListener("click", signUp);



