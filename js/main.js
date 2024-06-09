function converterTemperatura() {
  const temperature = parseFloat(document.getElementById('temperatura').value);
  const fromScale = document.getElementById('deEscala').value;
  const toScale = document.getElementById('paraEscala').value;
  let result;

  if (isNaN(temperature)) {
      document.getElementById('resultadoTemp').innerText = "Por favor, insira um valor válido.";
      document.getElementById('resultadoTemp').classList.remove('hidden');
      return;
  }

  if (fromScale === toScale) {
      result = `${temperature}° ${fromScale.charAt(0).toUpperCase() + fromScale.slice(1)} é igual a ${temperature}° ${toScale.charAt(0).toUpperCase() + toScale.slice(1)}.`;
  } else {
      switch (fromScale) {
          case 'celsius':
              if (toScale === 'fahrenheit') {
                  result = (temperature * 9/5) + 32;
              } else if (toScale === 'kelvin') {
                  result = temperature + 273.15;
              }
              break;
          case 'fahrenheit':
              if (toScale === 'celsius') {
                  result = (temperature - 32) * 5/9;
              } else if (toScale === 'kelvin') {
                  result = (temperature - 32) * 5/9 + 273.15;
              }
              break;
          case 'kelvin':
              if (toScale === 'celsius') {
                  result = temperature - 273.15;
              } else if (toScale === 'fahrenheit') {
                  result = (temperature - 273.15) * 9/5 + 32;
              }
              break;
      }
      result = `${temperature}° ${fromScale.charAt(0).toUpperCase() + fromScale.slice(1)} é igual a ${result.toFixed(2)}° ${toScale.charAt(0).toUpperCase() + toScale.slice(1)}.`;
  }

  document.getElementById('resultadoTemp').innerText = result;
  document.getElementById('resultadoTemp').classList.remove('hidden');
}

function calcularForca() {
  var massa = document.getElementById("massa").value;
  var aceleracao = document.getElementById("aceleracao").value;

  massa = parseFloat(massa);
  aceleracao = parseFloat(aceleracao);

  if (isNaN(massa) || isNaN(aceleracao)) {
      document.getElementById("resultadoDin").innerText = "Por favor, insira valores válidos.";
      document.getElementById("resultadoDin").classList.remove('hidden');
      return;
  }

  var forca = massa * aceleracao;
  document.getElementById("resultadoDin").innerText = "A força é de " + forca.toFixed(2) + " N.";
  document.getElementById("resultadoDin").classList.remove('hidden');
}

function calcularVelocidadeMedia() {
  var deslocamento = document.getElementById("deslocamento").value;
  var tempo = document.getElementById("tempo").value;

  deslocamento = parseFloat(deslocamento);
  tempo = parseFloat(tempo);

  if (isNaN(deslocamento) || isNaN(tempo) || tempo <= 0) {
      document.getElementById("resultadoCine").innerText = "Por favor, insira valores válidos.";
      document.getElementById("resultadoCine").classList.remove('hidden');
      return;
  }

  var velocidadeMedia = deslocamento / tempo;
  document.getElementById("resultadoCine").innerText = "A velocidade média é de " + velocidadeMedia.toFixed(2) + " m/s.";
  document.getElementById("resultadoCine").classList.remove('hidden');
}
