getApiData =async (link, cb) =>{
    try{
        let data = await ( await fetch(link) ).json()
        cb(data, null)
    }
    catch(e){
        cb(null, e)
    }
}
//post methode 
testPostMethode=async(link ,title , body ,id,callBack)=>{
    try{
let data=await(await(fetch(link, {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: body,
    userId: id,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}))).json()
callBack(null,data)
}
catch(e){
    callBack(e,null)
}
  //.then((response) => response.json())
  //.then((json) => console.log(json));
}
//testPostMethode()


//call post methode 
testPostMethode('https://jsonplaceholder.typicode.com/posts','yasmin','hello test post method.',1,(err,res)=>{
    if (err) return console.log(err)
    console.log(res)
})
//test put methode 
testPutMethode=()=>{
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'edit title',
    body: 'hello again test put ',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
//call put methode 
testPutMethode()
//test delete
testDeleteMethode=()=>{
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}
//call delete methode 
testDeleteMethode()
