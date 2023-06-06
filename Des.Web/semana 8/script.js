const div_colorida = document.getElementById("colorida");
const input_cor = document.getElementById("input_cor");
const div_imagens = document.getElementById("imagens");
const meu_primeiro_array = [1, 2, 3, 4, "casa"];
let minhas_imagens = [
  {
    nome: "numero1",
    valor: 1,
    descricao: "numero 1 com fundo amarelo",
  },
  {
    nome: "numero2",
    valor: 2,
    descricao: "numero 2 com fundo vermelho",
  },
  {
    nome: "numero3",
    valor: 3,
    descricao: "numero 3 vermelho em 3d",
  },
];

div_colorida.style.height = "1em";
div_colorida.style.backgroundColor = "black";

function mudar_cor(e) {
  div_colorida.style.backgroundColor = e.target.value;
  console.log(e.target.value);
}

input_cor.onchange = mudar_cor;

/* imprimir array */
let contador = 0;
while (contador < meu_primeiro_array.length) {
  console.log(meu_primeiro_array[contador]);
  contador++;
}

for (let i = 0; i < meu_primeiro_array.length; i++) {
  console.log("com for", meu_primeiro_array[i]);
}

meu_primeiro_array.forEach((ele, indice) => {
  console.log(ele, indice);
});

for (const ele of meu_primeiro_array) {
  console.log("for of", ele);
}

console.log(
  "map",
  meu_primeiro_array.map((e) => e + 1)
);

/*minhas_imagens = minhas_imagens.map(
    (ele) =>{
        return ele.caminho = 'imagem/numero_' + ele.valor + '.png';

    }
);
minhas_imagens.forEach(
    (ele) =>{
        div_imagens.innerHTML +="<img src=" + ele + ">";
    }
);*/

minhas_imagens.forEach((ele) => {
  ele.caminho = "imagem/numero_" + ele.valor + ".png";
});
minhas_imagens.forEach((ele) => {
  div_imagens.innerHTML += "<img width = 100 src=" + ele.caminho + ">";
});
