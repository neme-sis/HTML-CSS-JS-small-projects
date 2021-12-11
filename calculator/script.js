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
    for(var i of text.innerHTML){
        if("+-x/%".indexOf(i)!=-1)
        var index = text.innerHTML.indexOf(i);
    }
    let len=text.innerHTML.length;
    var num1 = parseInt(text.innerHTML.slice(0,index));
    var num2 = parseInt(text.innerHTML.slice(index+1,len));
    var res;
    if(text.innerHTML[index]==='+')
    res = num1+num2;
    if(text.innerHTML[index]==='-')
    res = num1-num2;
    if(text.innerHTML[index]==='x')
    res = num1*num2;
    if(text.innerHTML[index]==='/')
    res = num1/num2;
    if(text.innerHTML[index]==='%')
    res = num1/100*num2;

    text.innerHTML = res;
})