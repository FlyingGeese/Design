let menuBtn = document.querySelector('#menuBtn')

zMenu = () => {
  let menu = document.querySelector('#zMenu')
  menu.classList.remove('hidden')
  menu.classList.add('onScreen')
}

menuBtn.addEventListener('click', zMenu)
