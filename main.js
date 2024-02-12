//variaveis

const img = document.querySelector('.imgTry')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const reset = document.querySelector('.btnReset')
const motivation = document.querySelector('.motivation')
let phrases = [
    'Não é porque dias ruins vieram, que amanhã vai melhorar',
    'Toda pika se torna invisível a partir do momento que entra em sua bunda',
    'Quem tem medo de puta é pai de familia',
    'Sabe oque tua ex deve estar fazendo agora? MAMANDO, a pika de outro cara',
    'Por acaso alguem com depressão tem esse biceps aki?'
]
let random = phrases[Math.floor(Math.random()*phrases.length)]
let selector = document.querySelector('.motivation').innerText = `${random}`

// eventos
img.addEventListener('click', toggleScreen)
reset.addEventListener('click', resetClick)

// função

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function resetClick() {
  toggleScreen()
  random = phrases[Math.floor(Math.random()*phrases.length)]
}

