function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");
  const text = input.value.trim();

  if (!text) return;

  chat.innerHTML += `<div class="msg user">${text}</div>`;
  input.value = "";

  setTimeout(() => {
    chat.innerHTML += `<div class="msg bot">${getBotReply(text)}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 700);
}

function getBotReply(text) {
  text = text.toLowerCase();

  if (text.includes("serviço") || text.includes("fazem"))
    return "Trabalhamos com websites, chatbots e automação digital para empresas.";

  if (text.includes("preço") || text.includes("valor"))
    return "Os valores dependem do projeto. Falamos melhor numa demonstração personalizada.";

  if (text.includes("contacto") || text.includes("whatsapp"))
    return "Clica no botão acima para falar connosco diretamente no WhatsApp.";

  return "Boa pergunta 🙂 Podemos explicar melhor numa demonstração personalizada.";
}

