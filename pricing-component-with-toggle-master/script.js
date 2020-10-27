const inputEL = document.querySelector("#switch")
const btns = document.getElementsByClassName("btn")
console.log(btns)
const midBtn = document.querySelector(".btn-mid")
const lists = document.getElementsByClassName("list")
const text = ["$19.99",
"$24.99",
"$39.99"]
                

inputEL.addEventListener('change',(e)=>{

     for(let btn of btns){
        btn.classList.toggle("toggled-btn");
        btn.classList.toggle("opacity");
        setTimeout(()=>btn.classList.toggle("opacity"),1000);
        }
        midBtn.classList.toggle("btn-montlhy-mid");
        midBtn.classList.toggle("opacity");
        setTimeout(()=>midBtn.classList.toggle("opacity"),1000);
    changeText();
    
    cards.children
    cards.classList.toggle("card-animation")
        
})

function changeText(){
    for(let i = 0;i < lists.length; i++){
            lists[i].children[0].children[0].classList.toggle("translate")
            let curText =  lists[i].children[0].children[0].innerHTML;
            lists[i].children[0].children[0].innerHTML = text[i];
            text[i] = curText;
            setTimeout(()=>lists[i].children[0].children[0].classList.toggle("translate"),1000);
        
    }
}

