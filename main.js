const usercore = 0;
const compScore = 0;
const userScore_span = document.getElementById("User-score");
const compScore_span = document.getElementById("Comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getCompChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function win(){
    usercore++;
}

function lose(){

}

function draw(){

}

function game(userChoice){
    const compChoice = getCompChoice();
    console.log("user choice =>"+userChoice);
    console.log("comp choice =>"+compChoice);
    switch(userChoice+compChoice){
        case"pr":
        case"sp":
        case"rs":
        win();
            console.log("User Win");
        break;
        case"rp":
        case"ps":
        case"sr":
        lose();
            console.log("Computer Win");
        break;
        case"ss":
        case"rr":
        case"pp":
        draw();
            console.log("Draw");
        break;
    }
}

function main(){
    rock_div.addEventListener('click',function(){
        console.log("it's rock");
        game("r");
    })
    
    paper_div.addEventListener('click',function(){
        console.log("it's paper");
        game("p");
    })
    
    scissor_div.addEventListener('click',function(){
        console.log("it's scissor");
        game("s");
    })
}
main();