import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        
        <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-6 text-balance">
            Your Next Journey Starts Here.
          </h2>
          <p className="text-xl text-white/80 font-sans mb-12 max-w-2xl mx-auto">
            Tell us where you want to go. We'll help make the journey comfortable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:8380001886" 
              className="px-8 py-4 bg-brand-accent text-brand-dark font-semibold rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              Call +91 83800 01886
            </a>
            <a 
              href="https://wa.me/918380001886" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
