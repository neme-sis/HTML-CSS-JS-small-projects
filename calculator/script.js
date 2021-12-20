const button= document.getElementsByClassName("but");
const text = document.getElementsByClassName("text")[0];
for(let i of button){
    i.addEventListener('click',()=>{
        text.innerHTML+= i.innerHTML
    })
}
var clear = document.querySelector(".clear")
clear.addEventListener('click',()=>(text.innerHTML=""))

var del = document.querySelector(".del")
del.addEventListener('click',()=>{
    let len=text.innerHTML.length;
    text.innerHTML = text.innerHTML.slice(0,len-1)
})
const equal= document.querySelector(".equal");
equal.addEventListener('click',()=>{
    var res;
    try{
        res = eval(text.innerHTML);
    }
    catch{
        res = "Invalid Input";
    }
    text.innerHTML = res;

})