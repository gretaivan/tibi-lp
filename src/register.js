import { subscribeRequest } from'./requests';

let sForm; 
//let submitBtn;


function openRegForm () {

  modalInit();
  ///submitBtn = sForm.getElementsByTagName('input')[4]
  sForm.addEventListener('submit', e => reg(e))
  
  //const resData = request.post(server, Object.fromEntries(new FormData(e.target))); 
  
  // alert("Not a magician - subscription functionality is under construction, but I can tell that your input was : "); 
} 

function modalInit (){

  const modal = document.getElementById("reg-modal");
  const exit = document.getElementsByClassName("close")[0];
  sForm = document.getElementById('subscribe-form');

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

function reg(e){
  e.preventDefault(); 
  // console.log(e)
  //equests.post(server, formData)
  console.log(Object.fromEntries(new FormData(e.target)))
  let res = subscribeRequest(Object.fromEntries(new FormData(e.target)));
  console.log(res)
}



export { openRegForm, reg };

