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
        <h3>O número secreto era </h3>
    `;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}
