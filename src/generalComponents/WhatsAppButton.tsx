import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href='https://wa.me/8224000620'
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-4 right-4 flex items-center p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors'
      style={{ zIndex: 1000 }}
    >
      <MessageCircle className='h-6 w-6 mr-2' />
      Chat with us
    </a>
  );
};

export default WhatsAppButton;
