let menuBtn = document.querySelector('#menuBtn')

zMenu = () => {
  let menu = document.querySelector('#zMenu')
  menu.classList.remove('hidden')
}

menuBtn.addEventListener('click', zMenu)
