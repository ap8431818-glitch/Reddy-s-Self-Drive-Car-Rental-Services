import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:8380001886"
        className="w-12 h-12 md:w-14 md:h-14 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-dark/20 relative group"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
        <span className="absolute right-full mr-4 bg-brand-dark text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          Call Now
        </span>
      </motion.a>
      
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.7, type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/918380001886"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 relative group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        <span className="absolute right-full mr-4 bg-brand-dark text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          WhatsApp Us
        </span>
      </motion.a>
    </div>
  );
}
