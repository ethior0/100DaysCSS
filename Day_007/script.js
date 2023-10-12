function showMenu() {
  let janela1 = document.querySelector('.janela1');
  let janela2 = document.querySelector('.janela2');

  if (janela1.classList.contains('ativo')) {
    janela1.classList.remove('ativo');
    janela2.classList.remove('ativo2');

  } else {
    janela1.classList.add('ativo');
    janela2.classList.add('ativo2');
  }
}

function showSearch() {
  let pesquisa = document.querySelector('.pesquisa');

  if (pesquisa.classList.contains('ativoP')) {
    pesquisa.classList.remove('ativoP');
  } else {
    pesquisa.classList.add('ativoP');
  }
}