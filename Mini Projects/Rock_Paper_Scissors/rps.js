let contents = ["Rock","Paper","Scissors"];

function computerChoice(){
    let rand = Math.floor(Math.random()*contents.length);
    let randomChoice = contents[rand];
    return randomChoice;
}

let user_score = 0;
let comp_score = 0;

let btn = document.querySelectorAll(".btn");
let p_res = document.querySelector("#result");
let your_sco = document.querySelector("#your");
let com_sco = document.querySelector("#com");

function score(user){
    let comp = computerChoice();
    console.log("comp:"+comp);
    console.log("user:"+user);
    if(user===comp){
        return "It's a tie";
    } else if((user==="Rock" && comp==="Scissors") || (user==="Paper" && comp==="Rock") || 
    (user==="Scissors" && comp==="Paper")){
        user_score++;
        your_sco.innerText = "Your score: "+user_score;
        return "You win!!";
    } else{
        comp_score++;
        com_sco.innerText = "Computer score: "+ comp_score;
        return "You lost the game!!";
    }
}

function Game(){
    btn.forEach((button) => {
        button.addEventListener("click", () => {
            let result = score(button.innerText);
            p_res.innerText = result;
        });
    });
}

Game();