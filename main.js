var items = document.querySelectorAll(".game-element")
var score = document.getElementById("score")
var game_div = document.getElementById("game")
var result_div = document.getElementById("chosen")
var play_btn = document.getElementById("play")
var statuse = document.getElementById("status_res")
var uc = document.getElementById("uc")
var bc = document.getElementById("bc")
let uscore = 0

items.forEach(item => item.addEventListener("click",()=>{
  var y = item.id
  var z = bchoice();

  if(y===z){
    statuse.innerHTML = "ITS TIE"
  }
  else if(y=="rock"&&z=="scissor"||y=="paper"&&z=="rock"||y=="scissor"&&z=="paper"){
    uscore = uscore + 1;
    statuse.innerHTML = " YOU WIN"

  }
  else{
    uscore = uscore - 1;
    statuse.innerHTML = " YOU LOSE"

  }
  game_div.style.display = "none"
  result_div.style.display = "flex"

  if(y=="rock"){
    console.log("rock")
    uc.classList.add("rock")
    uc.classList.remove("paper")
    uc.classList.remove("scissor")
  }
  else if(y=="paper"){
    console.log("paper")
    uc.classList.add("paper")
    uc.classList.remove("rock")
    uc.classList.remove("scissor")
  }
  else if(y=="scissor"){
    console.log("scissor")
    uc.classList.add("scissor")
    uc.classList.remove("rock")
    uc.classList.remove("paper")
  }
  else{
    console.log("CHOOSE ANOTHER")
  }
  if(z=="rock"){
    console.log("rock")
    bc.classList.add("rock")
    bc.classList.remove("paper")
    bc.classList.remove("scissor")
  }
  else if(z=="paper"){
    console.log("paper")
    bc.classList.add("paper")
    bc.classList.remove("rock")
    bc.classList.remove("scissor")
  }
  else if(z=="scissor"){
    console.log("scissor")
    bc.classList.add("scissor")
    bc.classList.remove("rock")
    bc.classList.remove("paper")
  }
  else{
    console.log("CHOOSE ANOTHER")
  }
  score.innerHTML  = uscore
}))

function bchoice(){
  var array = ["rock","paper","scissor"]
  var x = Math.floor(Math.random()*3)
  return array[x]
}

play_btn.addEventListener("click",playGame)
function playGame(){
  game_div.style.display = "flex"
  result_div.style.display = "none"
}

