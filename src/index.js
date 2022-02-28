// import AOS  from 'aos';
import './neon_80s/Neon.ttf';
import './css/style.css';
// import './css/header.css';
// import './css/footer.css';
// import './css/home.css';
// import './images/yellowcircle.png';
// import './images/community.png';
import './images/FLOCK.png';
import './images/favicon.png';
import './images/bring-back-the-sass.png';



const server = 'http:localhost:3000';
const request = require('./requests')

// AOS.init();





// const main = document.querySelector('main');

// const publicRoutes = ['#', 'contact-us'];
// const privateRoutes = [];

const subscribeForm = document.getElementById("subscribe"); 

subscribeForm.addEventListener('submit', subscribe);

async function subscribe(e){ 
    e.preventDefault(); 
    

    const resData = request.post(server, Object.fromEntries(new FormData(e.target))); 

    alert("Not a magician - subscription functionality is under construction, but I can tell that your input was : " + resData); 
}



//mock animation
var countDownDate = new Date("Jul 1, 2022 12:00:00").getTime();
var x = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;
    
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (timeLeft < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "We Are Live!";
    }
}, 1000);


// function showInfo(e) {
//     console.log(e);
//     popup.classList.toggle("show");

// }

// window.addEventListener('hashchange', updateContent);
// window.addEventListener('load', updateContent);


// function updateContent(){
//     const path = window.location.hash;
//     //console.log("window path: " + path)

//     //private path or not existing user
//     if (privateRoutes.includes(path) && !currentUser()){
//         window.location.hash = '#';
//         alert("You need to register or login!")
//     } else {
//         updateMain(path);
//     }
// }

// function updateMain(path) {
//     main.innerHTML = '';
//     if (path) {
//         switch(path){
//             case '#login':
//                 renderLoginForm(); break;
//             case '#register':
//                 renderRegisterForm(); break;
//             case '#habits':
//                 renderUserPage(); break;
//             default:
//                 render404(); break;
//         }
//     } else {
//         renderLoginForm();
//     }
// }


// function toggleMenu() {

//     const nav = document.getElementsByTagName("UL")[0];
//     console.log(nav);

//     if(visualViewport.width < 1024) {
//         console.log("toggler on");
//         nav.classList.replace("navbar", "navbar-toggler-icon");        
//     }
//     else{
//         console.log("toggler off")
//         nav.classList.replace("navbar-toggler-icon", "navbar");   
//     }
// }

// toggleMenu();
// console.log(screen.width)
// window.addEventListener('resize', toggleMenu);