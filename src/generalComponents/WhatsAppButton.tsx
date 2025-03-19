import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
    href="https://wa.me/918224000620?text=Hello%21%20I%E2%80%99m%20interested%20in%20your%20services.%20Can%20you%20provide%20more%20details%3F"
    target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 flex items-center p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
      style={{ zIndex: 1000 }}
    >
      <MessageCircle className="h-6 w-6 mr-2" />
      Chat with us
    </a>
  );
};

export default WhatsAppButton;
