roll.addEventListener('click', diceRoll);

function rollNumber() {
    return Math.floor((Math.random() * 6)+1);
}

var players = document.querySelectorAll("img");

function rnd() {
    var rdnN = Math.random() < 0.5 ? -1 : 1;
    return rdnN;
}

// animacao inicial
var i = 0;
function animInicio() {
    if (i < 5){
        setTimeout(function(){
            for (let index = 0; index < 2; index++) {
                players[index].style.transform=`rotate(${rnd()*7}deg) scale(1.05) translate(${rnd()*5}px, ${rnd()*2}px)`;
                players[index].setAttribute("src", `link/dice${rollNumber()}.png`)
            }
            setTimeout(function(){
                for (let index = 0; index < 2; index++) {
                    players[index].style.transform=`rotate(0deg) scale(1) translate(0px, 0px)`;
                }
            },75);
            i++;
            animInicio();
        }, 100);
    }
}
animInicio();

function diceRoll() {

    var diceFaceUm = rollNumber();
    var diceFaceDois = rollNumber();

    player1.setAttribute("src", `link/dice${diceFaceUm}.png`);
    player2.setAttribute("src", `link/dice${diceFaceDois}.png`);

    for (let index = 0; index < 2; index++) {
        players[index].style.transform=`rotate(${rnd()*7}deg) scale(1.05) translate(${rnd()*5}px, ${rnd()*2}px)`;
    }

    setTimeout(function(){
        for (let index = 0; index < 2; index++) {
            players[index].style.transform=`rotate(0deg) scale(1) translate(0px, 0px)`;
        }
    },50);

    setTimeout(function() {
        result.style.transform="scale(1.05)";
        if (diceFaceUm === diceFaceDois) {
            result.innerHTML = "Empate!";
        }
        if (diceFaceUm > diceFaceDois) {
            result.innerHTML = "Player 1 ganhou!";
        }
        if (diceFaceUm < diceFaceDois) {
            result.innerHTML = "Player 2 ganhou!";
        }
    
        },100)
    
    setTimeout(function() {
        result.style.transform="scale(1)";
        },200)

}