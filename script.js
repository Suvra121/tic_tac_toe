let boxes = document.querySelectorAll("#box");

let head = document.querySelector(".head");
let h1 = document.querySelector("h1")
//console.dir(head);
head.style.display="none";
let game = document.querySelector(".game");
const winpat = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

let turnO = true;
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        
        if(turnO)
        {
            box.innerText= "O";
            box.disabled= true;
            turnO = false;
        }
        else
        {
            box.innerText= "X";
            box.disabled= true;
            turnO = true;
        }
 
        iswin();
        
    })
});

const iswin = ()=>{
    count++;
    console.log(count)
    for(let pat of winpat)
    {
        pos1 = boxes[pat[0]].innerText;
        pos2 = boxes[pat[1]].innerText;
        pos3 = boxes[pat[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 !== "" )
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                for(let b of boxes)
                {
                    b.disabled = true;
                }
                console.log("winner" ,pos1);
                head.style.marginTop="20%";
                game.style.marginTop="30%";
                head.style.display="block";
                h1.innerText = `!!! Congratulation ${pos1} is Winner !!!`;
            }
            else if(count===9 && pos1 !== pos2 && pos2 !== pos3)
            {
                for(let b of boxes)
                    {
                        b.disabled = true;
                    }
                head.style.marginTop="20%";
                game.style.marginTop="30%";
                head.style.display="block";
                h1.innerText = `!!! DRAW !!!`;
            }
        }
    }
    
}

let reset = document.querySelector("#reset");
reset.addEventListener("click", ()=>{
    for(let b of boxes)
        {
            b.innerText="";
            b.disabled = false;
        }
        count = 0;
        pos1 = "";
        pos2 = "";
        pos3 = "";
        h1.innerText = ``;

})


let n = document.querySelector("#new");
n.addEventListener("click",()=>{
    for(let b of boxes)
        {
            b.disabled = false;
            b.innerText="";
            head.style.display="none";
            game.style.marginTop="40px";
        }
        //turnO=true;
        pos1 = "";
        pos2 = "";
        pos3 = "";
        h1.innerText = ``;
        count= 0;
})