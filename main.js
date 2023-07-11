function main() {

    let main = document.querySelector("main");
    let buttons = document.querySelectorAll("button");
    let screens = document.querySelector(".screens");
    const backButton = document.createElement("button");
    backButton.classList.add("buttonBack");
    backButton.innerText = "Back";
    const container = document.createElement("div");
    container.classList.add("cont");
    const functions = [a(` Terraria is a land of adventure! A land of mystery! A land that's yours to shape, defend, and enjoy. Your options in Terraria are limitless. Are you an action gamer with an itchy trigger finger? A master builder? A collector? An explorer? There's something for everyone.
    Start by building basic shelter, then dig for ore and other resources. Discover and craft over 500 weapons of magic, ranged, melee and summon varieties, as well as armor, and use them to battle hundreds of different enemies. Soon you'll be going head-to-head with any of a dozen enormous bosses. Go fishing, ride a mount, find Floating Islands, build houses for helpful NPCs, and much, much more.`), 
    a(`  NPCs are friendly automated non-player characters that provide services to players and appear after several milestones are achieved in the game's advancement. They move into structures the player must provide, known as houses.  Each NPC will need their own house, with the exception that a pet and non-pet NPC may share a house.
    If an NPC is killed, they will respawn after a delay, as long as a suitable vacant house is still available. If the NPC has an inventory or population requirement for their initial spawn , that has to be met again for the respawn. However, a rescued NPC will remain rescued, and respawn without needing to be found again.
    There are currently 26 / 23 / 21 / 19 Town NPCs, 8 / 7 / 6 of whom normally appear in Hardmode. An additional 3 / 2 / 1 NPC(s) can be encountered who do not move into houses.`),a(``),
    a(`Terraria is an action-adventure and sandbox video game produced independently by the studio Re-Logic. It was released on May 16, 2011. To date, it has sold more than 45,000,000 copies among its various platforms. It is estimated that the game sold around 50,000 copies on launch day, with over 17,000 players online at the same time. `), 
    a(`Terraria began to be developed by Re-Logic in early January 2011. It is built on the Microsoft XNA framework. The game was released on May 16, 2011. Re-Logic is composed of Andrew Spinks, who designed and programmed the game, and Finn Brice, who along with Spinks did the graphic design for the game. The music was composed by Scott Lloyd Shelly through his Resonance Array studio.
    Terraria has proven especially popular on PC, where it has sold 17.2 million copies, almost half of the total. 9.3 million copies correspond to the versions for iOS and Android mobile devices, and finally 8.5 million are copies sold for consoles.`), 
    a("The members are Wendy and Walter.")]
    function back() {
        screens.innerHTML = "";
        for(button of buttons) {
            screens.appendChild(button)
        }
        
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click",
                functions[i])
        }
        container.innerHTML = '';

    }
    backButton.addEventListener("click", back)
    function a(content) {
        return () => {
            screens.innerHTML = "";
            screens.appendChild(container);
            let cont = document.createElement("div");
            cont.classList.add("cont2");
            cont.innerHTML = content;
            container.appendChild(cont);
            container.appendChild(backButton);
        }
    }

    console.log(buttons.length)
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click",
            functions[i])
    }
}

document.addEventListener("DOMContentLoaded", main) 