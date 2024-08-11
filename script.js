let Navbar = document.querySelector('.navbar');


document.querySelector('#bars-btn').onclick = () =>{
    Navbar.classList.toggle('active');
    SearchForm.classList.remove('active');
    loginForm.classList.remove('active')
}


let SearchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    SearchForm.classList.toggle('active');
    Navbar.classList.remove('active');
    loginForm.classList.remove('active')
}


let loginForm = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = () =>{
    loginForm.classList.toggle('active')
    Navbar.classList.remove('active');
    SearchForm.classList.remove('active');
    

}