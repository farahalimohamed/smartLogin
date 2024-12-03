var userList = [];

if (localStorage.getItem('users') !== null) {
    userList = JSON.parse(localStorage.getItem('users'));
}

function displayLoggedUser() {
    var currentUser = localStorage.getItem('LoggedInUser');
    for (var i = 0; i < userList.length; i++) {
        if (userList[i] && userList[i].signupName === currentUser){
            document.getElementById('userName').innerHTML =
                `<h1>Welcome <span class="text-capitalize">${userList[i].signupName}</span></h1>`;
            return;
        }
    }
}
displayLoggedUser();

function logout(){
    localStorage.removeItem('LoggedInUser');
    window.location.href = '/index.html';
} 

var logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', logout);

