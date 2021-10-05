async function test(postReturn)
{
    try{
        let x= await(await fetch('https://jsonplaceholder.typicode.com/posts')).json()
        postReturn(null,x)
    }
    catch(e){
        postReturn(e,null)
    }
}
const createMyOwnElements = (element, parent, txt = "", classes = "", attributes = "") => {
    let el = document.createElement(element)
    parent.appendChild(el)
    if (txt != '') el.textContent = txt
    if (classes != "") el.classList = classes
    return el
}
test((err,res)=>{
if (err)return console.log(err)
console.log(res)
res.forEach(element => {
    createMyOwnElements('p',datadiv,element.title) 
});
})

const datadiv = document.querySelector('#data')
//https://jsonplaceholder.typicode.com/guide/