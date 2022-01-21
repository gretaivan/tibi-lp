AOS.init();
const main = document.querySelector('main');

const publicRoutes = ['#'];
const privateRoutes = [];

const subscribeForm = document.getElementById("subscribe"); 

subscribeForm.addEventListener('submit', subscribe);

async function subscribe(e){ 
    e.preventDefault(); 
    

    try{
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        alert("Not a magician - subscription functionality is under construction, but I can tell that your input was : " + options.body); 

        const res = await fetch(urlPath, options);
        const resData = await res.json(); 

    } catch(err) {
        console.log(err); 
    }

}

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