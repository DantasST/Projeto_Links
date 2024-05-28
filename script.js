function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar tag
  const img = document.querySelector("#profile img")

  //substituir tag
  if (html.classList.contains('light')){
    img.setAttribute('src', './assets/suelen1.png')
  } else {
    img.setAttribute('src', './assets/suelen1.png')
  }


  //se lightmode adicionar nova

  //se darkmode manter



}



/* trocar imagem com if
if(html.classList.contains('light')){
    html.classList.remove('light')
  } else {
  html.classList.add('light')
}*/