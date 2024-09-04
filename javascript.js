
console.log('HEllo')

let x=1
let y=2

console.log(((4 + 6 + 9) / 77).toFixed(3))

// let button=document.querySelector("button");
let button= document.getElementsByClassName('btn')
let p_text= document.getElementById('para')

function btn_clicked() {
    if(p_text.textContent==='This machine is Stopped'){
        p_text.textContent='This machine is Started'
        button.textContent='StopMachine'
    }else{
        p_text.textContent='This machine is Stopped'
        button.textContent='StartMachine'
    }
}

button.addEventListener('click',btn_clicked);

// button.addEventListener("click", btn_clicked);

// const btn = document.querySelector("button");
// const txt = document.querySelector("p");
//
// btn.addEventListener("click", updateBtn);
//
// function updateBtn() {
//     if (btn.textContent === "Start machine") {
//         btn.textContent = "Stop machine";
//         txt.textContent = "The machine has started!";
//     } else {
//         btn.textContent = "Start machine";
//         txt.textContent = "The machine is stopped.";
//     }
// }
