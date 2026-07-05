let boxes = document.querySelectorAll(".box");
let resetb= document.querySelector("#resetbtn");
let newgbtn = document.querySelector("#newbtn");
let msgcontainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0=true;//palayerx,playerO;
let count = 0;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetg = () => {
    turn0 = true;
    enablebox();
    msgcontainer.classList.add("hide");
    count=0;
};

const disablebox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enablebox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.color="";
    }
};

boxes.forEach((box)=> {
    box.addEventListener("click",() => {
        
        if(turn0){
            box.innerText ="O";
            box.style.color="blue";
            turn0=false;
        }else{
            box.innerText ="X";
            box.style.color="red";
            turn0=true;
        }
        
        
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count === 9 && !iswinner){
            gamedraw();
        }
    });
});

const gamedraw = () =>{
    msg.innerText=`game was drawn`;
     msgcontainer.classList.remove("hide");
     disablebox();
};
const showwinner = (winner) => {
    msg.innerText = `congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};

const checkwinner = () =>{
    for( let pattern of winpattern){
         
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val !="" && pos2val !="" && pos3val !=""){
                if(pos1val === pos2val && pos2val=== pos3val){
                    
                    showwinner(pos1val);
                }

            }
    }
};

newgbtn.addEventListener("click",resetg);
resetb.addEventListener("click",resetg);