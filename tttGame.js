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

let inDiv2 = document.querySelectorAll('.inDiv2')
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
let divpError = document.getElementById('divpError')

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
let sortCell;

let xHistoric = []
let ozes = []
let currentEnemy = 'O'
let cellVazia = 0
let cellCurrent = 0
let cellEnemy = 0
let jogarAqui = false
let jaJogado = false
let totJogadasPartida = 0

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
  if (contram && totUndos >= 3) {
    cells.forEach(cell => {
      cell.textContent = ''
    })
  }
  let everyNull = Array.from(cells).every(cell => cell.innerHTML == '')
  if (!everyNull && !contram) {
    let lastMove = moveHistoric[totHistoric - totUndos]
    lastMove == 'c0' ? c0.innerHTML = '' : lastMove == 'c1' ? c1.innerHTML = '' : lastMove == 'c2' ? c2.innerHTML = '' : lastMove == 'c3' ? c3.innerHTML = '' : lastMove == 'c4' ? c4.innerHTML = '' : lastMove == 'c5' ? c5.innerHTML = '' : lastMove == 'c6' ? c6.innerHTML = '' : lastMove == 'c7' ? c7.innerHTML = '' : lastMove == 'c8' ? c8.innerHTML = '' :
      console.log('erro')
    moveHistoric.pop()
    togglePlayer()
    totUndos += 1
  }
  if (!everyNull && contram) {
    console.log(xHistoric[xHistoric.length - 1], ozes[ozes.length - 1])
    if (xHistoric[xHistoric.length - 1] == 'c0') {
      c0.innerHTML = ''
    } else if (xHistoric[xHistoric.length - 1] == 'c1') {
      c1.innerHTML = ''
    } else if (xHistoric[xHistoric.length - 1] == 'c2') {
      c2.innerHTML = ''
    } else if (xHistoric[xHistoric.length - 1] == 'c3') {
      c3.innerHTML = ''
    } else if (xHistoric[xHistoric.length - 1] == 'c4') {
      c4.innerHTML = ''
    } else if (xHistoric[xHistoric.length - 1] == 'c5') {
      c5.innerHTML = ''
    } else if (xHistoric[xHistoric.length - 1] == 'c6') {
      c6.innerHTML = ''
    } else if (xHistoric[xHistoric.length - 1] == 'c7') {
      c7.innerHTML = ''
    } else if (xHistoric[xHistoric.length - 1] == 'c8') {
      c8.innerHTML = ''
    }

    jogarAqui = false
    jaJogado = false
    totJogadasPartida -= 1

    xHistoric[xHistoric.length - 1].innerHTML = ''
    ozes[ozes.length - 1].innerHTML = ''
    xHistoric.pop()
    ozes.pop()
    totUndos += 1
    console.log(xHistoric, ozes, jaJogado)
  }
}
function clicado(event) {
  if (botao.innerHTML == 'Próxima partida') {
    botaoUndo.style.display = 'none'
    botao.style.padding = '25px'
    divBotao1.style.justifyContent = 'center'
  } else {
    if (!contram) {
      botaoUndo.style.display = 'block'
      botao.style.padding = '18px'
      divBotao1.style.justifyContent = 'space-around'
    }
  }
  cellId = event.target.id
  xHistoric.push(cellId)
  moveHistoric.push(cellId)
  totHistoric += 1
  if (!gameEnded && botao.innerHTML == 'Próxima partida' || botao.innerHTML == 'Mudar Jogador') {
    botao.innerHTML = 'Recomeçar'
  }
  botaoSpawnOnce = true
  if (botaoSpawnOnce) {
    botao.style.display = 'block'
    botaoUndo.style.display = 'block'
  }
  debug = 0
  const cell = event.target;
  if (cell.textContent === "" && !gameEnded) {
    cell.innerHTML = `<p class="inDiv">${currentPlayer}</p>`;
    if (contram) {
      togglePlayer()
      maqPlay()
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
    totJogadasPartida += 1
    const chances = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (comb of chances) {
      const [a, b, c] = comb;
      const ja = cells[a];
      const jb = cells[b];
      const jc = cells[c];
      cellVazia = 0
      cellCurrent = 0
      cellEnemy = 0


      if (ja.textContent == '') {
        cellVazia += 1
        jogarAqui = ja

      }
      if (jb.textContent == '') {
        cellVazia += 1
        jogarAqui = jb

      }
      if (jc.textContent == '') {
        cellVazia += 1
        jogarAqui = jc

      }
      if (ja.textContent == currentPlayer) {
        cellCurrent += 1
      }
      if (jb.textContent == currentPlayer) {
        cellCurrent += 1
      }
      if (jc.textContent == currentPlayer) {
        cellCurrent += 1
      }

      togglePlayer()
      if (ja.textContent == currentPlayer) {
        cellEnemy += 1
      }
      if (jb.textContent == currentPlayer) {
        cellEnemy += 1
      }
      if (jc.textContent == currentPlayer) {
        cellEnemy += 1
      }
      togglePlayer()



      //inicio 1 jogada avaliações
      if (totJogadasPartida == 1) {
        togglePlayer()
        if (c4.textContent == currentPlayer) {
          //se vazio
          togglePlayer()
          while (jaJogado != true) {
            let possi = [c0, c2, c6, c8]
            let random = Math.floor(Math.random() * 4);
            let sorted = possi[random]
            if (sorted.innerHTML == '') {
              sorted.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
              ozes.push(sorted)
              jaJogado = true
            }
          }
          break

        } else {
          togglePlayer()
          c4.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c4)
          jaJogado = true
          break
        }
      } else {
        jaJogado = false
      }

      if (c4.textContent == currentEnemy && c5.textContent == currentEnemy && c7.textContent == currentEnemy && c8.textContent == currentEnemy) {

      }
      if (c0.textContent == currentEnemy && c1.textContent == currentEnemy && c3.textContent == currentEnemy && c4.textContent == currentEnemy) {
        if (c8.innerHTML == '') {
          c8.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          jaJogado = true
          ozes.push(c8)
          break
        }
      } else if (c1.textContent == currentEnemy && c2.textContent == currentEnemy && c4.textContent == currentEnemy && c5.textContent == currentEnemy) {
        if (c6.innerHTML == '') {
          c6.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          jaJogado = true
          ozes.push(c6)
          break
        }
      } else if (c3.textContent == currentEnemy && c4.textContent == currentEnemy && c6.textContent == currentEnemy && c7.textContent == currentEnemy) {
        if (c2.innerHTML == '') {
          c2.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          jaJogado = true
          ozes.push(c2)
          break
        }
      } else if (c4.textContent == currentEnemy && c5.textContent == currentEnemy && c7.textContent == currentEnemy && c8.textContent == currentEnemy) {
        if (c0.innerHTML == '') {
          c0.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          jaJogado = true
          ozes.push(c2)
          break
        }
      } else {
        jaJogado = false
      }
      console.log('aqui:', totJogadasPartida, c0.innerHTML, )
      if(totJogadasPartida==2 && c0.textContent== currentEnemy && c8.textContent == currentEnemy || totJogadasPartida==2 && c2.textContent == currentEnemy && c6.textContent == currentEnemy){
        while(true){
          let possi = [c1,c3,c5,c7]
          let random = Math.floor(Math.random() * 4);
          let sorted = possi[random]
            if (sorted.innerHTML == '') {
              sorted.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
              ozes.push(sorted)
              jaJogado = true
              break
            }
        }
        break
      }

      //inicio avaliações
      if (cellCurrent == 2 && cellVazia == 1) {
        if (jogarAqui.innerHTML == '') {
          jogarAqui.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          jaJogado = true
          ozes.push(jogarAqui)
          break
        }
      } else {
        jaJogado = false
      }
      if (cellEnemy == 2 && cellVazia == 1) {
        if (jogarAqui.innerHTML == '') {
          jogarAqui.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          jaJogado = true
          ozes.push(jogarAqui)
          break
        }
      } else {
        jaJogado = false
      }
      //TENTA NAS DUAS BORDAS DEPOIS NAS DUAS PERTO E DPS ALE
    }
    if (xHistoric.length != ozes.length && jaJogado == false && ozes.length + xHistoric.length <= 7) {
      jaJogado = true
      if (ozes[ozes.length - 1] == c0) {
        if (c2.innerHTML == '') {
          c2.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c2)
        } else if (c6.innerHTML == '') {
          c6.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c6)
        } else if (c1.innerHTML == '') {
          c1.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c1)
        } else if (c3.innerHTML == '') {
          c3.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c3)
        } else {
          while (true) {
            let random = Math.floor(Math.random() * 9)
            let poss = [c0, c1, c2, c3, c4, c5, c6, c7, c8]
            if (poss[random].innerHTML == '') {
              poss[random].innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
              ozes.push(poss[random])
              break
            }
          }
        }
      } else if (ozes[ozes.length - 1] == c2) {
        if (c0.innerHTML == '') {
          c0.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c0)
        } else if (c8.innerHTML == '') {
          c8.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c8)
        } else if (c1.innerHTML == '') {
          c1.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c1)
        } else if (c5.innerHTML == '') {
          c5.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c5)
        } else {
          while (true) {
            let random = Math.floor(Math.random() * 9)
            let poss = [c0, c1, c2, c3, c4, c5, c6, c7, c8]
            if (poss[random].innerHTML == '') {
              poss[random].innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
              ozes.push(poss[random])
              break
            }
          }
        }
      } else if (ozes[ozes.length - 1] == c6) {
        if (c8.innerHTML == '') {
          c8.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c8)
        } else if (c0.innerHTML == '') {
          c0.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c0)
        } else if (c7.innerHTML == '') {
          c7.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c7)
        } else if (c3.innerHTML == '') {
          c3.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c3)
        } else {
          while (true) {
            let random = Math.floor(Math.random() * 9)
            let poss = [c0, c1, c2, c3, c4, c5, c6, c7, c8]
            if (poss[random].innerHTML == '') {
              poss[random].innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
              ozes.push(poss[random])
              break
            }
          }
        }
      } else if (ozes[ozes.length - 1] == c8) {
        if (c2.innerHTML == '') {
          c2.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c2)
        } else if (c6.innerHTML == '') {
          c6.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c6)
        } else if (c7.innerHTML == '') {
          c7.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c7)
        } else if (c5.innerHTML == '') {
          c5.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c5)
        } else {
          while (true) {
            let random = Math.floor(Math.random() * 9)
            let poss = [c0, c1, c2, c3, c4, c5, c6, c7, c8]
            if (poss[random].innerHTML == '') {
              poss[random].innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
              ozes.push(poss[random])
              break
            }
          }
        }
      } else if (ozes[ozes.length - 1] == c1) {
        if (c0.innerHTML == '') {
          c0.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c0)
        } else if (c2.innerHTML == '') {
          c2.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c2)
        } else {
          while (true) {
            let random = Math.floor(Math.random() * 9)
            let poss = [c0, c1, c2, c3, c4, c5, c6, c7, c8]
            if (poss[random].innerHTML == '') {
              poss[random].innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
              ozes.push(poss[random])
              break
            }
          }
        }
      } else if (ozes[ozes.length - 1] == c3) {
        if (c0.innerHTML == '') {
          c0.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c0)
        } else if (c6.innerHTML == '') {
          c6.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c6)
        } else {
          while (true) {
            let random = Math.floor(Math.random() * 9)
            let poss = [c0, c1, c2, c3, c4, c5, c6, c7, c8]
            if (poss[random].innerHTML == '') {
              poss[random].innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
              ozes.push(poss[random])
              break
            }
          }
        }
      } else if (ozes[ozes.length - 1] == c5) {
        if (c2.innerHTML == '') {
          c2.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c2)
        } else if (c8.innerHTML == '') {
          c8.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c8)
        } else {
          while (true) {
            let random = Math.floor(Math.random() * 9)
            let poss = [c0, c1, c2, c3, c4, c5, c6, c7, c8]
            if (poss[random].innerHTML == '') {
              poss[random].innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
              ozes.push(poss[random])
              break
            }
          }
        }
      } else if (ozes[ozes.length - 1] == c7) {
        if (c8.innerHTML == '') {
          c8.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c8)
        } else if (c6.innerHTML == '') {
          c6.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
          ozes.push(c6)
        } else {
          while (true) {
            let random = Math.floor(Math.random() * 9)
            let poss = [c0, c1, c2, c3, c4, c5, c6, c7, c8]
            if (poss[random].innerHTML == '') {
              poss[random].innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
              ozes.push(poss[random])
              break
            }
          }
        }
      } else if (ozes[ozes.length - 1] == c4 && xHistoric.length == 2) {
        if (c1.textContent == currentEnemy && c3.textContent == currentEnemy || c1.textContent == currentEnemy && c5.textContent == currentEnemy || c1.textContent == currentEnemy && c7.textContent == currentEnemy || c3.textContent == currentEnemy && c5.textContent == currentEnemy || c3.textContent == currentEnemy && c7.textContent == currentEnemy || c5.textContent == currentEnemy && c7.textContent == currentEnemy) {
          if (c1.textContent == currentEnemy && c3.textContent == currentEnemy) {
            c0.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
            ozes.push(c0)
          } else if (c1.textContent == currentEnemy && c5.textContent == currentEnemy) {
            c2.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
            ozes.push(c2)
          } else if (c1.textContent == currentEnemy && c7.textContent == currentEnemy) {
            while (true) {
              let random = Math.floor(Math.random() * 4)
              let poss = [c0, c2, c6, c8]
              if (poss[random].textContent == "") {
                poss[random].innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
                ozes.push(poss[random])
                break
              }
            }
          } else if (c3.textContent == currentEnemy && c5.textContent == currentEnemy) {
            while (true) {
              let random = Math.floor(Math.random() * 4)
              let poss = [c0, c2, c6, c8]
              if (poss[random].textContent == "") {
                poss[random].innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
                ozes.push(poss[random])
                break
              }
            }
          } else if (c3.textContent == currentEnemy && c7.textContent == currentEnemy) {
            c6.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
            ozes.push(c6)
          } else if (c5.textContent == currentEnemy && c7.textContent == currentEnemy) {
            c8.innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
            ozes.push(c8)
          } else {
            console.log('erro')
          }
        }
      } else {
        while (true) {
          let random = Math.floor(Math.random() * 9)
          let poss = [c0, c1, c2, c3, c4, c5, c6, c7, c8]
          if (poss[random].innerHTML == '') {
            poss[random].innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
            ozes.push(poss[random])
            break
          }
        }
      }
    }else{
      jaJogado = false
    }
    console.log(xHistoric.length,ozes.length, jaJogado)
    if(xHistoric.length != ozes.length && ozes.length + xHistoric.length <= 7){
      console.log('entrou')
      if(c0.textContent == '' || c2.textContent == '' || c6.textContent == '' || c8.textContent == ''){
        while (true) {
          let random = Math.floor(Math.random() * 4)
          let poss = [c0, c2, c6, c8]
          if (poss[random].innerHTML == '') {
            poss[random].innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
            ozes.push(poss[random])
            break
          }
        }
      }else if(c1.textContent == '' || c3.textContent== '' || c5.textContent== '' || c7.textContent == ''){
        while (true) {
          let random = Math.floor(Math.random() * 4)
          let poss = [c0, c2, c6, c8]
          if (poss[random].innerHTML == '') {
            poss[random].innerHTML = `<p class="inDiv2">${currentPlayer}</p>`
            ozes.push(poss[random])
            break
          }
        }
      }
    }
    checkGameStatus()
    togglePlayer()
  }
}
function togglePlayer() {
  if (currentPlayer == 'X') {
    currentPlayer = 'O'
    currentEnemy = 'X'
  } else if (currentPlayer == 'O') {
    currentPlayer = 'X'
    currentEnemy = 'O'
  } else if (currentPlayer == jogador1) {
    currentPlayer = jogador2
    currentEnemy = jogador1
  } else {
    currentPlayer = jogador1
    currentEnemy = jogador2
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
    }
  }
  botao.addEventListener('click', () => {
    while (debug < 1) {

      cellVazia = 0
      cellCurrent = 0
      cellEnemy = 0
      jogarAqui = false
      jaJogado = false
      totJogadasPartida = 0
      ozes = []
      xHistoric = []

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