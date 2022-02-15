const cards = document.querySelectorAll(".card")
var firstCard, secondCard;
var score = 0;
var main = document.getElementsByClassName("main")[0]
var scoreBoard = document.getElementsByClassName("score")[0];
var modal = document.getElementsByClassName("modal")[0]

shuffle();

cards.forEach((card)=>{
    card.addEventListener('click',flip);
})

function flip(){
    this.classList.remove("flip");
    if(!firstCard)
    firstCard = this;
    else if(!secondCard){
    secondCard = this
    notevent()
    
    if(firstCard.dataset.image == secondCard.dataset.image)
    success()
    else
    fail()
    }
}

function success(){
    score++;
    if(score==8)
    complete();

    eventadd()
    firstCard.removeEventListener('click',flip)
    secondCard.removeEventListener('click',flip)
    reset()
    scoreBoard.textContent = `Score: 0${score}`
}

function fail(){
    setTimeout(()=>{
        firstCard.classList.add("flip")
        secondCard.classList.add("flip")
        eventadd()
        reset()
    }, 1000)
}

function reset(){
    firstCard = secondCard = null
}

function shuffle(){
    cards.forEach(card=>{
        var i = Math.floor(Math.random()*16)
        card.style.order = i;
    })
}
function eventadd(){
    cards.forEach((card)=>{
        card.addEventListener('click',flip);
    })
}
function notevent(){
    cards.forEach((card)=>{
        card.removeEventListener('click',flip);
    })
}
function complete(){
    main.style.display= 'none'
    scoreBoard.style.display= 'none'
    modal.style.display = 'block'
}