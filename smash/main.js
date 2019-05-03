let readyBtn = document.querySelector('#readyBtn')
let readyBanner = document.querySelector('#ready-banner')

console.log(readyBtn)

readyUp = () => {
  readyBanner.classList.remove('hidden')
  console.log('Ready to Fight')
}


readyBtn.addEventListener('click', readyUp)