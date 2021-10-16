let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("Comp-score");
const scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getCompChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}



function result(bothChoice){
    switch(bothChoice){
        case"pr":
        result_div.innerHTML = "your choice is (paper) and computer choice is (rock)..YOU WIN..!!";
        break;
        case"sp":
        result_div.innerHTML= "your choice is (scissor) and computer choice is (paper)..YOU WIN..!!";
        break;
        case"rs":
        result_div.innerHTML= "your choice is (rock) and computer choice is (scissor)..YOU WIN..!!";
        break;
        case"rp":
        result_div.innerHTML= "your choice is (rock) and computer choice is (paper)..COMP WIN..!!";
        break;
        case"ps":
        result_div.innerHTML= "your choice is (paper) and computer choice is (scissor)..COMP WIN..!!";
        break;
        case"sr":
        result_div.innerHTML= "your choice is (scissor) and computer choice is (rock)..COMP WIN..!!";
        break;
        case"rr":
        result_div.innerHTML= "your choice is (rock) and computer choice is (rock)..DRAWWW..!!";
        break;
        case"pp":
        result_div.innerHTML= "your choice is (paper) and computer choice is (paper)..DRAWWW..!!";
        break;
        case"ss":
        result_div.innerHTML= "your choice is (scissor) and computer choice is (scissor)..DRAWWW..!!";
        break;
    }
}

function win(){
    userScore++;
    console.log(userScore);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result();
}

function lose(){
    compScore++;
    console.log(compScore);
    compScore_span.innerHTML=compScore;
    userScore_span.innerHTML = userScore;
    result();
}

function draw(){
    result();
}

function game(userChoice){
    const compChoice = getCompChoice();
    console.log("user choice =>"+userChoice);
    console.log("comp choice =>"+compChoice);
    switch(userChoice+compChoice){
        case"pr":
        result("pr");
        case"sp":
        result("sp");
        case"rs":
        result("rs");
        win();
            console.log("User Win");
        break;
        case"rp":
        result("rp");
        case"ps":
        result("ps");
        case"sr":
        result("sr");
        lose();
            console.log("Computer Win");
        break;
        case"ss":
        result("ss");
        case"rr":
        result("rr");
        case"pp":
        result("pp");
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