let item = document.querySelectorAll(".hi");
let array = ["Rock", "Paper", "Scissors"];
let myScore = document.querySelector("#youScore")
let compScore = document.querySelector("#CompScore")
let announce = document.querySelector("#winner");

let myscore = 0
let comscore = 0
item.forEach((val) => {
  val.addEventListener("click", (value) => {
    let random = Math.floor(Math.random() * 3);
    let guess = array[random];
let myTerm = value.target.id
  if (myTerm === "Rock" && guess === "Scissors") {
    announce.innerHTML = "You win! Rock beats Scissors.";
myscore += 1
  } else if (myTerm === "Rock" && guess === "Paper") {
    announce.innerHTML = "You lose! Paper beats Rock.";
    comscore += 1
  } else if (myTerm === "Paper" && guess === "Rock") {
    announce.innerHTML = "You win! Paper beats Rock.";
    myscore += 1
  } else if (myTerm === "Paper" && guess === "Scissors") {
    announce.innerHTML = "You lose! Scissors beats Paper.";
    comscore += 1
  } else if (myTerm === "Scissors" && guess === "Paper") {
    announce.innerHTML = "You win! Scissors beats Paper.";
    myscore += 1
  } else if (myTerm === "Scissors" && guess === "Rock") {
    announce.innerHTML = "You lose! Rock beats Scissors.";
    comscore += 1
  } else {
    announce.innerHTML = "Draw"
  }
  myScore.innerHTML = myscore
  compScore.innerHTML = comscore
    
  });
});
