pPadrao.addEventListener('click', () => {
  body.style.backgroundColor = '#d2b48c'
  pBlack('#d2b48c', 'black')
  counter = 0
})
pPreto.addEventListener('click', () => {
  body.style.backgroundColor = 'black'
  cells.forEach(cell => {
    cell.style.border = '2px solid rgb(146, 146, 146)'
    cell.style.backgroundColor = 'rgb(71, 71, 71)'
    cell.style.color = 'black'
  })
  pWhite()
})
pBranco.addEventListener('click', () => {
  body.style.backgroundColor = 'white'
  pBlack('white', 'white')
  cells.forEach(cell => {
    cell.style.color = 'black'
  })
})
pVermelho.addEventListener('click', () => {
  body.style.backgroundColor = 'rgb(187, 51, 51)'
  pBlack('white', 'white')
  cells.forEach(cell => {
    cell.style.backgroundColor = 'rgb(255, 65, 65)'
  })
})
pAzul.addEventListener('click', () => {
  pBlack('white', 'white')
  body.style.backgroundColor = 'rgb(78, 39, 255)'
  cells.forEach(cell => {
    cell.style.backgroundColor = 'rgb(78, 39, 255)'
    cell.classList.remove('cell')
    cell.classList.add('cell2')
    console.log('a')
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
})
sAzul.addEventListener('click', () => {
  divConfig.style.backgroundColor = 'rgb(98, 62, 255)'
  divConfig.style.border = '5px solid rgb(66, 42, 175)'
  divConfig.style.color = 'black'
  botao.style.backgroundColor = 'rgb(102, 77, 214)'
  botao.style.border = '6px solid rgb(12, 0, 73)'
  botao.style.color = 'black'
  botaoUndo.style.backgroundColor = 'rgb(102, 77, 214)'
  botaoUndo.style.border = '6px solid rgb(12, 0, 73)'
  botaoUndo.style.color = 'black'
  infos.style.backgroundColor = 'rgb(98, 62, 255)'
  infos.style.border = '5px solid rgb(66, 42, 175)'
  infos.style.color = 'black'
  reiniciar.style.backgroundColor = 'rgb(102, 77, 214)'
  reiniciar.style.border = '6px solid rgb(12, 0, 73)'
  reiniciar.style.color = 'black'
})