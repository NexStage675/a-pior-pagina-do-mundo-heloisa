// JavaScript desorganizado e irritante

// piscando título
setInterval(() => {
    let titulo = document.getElementById("titulo");
    titulo.style.color = titulo.style.color === "red" ? "yellow" : "red";
  }, 400);
  
  // botão com som falso (sem som real)
  document.getElementById("botao-promo").onclick = function() {
    alert("🍔 Pedido enviado com sucesso (mentira)!");
    document.body.style.background = "linear-gradient(to left, pink, cyan, lime)";
  };
  
  // formulário "validando" errado
  document.getElementById("formulario").onsubmit = function(e) {
    if (document.getElementById("nome").value === "") {
      alert("⚠️ Escreve o nome, faminto!");
      e.preventDefault();
    } else {
      alert("✅ Pedido recebido (ou não).");
    }
  };
  
  // evento inútil no mouse
  document.body.onmousemove = function(e) {
    document.title = `🍔 Posição do mouse: ${e.clientX},${e.clientY}`;
  };
  