function toggleMode() {
  const html = document.documentElement //const - colocando em uma variável
  html.classList.toggle("light") //fazendo a troca das classes

  // pegar tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
<<<<<<< HEAD
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito, usando óculos e jaqueta preta, sem barba e fundo azul"
    )
=======
    img.setAttribute("alt", "Foto de Mayk Brito, usando óculos e jaqueta preta, sem barba e fundo azul")
>>>>>>> 805ae9b0b42aac68e5f1baae8fe018126dac5040
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camixa preta, barba e fundo amarelo"
    )
  }
}
