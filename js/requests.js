
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