let data = new Date()
let c0 = document.getElementById('c0')
let c1 = document.getElementById('c1')
let c2 = document.getElementById('c2')
let c3 = document.getElementById('c3')
let c4 = document.getElementById('c4')
let c5 = document.getElementById('c5')
let c6 = document.getElementById('c6')
let c7 = document.getElementById('c7')
let c8 = document.getElementById('c8')
const cells = document.querySelectorAll('.cell');
let inDiv = document.querySelectorAll('.inDiv')

let inDiv2 = document.getElementsByClassName('.inDiv2')
let currentPlayer = 'X'
let jogador1;
let jogador2;
let VerificaChange = false
let VerificaChange2 = false
let body = document.querySelector('body')
let botao = document.getElementById('botao');
let botaoUndo = document.getElementById('botaoUndo')
let divBotao1 = document.getElementById('divBotao1')
botao.style.display = 'none'
botaoUndo.style.display = 'none'
botao.innerHTML = 'Próxima partida'
let botaoSpawnOnce = false
let reiniciar = document.getElementById('botaoRecomecar')
reiniciar.style.display = 'none'
let infos = document.getElementById('divInfos')
infos.style.display = 'none'
let time = document.getElementById('times');
let resultado = document.getElementById('result')
resultado.style.display = 'none'
let totPartidas = 0
let xWins = 0
let oWins = 0
let debug = 0
let totDraws = 0
let gameEnded = false;
let h1a = document.getElementById('h1a')

let moreIcon = document.getElementById('more')
let lessIcon = document.getElementById('less')
let divConfig = document.getElementById('divOptions')
divConfig.style.display = 'none'
let pPadrao = document.getElementById('pPadrao')
let pPreto = document.getElementById('pPreto')
let pBranco = document.getElementById('pBranco')
let pVermelho = document.getElementById('pVermelho')
let pAzul = document.getElementById('pAzul')
let sPadrao = document.getElementById('sPadrao')
let sPreto = document.getElementById('sPreto')
let sBranco = document.getElementById('sBranco')
let sVermelho = document.getElementById('sVermelho')
let sAzul = document.getElementById('sAzul')

let inputX = document.getElementById('pNovox')
let inputO = document.getElementById('pNovoo')
let botaoXO = document.getElementById('enviaInfos')
let pError1 = document.getElementById('pError')
let divInicio = document.getElementById('inicio')

let totUndos = 1
let totHistoric = 0
let cellId;
let moveHistoric = []

let botaoMqn = document.getElementById('botaoPM')
let botaoP = document.getElementById('botaoMM')

let botaoMqnMenu = document.getElementById('botaoPMMenu')
let botaoPMenu = document.getElementById('botaoMMMenu')

let contram = false
let pvpchoice = false
let maqOptions = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8']
let sortCell;
let passagens = 0
let mo;
h1a.style.fontSize = '80px'
cells.forEach(cell => {
  cell.style.display = 'none'
  time.style.display = 'none'
})
botaoMqn.addEventListener('click', () => {
  botaoMqn.style.display = 'none'
  botaoP.style.display = 'none'
  cells.forEach(cell => {
    cell.style.display = 'block'
  })
  time.style.display = 'block'
  contram = true
  h1a.style.fontSize = '50px'
  divInicio.style.display = 'none'
  recomecar()
})
botaoP.addEventListener('click', () => {
  botaoMqn.style.display = 'none'
  botaoP.style.display = 'none'
  cells.forEach(cell => {
    cell.style.display = 'block'
  })
  time.style.display = 'block'
  h1a.style.fontSize = '50px'
  divInicio.style.display = 'none'
  contram = false
  recomecar()
})
botaoMqnMenu.addEventListener('click', () => {
  botaoMqn.style.display = 'none'
  botaoP.style.display = 'none'
  cells.forEach(cell => {
    cell.style.display = 'block'
  })
  time.style.display = 'block'
  contram = true
  h1a.style.fontSize = '50px'
  divInicio.style.display = 'none'
})
botaoPMenu.addEventListener('click', () => {
  botaoMqn.style.display = 'none'
  botaoP.style.display = 'none'
  cells.forEach(cell => {
    cell.style.display = 'block'
  })
  time.style.display = 'block'
  h1a.style.fontSize = '50px'
  divInicio.style.display = 'none'
  contram = false
  recomecar()
})
cells.forEach((cell) => {
  cell.addEventListener('click', clicado);
});

botaoUndo.addEventListener('click', undoFunction)

function undoFunction(event) {
  let everyNull = Array.from(cells).every(cell => cell.innerHTML == '')
  if (!everyNull) {
    let lastMove = moveHistoric[totHistoric - totUndos]
    lastMove == 'c0' ? c0.innerHTML = '' : lastMove == 'c1' ? c1.innerHTML = '' : lastMove == 'c2' ? c2.innerHTML = '' : lastMove == 'c3' ? c3.innerHTML = '' : lastMove == 'c4' ? c4.innerHTML = '' : lastMove == 'c5' ? c5.innerHTML = '' : lastMove == 'c6' ? c6.innerHTML = '' : lastMove == 'c7' ? c7.innerHTML = '' : lastMove == 'c8' ? c8.innerHTML = '' :
      console.log('erro')
    moveHistoric.pop()
    togglePlayer()
    totUndos += 1
  }
}
function clicado(event) {
  cellId = event.target.id
  moveHistoric.push(cellId)
  totHistoric += 1
  if (!gameEnded && botao.innerHTML == 'Próxima partida' || botao.innerHTML == 'Mudar Jogador') {
    botao.innerHTML = 'Recomeçar'
  }
  botaoSpawnOnce = true
  if (botaoSpawnOnce) {
    botao.style.display = 'block'
  }
  debug = 0
  const cell = event.target;
  if (cell.textContent === "" && !gameEnded) {
    cell.innerHTML = `<p class="inDiv">${currentPlayer}</p>`;
    if (contram) {
      togglePlayer()
      maqPlay()
      checkGameStatus()
      recomecar()
    } else {
      checkGameStatus();
      togglePlayer();
      recomecar()
    }
  }
}
function maqPlay() {
  if (contram) {
    maqOptions = maqOptions.filter(cell => cell != cellId)
    sortCell = Math.floor(Math.random() * maqOptions.length);
    mo = maqOptions[sortCell]
    maqOptions = maqOptions.filter(cell => cell != mo)
    mo == 'c0' ? c0.innerHTML = `<p class="inDiv2">${currentPlayer}</p>` : mo == 'c1' ? c1.innerHTML = `<p class="inDiv2">${currentPlayer}</p>` : mo == 'c2' ? c2.innerHTML = `<p class="inDiv2">${currentPlayer}</p>` : mo == 'c3' ? c3.innerHTML = `<p class="inDiv2">${currentPlayer}</p>` : mo == 'c4' ? c4.innerHTML = `<p class="inDiv2">${currentPlayer}</p>` : mo == 'c5' ? c5.innerHTML = `<p class="inDiv2">${currentPlayer}</p>` : mo == 'c6' ? c6.innerHTML = `<p class="inDiv2">${currentPlayer}</p>` : mo == 'c7' ? c7.innerHTML = `<p class="inDiv2">${currentPlayer}</p>` : mo == 'c8' ? c8.innerHTML = `<p class="inDiv2">${currentPlayer}</p>` :
      console.log('erro')
    maqOptions = maqOptions.filter(cell => cell != mo);
    moveHistoric.push(mo)
    console.log(moveHistoric)
    togglePlayer()
    passagens += 2
  }
}
function togglePlayer() {
  if (currentPlayer == 'X') {
    currentPlayer = 'O'
  } else if (currentPlayer == 'O') {
    currentPlayer = 'X'
  } else if (currentPlayer == jogador1) {
    currentPlayer = jogador2
  } else {
    currentPlayer = jogador1
  }
  time.innerHTML = `Vez do ${currentPlayer}`;
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
      botao.innerHTML = 'Próxima partida'
      return;
    }
  }

  if (Array.from(cells).every(cell => cell.textContent !== '')) {
    botao.innerHTML = 'Próxima partida'
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
  if (currentPlayer == 'X' || currentPlayer == jogador1) {
    xWins += 1
  } else if (currentPlayer == 'O' || currentPlayer == jogador2) {
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
  if (botao.innerHTML == 'Próxima partida') {
    botaoUndo.style.display = 'none'
    botao.style.padding = '25px'
    divBotao1.style.justifyContent = 'center'
  } else {
    if (!contram) {
      botaoUndo.style.display = 'block'
      botao.style.padding = '18px'
      divBotao1.style.justifyContent = 'space-around'
    } else {
      botaoUndo.style.display = 'none'
      botao.style.padding = '25px'
      divBotao1.style.justifyContent = 'center'
    }
  }
  botao.addEventListener('click', () => {
    while (debug < 1) {
      maqOptions = ['c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8']
      passagens = 0

      moveHistoric = []
      totHistoric = 0
      totUndos = 1
      resultado.style.display = 'none'
      time.style.display = 'block'
      gameEnded = false
      totPartidas == 0 ? infos.style.display = 'none' : infos.style.display = 'block'
      infos.style.display == 'block' ? reiniciar.style.display = 'block' : reiniciar.style.display = 'none'
      infos.innerHTML = `<p class="pInfo" id="pInfo1">Partida atual - ${totPartidas + 1}</p>`
      infos.innerHTML += `<p class="pInfo">X:${xWins} vs O:${oWins}</p>`
      totDraws != 1 ? infos.innerHTML += `<p class="pInfo">${totDraws} empates</p>` : infos.innerHTML += `<p class="pInfo" id="pInfo4">${totDraws} empate</p>`
      debug += 1
    }
  })
};

function ChangePlayer() {
  VerificaChange = Array.from(cells).every((cell) => cell.textContent === '');
  if (VerificaChange && totPartidas > 0) {
    botao.innerHTML = 'Mudar Jogador'
  }
}

botao.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.innerHTML = ''
  })
  ChangePlayer()
  togglePlayer()
})

reiniciar.addEventListener('click', () => {
  location.reload()
})