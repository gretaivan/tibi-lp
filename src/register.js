import * as Requests from './requests';
const server = 'http:localhost:3000';


function subscribe () {
  modalInit();
  
  //const resData = request.post(server, Object.fromEntries(new FormData(e.target))); 
  
  // alert("Not a magician - subscription functionality is under construction, but I can tell that your input was : "); 
} 

function modalInit (){

  const modal = document.getElementById("reg-modal");
  const exit = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  exit.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }
}

function submitForm(){

}



export default subscribe;

