let tentativas = 3;
let numeroSecreto = Math.floor(Math.random() * 100) + 1; 

function verificarPalpite() {
  const palpite = parseInt(document.getElementById('palpite').value);
  const mensagem = document.getElementById('mensagem');
  tentativas--;

  if (palpite === numeroSecreto) {
    mensagem.textContent = `🎉 Parabéns! Você acertou o número secreto ${numeroSecreto}!`;
    mensagem.style.color = "#00ff88";
  } else if (tentativas > 0) {
    if (palpite < numeroSecreto) {
      mensagem.textContent = `❌ Errou! O número secreto é maior. Você ainda tem ${tentativas} tentativa(s).`;
    } else {
      mensagem.textContent = `❌ Errou! O número secreto é menor. Você ainda tem ${tentativas} tentativa(s).`;
    }
    mensagem.style.color = "#ffcc00";
  } else {
    mensagem.textContent = `💀 Fim de jogo! O número secreto era ${numeroSecreto}.`;
    mensagem.style.color = "#ff0000";
  }
}