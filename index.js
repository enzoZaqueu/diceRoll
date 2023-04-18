roll.addEventListener('click', diceRoll);

function rollNumber() {
    return Math.floor((Math.random() * 6)+1);
}
function diceRoll() {

    // cria um número de 1 a 6 para o player 1
    var diceFaceUm = rollNumber();

    //troca a face do dado do Player 1
    player1.setAttribute("src", `link/dice${diceFaceUm}.png`);
    player1.classList.add("scaleTransform");
    setTimeout(function(){
        player1.classList.remove("scaleTransform")
    }, 200);

    // cria um número de 1 a 6 para o player 2
    var diceFaceDois = rollNumber();

    // troca a face do dado do Player 2
    player2.setAttribute("src", `link/dice${diceFaceDois}.png`);
    player2.classList.add("scaleTransform");
    setTimeout(function(){
        player2.classList.remove("scaleTransform");
    },300);

    resultados();

    if (diceFaceUm === diceFaceDois) {
        result.innerHTML = "Empate!";
    }
    if (diceFaceUm > diceFaceDois) {
        result.innerHTML = "Player 1 ganhou!";
    }
    if (diceFaceUm < diceFaceDois) {
        result.innerHTML = "Player 2 ganhou!";
    }
}

    // antigo código
    
    // switch (diceFaceUm) {
    //     case 1:
    //     player1.setAttribute("src", "link/dice1.png")
    //         break;
    //     case 2:
    //     player1.setAttribute("src", "link/dice2.png");
    //         break;
    //     case 3:
    //     player1.setAttribute("src", "link/dice3.png");
    //         break;
    //     case 4:
    //     player1.setAttribute("src", "link/dice4.png");
    //         break;
    //     case 5:
    //     player1.setAttribute("src", "link/dice5.png");
    //         break;
    //     case 6:
    //     player1.setAttribute("src", "link/dice6.png");
    //         break;
    //     default:
    //     player1.setAttribute("src", "link/dice6.png");
    //         break;
    // }

    // antigo codigo

    // switch (diceFaceDois) {
    //     case 1:
    //     player2.setAttribute("src", "link/dice1.png")
    //         break;
    //     case 2:
    //     player2.setAttribute("src", "link/dice2.png");
    //         break;
    //     case 3:
    //     player2.setAttribute("src", "link/dice3.png");
    //         break;
    //     case 4:
    //     player2.setAttribute("src", "link/dice4.png");
    //         break;
    //     case 5:
    //     player2.setAttribute("src", "link/dice5.png");
    //         break;
    //     case 6:
    //     player2.setAttribute("src", "link/dice6.png");
    //         break;
    //     default:
    //     player2.setAttribute("src", "link/dice6.png");
    //         break;
    // }
