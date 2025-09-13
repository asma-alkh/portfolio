let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');  
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
// messge code 
const button = document.getElementById("myButton");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  message.textContent = "Submission Successful! ✅";
  message.style.color = "green";
});


