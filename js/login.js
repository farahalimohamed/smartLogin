

var userList = [];

if (localStorage.getItem('users') !== null) {
    userList = JSON.parse(localStorage.getItem('users'));
}
var loginBtn = document.getElementById('loginBtn');

function login() {
    var loginEmailInput = document.getElementById('loginEmail');
    var loginPasswordInput = document.getElementById('loginPassword');
    var foundAccount = false;

    for (var i = 0; i < userList.length; i++) {
        if (userList[i] && userList[i].signupEmail === loginEmailInput.value && userList[i].signupPassword === loginPasswordInput.value) {
            localStorage.setItem('LoggedInUser', userList[i].signupName);
            window.location.href = '/html/home.html';
            foundAccount = true;
            break;
        }
    }
    if(!foundAccount){
        document.getElementById('loginAlert').innerHTML =
            `<div class="alert alert-danger">No account found. Please create an account</div>`;
    }
}

loginBtn.addEventListener('click', login);

