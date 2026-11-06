import { MessageCircle } from 'lucide-react';
import { CONTACT } from '@/data/site';

export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_-12px_rgba(37,211,102,0.7)] transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="h-5 w-5 fill-white/20" />
      Chat with Us
    </a>
  );
}
