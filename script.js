// JS Licenciado : Lucas Silva Gomes 15198398713

window.addEventListener('DOMContentLoaded', function() {
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const chatMessages = document.getElementById('chat-messages');
  const imageInput = document.getElementById('image-input');
  const logo = document.getElementById('logoImg');
  
  // Função para adicionar uma mensagem no chat
  function addMessage(sender, message, isImage = false, isAudio = false) {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message');

    if (isImage) {
      messageDiv.innerHTML = `
        <span class="sender">${sender}</span>: 
        <img class="chat-image" src="${message}">
        <span class="time">${timestamp}</span>
      `;
    } else if (isAudio) {
      messageDiv.innerHTML = `
        <div class="audio-message">
          <span class="sender">${sender}</span>: 
          <audio controls>
            <source src="${message}" type="audio/mpeg">
          </audio>
          <span class="time">${timestamp}</span>
        </div>
      `;
    } else {
      messageDiv.innerHTML = `
        <span class="sender">${sender}</span>: ${message} <span class="time">${timestamp}</span>
      `;
    }

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Adiciona um evento de mouseover para aplicar o efeito de rotação no logo
  logo.addEventListener('mouseover', () => {
    logo.style.transform = 'rotate(360deg)';
  });

  // Adiciona um evento de mouseout para remover o efeito de rotação no logo
  logo.addEventListener('mouseout', () => {
    logo.style.transform = 'rotate(0deg)';
  });

  // Event listener para o botão de envio de mensagem
  sendButton.addEventListener('click', function(event) {
    event.preventDefault();
    const message = messageInput.value.trim();
    if (message !== '') {
      addMessage('User', message);
      messageInput.value = '';
    }
  });

  // Event listener para o botão de envio de imagem
  imageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      const image = e.target.result;
      addMessage('User', image, true);
      imageInput.value = '';
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  });

  // Adicionar elementos de navegação
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const navItems = ['Home', 'Games', 'About', 'Contact'];

  // Adicione os itens de navegação à lista <ul>
  navItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = item;
    li.appendChild(a);
    ul.appendChild(li);
  });

  // Adicione a lista <ul> ao elemento <nav>
  nav.appendChild(ul);

  // Adicione o elemento <nav> ao início do body
  document.body.insertBefore(nav, document.body.firstChild);

  
  // Define uma função para adicionar a classe de animação
  // Define uma função para adicionar a classe de animação
  function adicionarAnimacao() {
    logo.classList.add('logo'); // Adiciona a classe de animação ao logo
  }

  // Chama a função para adicionar a classe de animação após um intervalo de tempo
  setTimeout(adicionarAnimacao, 1000); // Aguarde 1 segundo (1000 milissegundos) antes de adicionar a animação
});
