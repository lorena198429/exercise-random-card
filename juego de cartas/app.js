const c = console.log
const d = document

window.addEventListener(`load`, e => {
  let random4 = Math.floor(Math.random() * 4) 
  let random10 = Math.floor(Math.random() * 10) + 1

  let arraySimbol = [
    `&spades;`,
    `&loz;`,
    `&clubs;`,
    `&hearts;`
  ]

  let innerNumber = d.querySelector(`#innerNumber`)
  let innerSimbol = d.querySelectorAll(`.innerSimbol`)

  innerSimbol.forEach(el => {
    el.innerHTML = arraySimbol[random4]
  })
  innerNumber.textContent = random10
})