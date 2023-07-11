const o = {
    main: document.querySelector("main"),
    screens: document.createElement("div")
};

o.screens.classList.add("");
let buttons = document.querySelectorAll("button");
let names = ["general", "characters", "objetive", "copies sold", "developers", "members"];
for(let i = 0; i < buttons.length; i++) 
    o[names[i]] = buttons[i];

let about = `
    <div>
    </div>
    <div>
        
    </div>
`;


function main() {
    
}

document.addEventListener("DOMContentLoaded", main);