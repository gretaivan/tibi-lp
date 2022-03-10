
  async function post(url, data){ 
    try{
      const options = {
        method: 'POST',
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
        
        const res = await fetch(url, options)
        const resData = await res.json();
        return resData;

    } catch(err) {
        console.log(err); 
    }
  }

  // module.exports = {
  //   post
  // }

  export { post }

  //https://www.codingem.com/export-multiple-functions-in-javascript/#:~:text=To%20export%20multiple%20functions%20in%20JavaScript%2C%20use%20the%20export%20statement,the%20functions%20as%20an%20object.&text=Alternatively%2C%20you%20can%20use%20the,use%20the%20export%20statement%20separately.