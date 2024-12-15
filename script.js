function toggleMode() {
  // alert("Hello World");
  const html = document.documentElement
  html.classList.toggle('light')
  // if(html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // pegar a tag img
  const img = document.querySelector('#profile img');

  // substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute('alt', 'Foto de Alex sorrindo encostado numa parede grafit');
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute('alt', 'Foto de Alex sorrindo com uma camisa social branca, barba e de fundo uma janela');
  }
}