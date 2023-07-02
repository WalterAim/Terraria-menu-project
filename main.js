

function main() {
    let main = document.querySelector("main");
    let buttons = document.querySelectorAll("button");
    let cont = document.createElement("div");
    cont.classList.add("cont");

    function backMain() {
        main.innerHTML = "";
        cont.innerHTML = "";
        for(let i of buttons) {
            main.appendChild(i);
        }
        main.classList.remove("mainIn");
    }

    function voidMain() {
        main.innerHTML = "";
        main.appendChild(cont);
    }

    function addBox(a) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.innerText = a;
        cont.appendChild(box);
    }

    function addBack() {
        let back = document.createElement("button");
        back.classList.add("buttonBack");
        back.innerText = "Volver";
        back.addEventListener("click", backMain);
        cont.appendChild(back);
    }

    function about() {
        voidMain();
        addBox("Sobre");
        addBack();
    }

    function characters() {
        voidMain();
        addBox("Personajes");
        addBack();
    }

    function objetive() {
        voidMain();
        addBox("Objetivos");
        addBack();
    }

    function sold() {
        voidMain();
        addBox("Copias vendidas");
        addBack();
    }

    function devs() {
        voidMain();
        addBox("RELOGICO");
        addBack();
    }

    function members() {
        voidMain();
        addBox("Wendy y Walter! :D");
        addBack();
    }

    let fs = [about, characters, objetive, sold, devs, members]
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", fs[i])
    }
}

document.addEventListener("DOMContentLoaded", main) 