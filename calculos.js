const botaoComecar = document.getElementById('btn_ir');

botaoComecar.addEventListener('click', () => {
  document.getElementById('description').style.display = 'none';
  setTimeout(() => {
    document.getElementById('divTable').style.display = 'block';
  }, 1000);
});
/* Desenvolva aqui a rotina */
lerLocalStorage();

//CAPTURANDO OS INPUTS DE RECEITA
let valorBase = document.getElementById('valor_base');
let valorTransporte = document.getElementById('valor_transporte');
let valorAlimentacao = document.getElementById('valor_alimentacao');

//TOTAL receitas
let valorReceita = document.getElementById('valor_receita');

//CAPTURANDO OS INPUTS DE DESCONTOS

let valorAutomovel = document.getElementById('valor_automovel');
let faltas = document.getElementById('faltas');

//TOTAL DESCONTOS
let valorDesconto = document.getElementById('valor_descontos');

// input total
let valorTotal = document.getElementById('valor_total');

//Botão de aplicação
let botaoCalcular = document.getElementById('btn_calcular');

let listaInputsApp = document.getElementsByTagName('input');

//EVENTOS
botaoCalcular.addEventListener('click', calcular);

for (const elemento of listaInputsApp) {
  // loop necessário,pois TagName tras todos os inputs do App (OBS forEach da erro pq Não sei kkk)
  elemento.addEventListener('blur', calcular);
}

//Funções necessárias

function calcular() {
  //calculo do total de receitas
  let totalReceitas =
    parseFloat(valorBase.value) +
    parseFloat(valorTransporte.value) +
    parseFloat(valorAlimentacao.value);
  //manipulação do input total Receitas(insere novo valor)
  valorReceita.value = totalReceitas;

  let totalDescontos = parseFloat(valorAutomovel.value) + parseFloat(faltas.value);

  valorDesconto.value = totalDescontos;

  valorTotal.value = totalReceitas - totalDescontos;

  salvarLocalStorage();
}

function salvarLocalStorage() {
  // alert('SalvarLocalStorage');
  //localStorage- guarda Chave (identificação) - Valor (conteúdo)
  let inputsCalculados = document.getElementsByTagName('input');
  for (const input of inputsCalculados) {
    //  utilizar o atributo id como chave no localStorage
    // utilizar o value como valor a ser armazenado no localstorage
    console.log(input);
    //setItem -> cria os registros no localStorage
    localStorage.setItem(input.id, input.value);
  }
}

function lerLocalStorage() {
  let inputsCalculados = document.getElementsByTagName('input');
  for (const input of inputsCalculados) {
    //para ler getItem -> buscamos pela CHAVE (identificação)
    console.log(input);
    let valorGetItemLocalStorage = localStorage.getItem(input.id);
    input.value = valorGetItemLocalStorage;
  }
}
