function verificaSeChutePossuiValorValido(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += "<div>Valor inválido</div>";
    return;
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `Valor inválido: fale um número entre ${menorValor} e ${maiorValor}`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numero}</h3>
    `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
  } else if (numero < numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}
