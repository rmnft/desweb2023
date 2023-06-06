function aumenta() {
  const meuSpan = document.getElementById("meu_span");
  let meuValor = parseInt(meuSpan.innerText);
  meuValor++;
  meuSpan.innerText = meuValor;

  if (meuValor === 5) mudaDivs("red");
  if (meuValor === 10) mudaDivs("blue");
  if (meuValor === 15) mudaDivs("green");
  if (meuValor === 20) mudaDivs("yellow");
  if (meuValor === 25) mudaDivs("pink");
  if (meuValor === 30) mudaDivs("purple");
}

const mudaDivs = (cor) => {
  const divs = document.querySelectorAll(".minha_div");

  divs.forEach((elemento) => {
    elemento.style.backgroundColor = cor;
    elemento.style.height = "3em";
    elemento.style.border = "solid black 1em";
  });
};

document.getElementById("meu_botao").onclick = aumenta;
