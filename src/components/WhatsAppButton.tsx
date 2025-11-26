import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '61212345678'; // Australian format without + and spaces
  const message = 'Hello! I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 group"
      style={{
        padding: isHovered ? '16px 24px 16px 16px' : '16px',
      }}
    >
      <MessageCircle 
        size={28} 
        className="animate-pulse" 
        style={{ animationDuration: '2s' }}
      />
      <span 
        className="overflow-hidden transition-all duration-300 whitespace-nowrap"
        style={{
          maxWidth: isHovered ? '200px' : '0px',
          opacity: isHovered ? 1 : 0,
        }}
      >
        Chat with us
      </span>
    </a>
  );
}
