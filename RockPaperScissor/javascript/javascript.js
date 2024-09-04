
console.log('RockPaperScissor');
const start= document.querySelector('.button')

const userscore_counter= document.querySelector('.user_score')
const pcscore_counter= document.querySelector('.pc_score')
const result= document.querySelector('.result')

const match_pool = {
    rock: 0,
    paper: 1,
    scissor: 2,

};

function getValueForUserPick(key) {
    return match_pool[key];
}


const list = ['rock', 'paper', 'scissor'];



let user_score=0;
let pc_score=0;


function startGame() {

    const pc_pick= list[Math.floor(Math.random() * list.length)];

    const e = document.querySelector(".SelectUserPick");
    const user_pick = e.options[e.selectedIndex].text;
    // console.log(getValueForUserPick(user_pick.toLowerCase()));
    console.log(user_pick,pc_pick)
    
    matchOptions(user_pick,pc_pick)
}

start.addEventListener('click', startGame)


function gameReset() {
    pcscore_counter.textContent='0';
    pc_score=0;
    userscore_counter.textContent='0';
    user_score=0;
    // location.reload()

}

function gameComplete(user=false,pc=false) {
    
    user ? result.textContent='user wins': result.textContent='PC wins'
    gameReset()
}

function checkWinner() {
    let user;
    let pc;
    
    if (user_score == 3)
        gameComplete(user = true)
    else if(pc_score==3)
        gameComplete(pc=true)
}

function matchOptions(user_pick,pc_pick) {

    user_pick=getValueForUserPick(user_pick.toLowerCase());
    pc_pick=getValueForUserPick(pc_pick.toLowerCase());

    console.log(user_pick,pc_pick)
    
    
    switch (true) {
        case (user_pick>pc_pick ):
            user_score++;
            result.textContent='User Scored A Point';
            userscore_counter.textContent=user_score.toString();
            checkWinner();
            break;
            
            case (pc_pick>user_pick):
                pc_score++;
                result.textContent='PC got A Point';
                pcscore_counter.textContent=pc_score.toString();
                checkWinner();
                break;

        case (pc_pick==user_pick):
            result.textContent='Its a Tie, Select Again!!';

            break;

    }
    
}