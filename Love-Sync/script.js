var button = document.querySelector(".calculate");
var cal= document.querySelector('#text');

button.addEventListener('click', ()=>{
    {
        var name1 = document.getElementById("p1").value;
        var name2 = document.getElementById("p2").value;
        var sum=0

        if(name1 && name2){
            name1 = name1.toLowerCase()
            name2 = name2.toLowerCase()
        for(let i in name1){
        if(name1[i]!=' ')
        sum+= name1.charCodeAt(i);
        }

        for(let i in name2){
        if(name2[i]!=' ')
        sum+= name2.charCodeAt(i);
        }
        if(sum){
        var res = 60 + (sum%41);
        cal.innerHTML = name1+" + "+name2+"\n"+res+"%";
        }
        else{
            cal.innerHTML = "Enter Valid Inputs"
        }
    }
        else{
            cal.innerHTML= "Enter Both values"
        }
    }
})