// Carrega chatbot depois
import('/components/ChatbotDark').then(module => {
  const ChatbotDark = module.default;
  const root = document.createElement('div');
  root.id = 'chatbot-root';
  document.body.appendChild(root);
  
  // Renderiza o chatbot
  const { createRoot } = require('react-dom/client');
  const rootElement = createRoot(root);
  rootElement.render(ChatbotDark());
});