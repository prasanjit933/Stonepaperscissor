let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#compscore");

const genCompChoice = () => {
//rock, paper, scissors
const options = ["rock", "paper", "scissors"];
const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
};

const drawGame = () => {
   // console.log("game was draw");
    msg.innerText ="Game was Draw, Play Again";
};

const showWinner = (userWin,userchoice, compChoice) => {
    if(userWin) {
        userScore++;
        //console.log("you win");
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else {
         compScore++;
         compScorePara.innerText = compScore;
        //console.log("You lose");
        msg.innerText = `You lost ! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) =>{

//console.log("userchoice =" , userchoice);
//Generate Computer choice -> Modular way of programming
const compChoice = genCompChoice();
//console.log("comp choice = " , compChoice);

if(userchoice === compChoice){
    //drawgame
    drawGame();
}
else{
 let userWin =true;
 if(userchoice === "rock") {
    //scissors,paper
   userWin = compChoice === "paper" ? false : true ;
} else if (userchoice === "paper"){
    // rock, scissors
   userWin =  compChoice ==="scissors" ? false : true ;
} else {
    //rock,paper
    userWin = compChoice === "rock" ? false : true ;
}
   showWinner(userWin, userchoice,compChoice);
}
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id");
     //console.log("choice was clicked", userChoice);
     playGame(userchoice);
    });
});