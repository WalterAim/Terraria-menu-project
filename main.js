

function main() {
    let main = document.querySelector("main");
    let buttons = document.querySelectorAll("button");

    function backMain() {
        main.innerHTML = "";
        for(let i of buttons) {
            main.appendChild(i);
        }
        main.classList.remove("mainIn")
    }

    function mainDestruction() {
        let back = document.createElement("button");
        let box = document.createElement("div");
        let cont = document.createElement("div");

        box.classList.add("box");
        main.classList.add("mainIn")
        back.classList.add("buttonBack")
        back.innerText = "Volver";
        back.addEventListener("click", backMain);
        main.innerHTML = "";
        box.innerText = "Sobre";
        main.appendChild(box);
        main.appendChild(back);
        
    }
    buttons[0].addEventListener("click", mainDestruction);
}

document.addEventListener("DOMContentLoaded", main)