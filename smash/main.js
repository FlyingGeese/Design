let character = document.querySelector('#character')
let readyBanner = document.querySelector('#ready-banner')

console.log(character)

readyUp = () => {
  readyBanner.classList.remove('hidden')
  document.body.classList.add('overlay-dark')
  console.log('Ready to Fight')
}


character.addEventListener('click', readyUp)