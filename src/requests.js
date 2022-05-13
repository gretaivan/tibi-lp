import 'regenerator-runtime/runtime'
const server = 'http://localhost:3000';

async function subscribeRequest(data){  
  try{
    // console.log(data)
    const options = {
      method: 'POST',
      mode: 'cors', 
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }

    const url = server + '/register';
      
    const res = await fetch(url, options)
    const resData = await res.json();
    console.log(resData)
    return resData;

   } catch(err) {
      console.log(err); 
   }
}

export { subscribeRequest };

  //https://www.codingem.com/export-multiple-functions-in-javascript/#:~:text=To%20export%20multiple%20functions%20in%20JavaScript%2C%20use%20the%20export%20statement,the%20functions%20as%20an%20object.&text=Alternatively%2C%20you%20can%20use%20the,use%20the%20export%20statement%20separately.


//   function sendHabitInfo(e){
    
//     e.preventDefault()
//     const habitData = {
//         habit_name: e.target.habitName.value,
//         frequency: e.target.habitFreq.value,
//         user_id: user_id,
//         // user_id: window.location.hash?
//     }

//     const options = { 
//         method: 'POST',
//         body: JSON.stringify(habitData),
//         headers: { "Content-Type": "application/json" }
//     };

//     fetch(`${server}/habits`, options)
//         .then(r => r.json())
//         .then(data => renderHabit(data)) // and close form
//         .then(() => e.target.reset())
//         .catch(console.warn)
// }