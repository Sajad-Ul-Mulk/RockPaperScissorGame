console.log('RockPaperScissor');
const start= document.querySelector('.button')
const userscore_counter= document.querySelector('.user_score')
const pcscore_counter= document.querySelector('.pc_score')
const result= document.querySelector('.result')
const list = ['rock', 'paper', 'scissor'];
let user_score=0;
let pc_score=0;
const options=document.querySelector('.option_btns')

const match_pool = {
    rock: 0,
    paper: 1,
    scissor: 2,
};
function getValueForUserPick(key) {
    return match_pool[key];
}
options.addEventListener('click',(e)=>{
    const item_clicked= e.target;
    switch(item_clicked.id){
        case 'rock':
            startGame('rock');
            break
        
        case 'paper':
                startGame('paper')
            break
        
        case 'scissor':
            startGame('scissor')
            break
    }
})
function startGame(user_pick) {
    result.style.backgroundColor='lightslategray'
    const pc_pick= list[Math.floor(Math.random() * list.length)];
    // console.log(getValueForUserPick(user_pick.toLowerCase()));
    console.log(user_pick,pc_pick)
    matchOptions(user_pick,pc_pick)
}
function gameReset() {
    pcscore_counter.textContent='0';
    pc_score=0;
    userscore_counter.textContent='0';
    user_score=0;
}
function gameComplete(user=false,pc=false) {
    user ? (result.textContent='user wins', result.style.backgroundColor='green') : result.textContent='PC wins'
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
    if (user_pick > pc_pick) {
        user_score++;
        result.textContent = 'User Scored A Point';
        userscore_counter.textContent = user_score.toString();
        checkWinner();
    } else if (pc_pick > user_pick) {
        pc_score++;
        result.textContent = 'PC got A Point';
        pcscore_counter.textContent = pc_score.toString();
        checkWinner();
    } else if (pc_pick == user_pick) {
        result.textContent = 'Its a Tie, Select Again!!';
    }
}