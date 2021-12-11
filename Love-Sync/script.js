var button = document.querySelector(".calculate");
var cal= document.querySelector('#text');

button.addEventListener('click', ()=>{
    {
        var name1 = document.getElementById("p1").value;
        var name2 = document.getElementById("p2").value;
        var sum=0
    
        for(let i in name1)
        sum+= name1.charCodeAt(i);

        for(let i in name2)
        sum+= name2.charCodeAt(i);

        var res = 60 + (sum%41);

        cal.innerHTML = name1+" + "+name2+"\n"+res+"%";

        reset();
    }
})