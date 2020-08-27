// const card = document.querySelector(".card")
// const img = document.querySelector("img")

// img.onclick = () => {
//   const corazon = document.querySelector(".fa.fa-heart")
//   corazon.classList.add("rojo")
// }

// card.onclick = (e) => {
//   console.log(e)
// }

// card.ondblclick = () => {
//     console.log("Hiciste doble clic.")
//   }


// window.onkeydown = (e) => {
//     console.log(e)
//     console.log(e.keyCode)
//     console.log("Hiciste key down.")
//     if (e.keyCode === 13) {
//         alert("apretaste enter")
//       }
// }

// window.onkeypress = () => {
//     console.log("Hiciste key press.")
// }

// window.onkeyup = () => {
//     console.log("Hiciste key up.")
// }

// window.onresize = () => {
//     console.log("Cambiaste el tamaño de la pantalla.")
// }

// img.onmouseenter = () => {
//     console.log("Entra mouse.")
// }

// img.onmouseleave = () => {
//     console.log("Sale mouse.")
// }


const img = document.querySelector("img")

img.ondblclick = () => {
    const corazon = document.querySelector(".fa.fa-heart")
    corazon.classList.add("rojo")
}
