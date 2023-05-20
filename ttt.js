let currentPlayer = 'X';
let VerificaChange = false
let botao = document.getElementById('botao');
let reiniciar = document.getElementById('botao2')
reiniciar.style.display = 'none'
let infos = document.getElementById('divInfos')
infos.style.display = 'none'
let time = document.getElementById('times');
let resultado = document.getElementById('result')
resultado.style.display = 'none'
let totPartidas = 0
let xWins = 0
let oWins = 0
let totDraws = 0
let gameEnded = false;
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
  cell.addEventListener('click', clicado);
});
function clicado(event) {
  botao.innerHTML = 'Proxima'
  const cell = event.target;
  if (cell.textContent === "" && !gameEnded) {
    cell.innerHTML = `<p class="inDiv">${currentPlayer}</p>`;
    checkGameStatus();
    togglePlayer();
    recomecar()
    console.log('Cheguei 1')
  }
}

function togglePlayer() {
  if(currentPlayer == 'X'){
    currentPlayer = 'O'
  }else{
    currentPlayer = 'X'
  }
  time.innerHTML = `Vez do ${currentPlayer}`;
  console.log('Player mudou'+currentPlayer)
}

function checkGameStatus() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6] 
  ];

  for (comb of winningCombinations) {
    const [a, b, c] = comb;
    const cellA = cells[a];
    const cellB = cells[b];
    const cellC = cells[c];

    if (cellA.textContent === currentPlayer && cellB.textContent === currentPlayer && cellC.textContent === currentPlayer) {
      announceWinner();
      return;
    }
  }

  if (Array.from(cells).every(cell => cell.textContent !== '')) {
    announceDrawn();
  }
}

function announceWinner() {
  gameEnded = true;
  totPartidas += 1
  time.innerHTML = '';
  time.style.display = 'none'
  resultado.style.display = 'block'
  resultado.innerHTML = `${currentPlayer} venceu!`
  if (currentPlayer == 'X') {
    xWins += 1
  } else if (currentPlayer == 'O') {
    oWins += 1
  }
}

function announceDrawn() {
  totDraws += 1
  totPartidas += 1
  gameEnded = true;
  time.innerHTML = '';
  time.style.display = 'none'
  resultado.style.display = 'block'
  resultado.innerHTML = 'Empate!'
}
async function recomecar() {
  resultado.style.display = 'none'
  time.style.display = 'block'
  gameEnded = false
  totPartidas == 0 ? infos.style.display = 'none' : infos.style.display = 'block'
  infos.style.display == 'block' ? reiniciar.style.display = 'block' : reiniciar.style.display = 'none'
  infos.innerHTML = `<p class="pInfo" id="pInfo1">Partida atual - ${totPartidas + 1}</p>`
  infos.innerHTML += `<p class="pInfo">X:${xWins} vs O:${oWins}</p>`
  totDraws != 1 ? infos.innerHTML += `<p class="pInfo">${totDraws} empates</p>` : infos.innerHTML += `<p class="pInfo" id="pInfo4">${totDraws} empate</p>`
  };

reiniciar.addEventListener('click', () => {
  location.reload()
})

function ChangePlayer(){
  VerificaChange = Array.from(cells).every((cell) => cell.textContent === '');
  if(VerificaChange && totPartidas >0){
    botao.innerHTML = 'Mudar Jogador'
    console.log('mudar jogador')
  }
}

botao.addEventListener('click',() => {
  console.log('botao clicado')
  cells.forEach(cell => {
    cell.innerHTML = ''
  })
  ChangePlayer()
  togglePlayer()
  })