pPadrao.addEventListener('click', () => {
  body.style.backgroundColor = '#d2b48c'
  body.style.backgroundImage = ''
  pBlack('#d2b48c', 'black')
  counter = 0
})
pPreto.addEventListener('click', () => {
  body.style.backgroundColor = 'black'
  body.style.backgroundImage = ''
  cells.forEach(cell => {
    cell.style.border = '2px solid rgb(146, 146, 146)'
    cell.style.backgroundColor = 'rgb(71, 71, 71)'
    cell.style.color = 'black'
  })
  pWhite()
})
pBranco.addEventListener('click', () => {
  body.style.backgroundColor = 'white'
  body.style.backgroundImage = ''
  pBlack('white', 'white')
  cells.forEach(cell => {
    cell.style.color = 'black'
  })
})
pVermelho.addEventListener('click', () => {
  body.style.backgroundColor = 'rgb(187, 51, 51)'
  body.style.backgroundImage = ''
  pBlack('white', 'white')
  cells.forEach(cell => {
    cell.style.backgroundColor = 'rgb(255, 65, 65)'
  })
})
pAzul.addEventListener('click', () => {
  pBlack('white', 'white')
  body.style.backgroundImage = 'linear-gradient(to bottom, rgb(78, 39, 255), rgb(63, 22, 139))'
  body.style.backgroundColor = ''
  cells.forEach(cell => {
    cell.style.backgroundColor = 'rgb(78, 39, 255)'
  })
})
function pWhite() {
  moreIcon.style.color = 'white'
  lessIcon.style.color = 'white'
  h1a.style.color = 'white'
  time.style.color = 'white'
  resultado.style.color = 'white'
}
function pBlack(corBack, corLetras) {
  moreIcon.style.color = 'black'
  lessIcon.style.color = 'black'
  h1a.style.color = 'black'
  time.style.color = 'black'
  resultado.style.color = 'black'
  cells.forEach(cell => {
    cell.style.border = '2px solid black'
    cell.style.color = corLetras
    cell.style.backgroundColor = corBack
  })
}

sPadrao.addEventListener('click', () => {
  divConfig.style.backgroundColor = 'rgb(255, 134, 63)'
  divConfig.style.border = '5px solid rgb(173, 92, 44)'
  divConfig.style.color = 'black'
  botao.style.backgroundColor = 'rgb(255, 173, 125)'
  botao.style.border = '6px solid rgb(109, 27, 27)'
  botao.style.color = 'black'
  botaoUndo.style.backgroundColor = 'rgb(255, 173, 125)'
  botaoUndo.style.border = '6px solid rgb(109, 27, 27)'
  botaoUndo.style.color = 'black'
  infos.style.backgroundColor = 'rgb(255, 134, 63)'
  infos.style.border = '5px solid rgb(173, 92, 44)'
  infos.style.color = 'black'
  reiniciar.style.backgroundColor = 'rgb(255, 173, 125)'
  reiniciar.style.border = '6px solid rgb(109, 27, 27)'
  reiniciar.style.color = 'black'

  inputX.style.backgroundColor = '#ffe7c8'
  inputX.style.border = '6px solid #8a683c'
  inputX.style.color = 'black'
  inputO.style.backgroundColor = '#ffe7c8'
  inputO.style.border = '6px solid #8a683c'
  inputO.style.color = 'black'
  botaoXO.style.backgroundColor = '#ffe7c8'
  botaoXO.style.border = '6px solid #8a683c'
  botaoXO.style.color = 'black'
  botaoMqn.style.backgroundColor = 'rgb(255, 173, 125)'
  botaoMqn.style.border = '6px solid rgb(109, 27, 27)'
  botaoMqn.style.color = 'black'
  botaoP.style.backgroundColor = 'rgb(255, 173, 125)'
  botaoP.style.border = '6px solid rgb(109, 27, 27)'
  botaoP.style.color = 'black'
  botaoMqnMenu.style.backgroundColor = 'rgb(255, 173, 125)'
  botaoMqnMenu.style.border = '6px solid rgb(109, 27, 27)'
  botaoMqnMenu.style.color = 'black'
  botaoPMenu.style.backgroundColor = 'rgb(255, 173, 125)'
  botaoPMenu.style.border = '6px solid rgb(109, 27, 27)'
  botaoPMenu.style.color = 'black'
})

sPreto.addEventListener('click', () => {
  divConfig.style.backgroundColor = 'black'
  divConfig.style.border = '5px solid rgb(43, 43, 43)'
  divConfig.style.color = 'white'
  botao.style.backgroundColor = 'black'
  botao.style.border = '6px solid rgb(43, 43, 43)'
  botao.style.color = 'white'
  botaoUndo.style.backgroundColor = 'black'
  botaoUndo.style.border = '6px solid rgb(43, 43, 43)'
  botaoUndo.style.color = 'white'
  infos.style.backgroundColor = 'black'
  infos.style.border = '5px solid rgb(43, 43, 43)'
  infos.style.color = 'white'
  reiniciar.style.backgroundColor = 'black'
  reiniciar.style.border = '6px solid rgb(43, 43, 43)'
  reiniciar.style.color = 'white'

  inputX.style.backgroundColor = 'black'
  inputX.style.border = '6px solid rgb(43, 43, 43)'
  inputX.style.color = 'white'
  inputO.style.backgroundColor = 'black'
  inputO.style.border = '6px solid rgb(43, 43, 43)'
  inputO.style.color = 'white'
  botaoXO.style.backgroundColor = 'black'
  botaoXO.style.border = '6px solid rgb(43, 43, 43)'
  botaoXO.style.color = 'white'
  botaoMqn.style.backgroundColor = 'black'
  botaoMqn.style.border = '6px solid rgb(43, 43, 43)'
  botaoMqn.style.color = 'white'
  botaoP.style.backgroundColor = 'black'
  botaoP.style.border = '6px solid rgb(43, 43, 43)'
  botaoP.style.color = 'white'
  botaoMqnMenu.style.backgroundColor = 'black'
  botaoMqnMenu.style.border = '6px solid rgb(43, 43, 43)'
  botaoMqnMenu.style.color = 'white'
  botaoPMenu.style.backgroundColor = 'black'
  botaoPMenu.style.border = '6px solid rgb(43, 43, 43)'
  botaoPMenu.style.color = 'white'
})
sBranco.addEventListener('click', () => {
  divConfig.style.backgroundColor = 'white'
  divConfig.style.border = '5px solid rgb(43, 43, 43)'
  divConfig.style.color = 'black'
  botao.style.backgroundColor = 'white'
  botao.style.border = '6px solid rgb(43, 43, 43)'
  botao.style.color = 'black'
  botaoUndo.style.backgroundColor = 'white'
  botaoUndo.style.border = '6px solid rgb(43, 43, 43)'
  botaoUndo.style.color = 'black'
  infos.style.backgroundColor = 'white'
  infos.style.border = '5px solid rgb(43, 43, 43)'
  infos.style.color = 'black'
  reiniciar.style.backgroundColor = 'white'
  reiniciar.style.border = '6px solid rgb(43, 43, 43)'
  reiniciar.style.color = 'black'

  inputX.style.backgroundColor = 'white'
  inputX.style.border = '6px solid rgb(43, 43, 43)'
  inputX.style.color = 'black'
  inputO.style.backgroundColor = 'white'
  inputO.style.border = '6px solid rgb(43, 43, 43)'
  inputO.style.color = 'black'
  botaoXO.style.backgroundColor = 'white'
  botaoXO.style.border = '6px solid rgb(43, 43, 43)'
  botaoXO.style.color = 'black'
  botaoMqn.style.backgroundColor = 'white'
  botaoMqn.style.border = '6px solid rgb(43, 43, 43)'
  botaoMqn.style.color = 'black'
  botaoP.style.backgroundColor = 'white'
  botaoP.style.border = '6px solid rgb(43, 43, 43)'
  botaoP.style.color = 'black'
  botaoMqnMenu.style.backgroundColor = 'white'
  botaoMqnMenu.style.border = '6px solid rgb(43, 43, 43)'
  botaoMqnMenu.style.color = 'black'
  botaoPMenu.style.backgroundColor = 'white'
  botaoPMenu.style.border = '6px solid rgb(43, 43, 43)'
  botaoPMenu.style.color = 'black'
})
sVermelho.addEventListener('click', () => {
  divConfig.style.backgroundColor = 'rgb(255, 75, 75)'
  divConfig.style.border = '5px solid rgb(126, 45, 45)'
  divConfig.style.color = 'black'
  botao.style.backgroundColor = 'rgb(255, 84, 84)'
  botao.style.border = '6px solid rgb(94, 0, 0)'
  botao.style.color = 'black'
  botaoUndo.style.backgroundColor = 'rgb(255, 84, 84)'
  botaoUndo.style.border = '6px solid rgb(94, 0, 0)'
  botaoUndo.style.color = 'black'
  infos.style.backgroundColor = 'rgb(255, 75, 75)'
  infos.style.border = '5px solid rgb(126, 45, 45)'
  infos.style.color = 'black'
  reiniciar.style.backgroundColor = 'rgb(255, 84, 84)'
  reiniciar.style.border = '6px solid rgb(94, 0, 0)'
  reiniciar.style.color = 'black'

  inputX.style.backgroundColor = 'rgb(255, 84, 84)'
  inputX.style.border = '6px solid rgb(94, 0, 0)'
  inputX.style.color = 'black'
  inputO.style.backgroundColor = 'rgb(255, 84, 84)'
  inputO.style.border = '6px solid rgb(94, 0, 0)'
  inputO.style.color = 'black'
  botaoXO.style.backgroundColor = 'rgb(255, 84, 84)'
  botaoXO.style.border = '6px solid rgb(94, 0, 0)'
  botaoXO.style.color = 'black'
  botaoMqn.style.backgroundColor = 'rgb(255, 84, 84)'
  botaoMqn.style.border = '6px solid rgb(94, 0, 0)'
  botaoMqn.style.color = 'black'
  botaoP.style.backgroundColor = 'rgb(255, 84, 84)'
  botaoP.style.border = '6px solid rgb(94, 0, 0)'
  botaoP.style.color = 'black'
  botaoMqnMenu.style.backgroundColor = 'rgb(255, 84, 84)'
  botaoMqnMenu.style.border = '6px solid rgb(94, 0, 0)'
  botaoMqnMenu.style.color = 'black'
  botaoPMenu.style.backgroundColor = 'rgb(255, 84, 84)'
  botaoPMenu.style.border = '6px solid rgb(94, 0, 0)'
  botaoPMenu.style.color = 'black'
})
sAzul.addEventListener('click', () => {
  divConfig.style.backgroundColor = 'rgb(98, 62, 255)'
  divConfig.style.border = '5px solid rgb(66, 42, 175)'
  divConfig.style.color = 'white'
  botao.style.backgroundColor = 'rgb(102, 77, 214)'
  botao.style.border = '6px solid rgb(12, 0, 73)'
  botao.style.color = 'white'
  botaoUndo.style.backgroundColor = 'rgb(102, 77, 214)'
  botaoUndo.style.border = '6px solid rgb(12, 0, 73)'
  botaoUndo.style.color = 'white'
  infos.style.backgroundColor = 'rgb(98, 62, 255)'
  infos.style.border = '5px solid rgb(66, 42, 175)'
  infos.style.color = 'white'
  reiniciar.style.backgroundColor = 'rgb(102, 77, 214)'
  reiniciar.style.border = '6px solid rgb(12, 0, 73)'
  reiniciar.style.color = 'white'

  inputX.style.backgroundColor = 'rgb(102, 77, 214)'
  inputX.style.border = '6px solid rgb(12, 0, 73)'
  inputX.style.color = 'white'
  inputO.style.backgroundColor = 'rgb(102, 77, 214)'
  inputO.style.border = '6px solid rgb(12, 0, 73)'
  inputO.style.color = 'white'
  botaoXO.style.backgroundColor = 'rgb(102, 77, 214)'
  botaoXO.style.border = '6px solid rgb(12, 0, 73)'
  botaoXO.style.color = 'white'
  botaoMqn.style.backgroundColor = 'rgb(102, 77, 214)'
  botaoMqn.style.border = '6px solid rgb(12, 0, 73)'
  botaoMqn.style.color = 'white'
  botaoP.style.backgroundColor = 'rgb(102, 77, 214)'
  botaoP.style.border = '6px solid rgb(12, 0, 73)'
  botaoP.style.color = 'white'
  botaoMqnMenu.style.backgroundColor = 'rgb(102, 77, 214)'
  botaoMqnMenu.style.border = '6px solid rgb(12, 0, 73)'
  botaoMqnMenu.style.color = 'white'
  botaoPMenu.style.backgroundColor = 'rgb(102, 77, 214)'
  botaoPMenu.style.border = '6px solid rgb(12, 0, 73)'
  botaoPMenu.style.color = 'white'
})

botaoXO.addEventListener('click', () => {
  if (inputO.value != '' && inputO.value != null && inputO.value != undefined && inputX.value != '' && inputX.value != null && inputX.value != undefined) {
    if (inputO.value != inputX.value) {
      jogador1 = inputX.value
      jogador2 = inputO.value
      currentPlayer = jogador1
    } else {
      botaoXO.style.display = 'none'
      pError1.style.display = 'block'
      pError1.style.animation = 'errorAnim 8s ease 1 forwards'
      divConfig.style.height = '660px'
      divpError.style.display='block' 
      divpError.style.height = '100px'
      botaoXO.style.animation = 'enviaInfosLoad 1s ease-in-out 1 forwards'
      setTimeout(()=>{
        botaoXO.style.display = 'block' 
        divpError.style.display='none'
      },9000)
    }
  } else {
    botaoXO.style.display = 'none'
    pError1.style.display = 'block'
    pError1.style.animation = 'errorAnim 8s ease 1 forwards'
    divConfig.style.height = '660px'
    divpError.style.display='block' 
    divpError.style.height = '100px'
    botaoXO.style.animation = 'enviaInfosLoad 1s ease-in-out 1 forwards'
      setTimeout(()=>{
        botaoXO.style.display = 'block'
        divpError.style.display='none' 
      },9000)
    }
  }
)


inputX.addEventListener('focus', () => {
  if (botaoXO.style.display == 'none') {
    botaoXO.style.animation = 'enviaInfosLoad 2s ease-in-out 1 forwards'
    botaoXO.style.display = 'block'
    pError1.style.display = 'none'
    pError1.style.animation = ''
    divConfig.style.height = '660px'
    divpError.style.display='none'
  }
})
inputO.addEventListener('focus', () => {
  if (botaoXO.style.display == 'none') {
    botaoXO.style.animation = 'enviaInfosLoad 1s ease-in-out 1 forwards'
    botaoXO.style.display = 'block'
    pError1.style.display = 'none'
    pError1.style.animation = ''
    divConfig.style.height = '660px'
    divpError.style.display='none'
  }
})