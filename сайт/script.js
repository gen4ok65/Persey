document.getElementById('send-btn').addEventListener('click', async () => {
  const userInput = document.getElementById('user-input').value.trim();
  if (!userInput) return;

  // Добавляем запрос пользователя в чат
  addMessage('user', userInput);

  // Очищаем поле ввода
  document.getElementById('user-input').value = '';

  // Отправляем запрос к API
  const response = await fetch('sk-ijklmnopqrstuvwxijklmnopqrstuvwxijklmnop', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: userInput }] }]
    })
  });

  const data = await response.json();
  const aiResponse = data.candidates[0].content.parts[0].text;

  // Добавляем ответ ИИ в чат
  addMessage('ai', aiResponse);
});

function addMessage(sender, message) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Прокручиваем вниз
}