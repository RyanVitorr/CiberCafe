const container = document.querySelector(".container");
const divsCell = document.querySelectorAll(".cell");
const mensagem = document.querySelector(".msg");
const divMensagem = document.querySelector("#mensagemAcabaJogo");


let circuloJoga = false;

const turnos = () => {
    circuloJoga = !circuloJoga;

    container.classList.remove('circulo');
    container.classList.remove('x');

    if(circuloJoga) {
        container.classList.add('circulo')
    } else {
        container.classList.add('x')
    }
};

const acabaJogo = (empate) => {
    if (empate) {
        mensagem.innerText = "Empate!"
    } else {
        mensagem.innerText = circuloJoga ? 'Mestre Kame Venceu!' : 'Bulma Venceu!';
    }
}

const checarEmpate = () => {
    return [... divsCell].every((cell) => {
        return cell.classList.contains('x') || cell.classList.contains('circulo');
    })
}

const checarVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checarVencedor = (jogador) => {
    return checarVitoria.some(combinacoes => {
        return combinacoes.every(index => {
            return divsCell[index].classList.contains(jogador);
        });
    });
};

const adiciona = (cell, classAdd) => {
    cell.classList.add(classAdd);
};

const mudaSimbulo = () => {
    circuloJoga = !circuloJoga
};

const clickEscolha = (e) => {
    const cell = e.target;
    const classAdd = circuloJoga ? 'circulo' : 'x';

    adiciona(cell, classAdd);

    const vitoria = checarVencedor(classAdd);
    const empate = checarEmpate();
   
    if(vitoria) {
        acabaJogo(false);
    } else if (empate) {
        acabaJogo(true);
    }

    turnos();
};

for (const cell of divsCell) {
    cell.addEventListener("click", clickEscolha,{once: true});
};















/*
let currentPlayer = 'X';
let moves = 0;
let cells = document.querySelectorAll('.cell');

function cellClicked(cellIndex) {
    if (!cells[cellIndex].innerHTML) {
        cells[cellIndex].innerHTML = currentPlayer;
        moves++;

        if (checkWinner()) {
            alert(currentPlayer + ' venceu!');
            resetBoard();
        } else if (moves === 9) {
            alert('Empate!');
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            
        }
    }
    
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombos.some(combo => {
        return cells[combo[0]].innerHTML &&
            cells[combo[0]].innerHTML === cells[combo[1]].innerHTML &&
            cells[combo[1]].innerHTML === cells[combo[2]].innerHTML;
    });
}

function resetBoard() {
    cells.forEach(cell => {
        cell.innerHTML = '';
    });
    currentPlayer = 'X';
    moves = 0;
}

function resetGame() {
    resetBoard();
}
*/