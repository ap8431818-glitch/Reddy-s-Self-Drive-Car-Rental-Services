import { motion } from 'motion/react';
import { Star, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-end overflow-hidden">
      {/* Background Image / Video overlay */}
      <div className="absolute inset-0 z-0 bg-brand-dark overflow-hidden">
        <img 
          src="https://i.ibb.co/mC8BCMRm/unnamed.webp" 
          alt="Scenic Road Journey" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent sm:bg-gradient-to-r sm:from-brand-dark/90 sm:via-brand-dark/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-brand-dark/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-16 md:pb-32 pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="will-change-transform will-change-opacity"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white font-medium leading-[1.1] mb-4 md:mb-6 text-balance">
              Enjoy Your Ride<br />
              <span className="text-brand-accent-light italic">with Our Cars.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-sans max-w-2xl mb-8 md:mb-10 text-balance leading-relaxed">
              The Best Cars Available At Affordable Prices. We Provide Cars for Self drive.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 md:mb-16 will-change-transform will-change-opacity"
          >
            <Link 
              to="/catalog" 
              className="px-8 py-4 bg-brand-accent text-brand-dark font-semibold rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center"
            >
              Book Your Car
            </Link>
            <a 
              href="tel:8380001886" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 border border-white/20 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              Call Reddy’s Car Rental
            </a>
            <a 
              href="https://wa.me/918380001886" 
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-500 transition-all flex items-center justify-center gap-2 w-full"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>

        {/* Trust Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20"
        >
          <div>
            <div className="flex items-center gap-1 text-brand-accent mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-white ml-2 font-semibold">4.9</span>
            </div>
            <p className="text-white/70 text-sm font-medium">Google Rating</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Trusted</p>
            <p className="text-white/70 text-sm font-medium">Travel Service</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Clean & Comfortable</p>
            <p className="text-white/70 text-sm font-medium">Vehicles</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Professional</p>
            <p className="text-white/70 text-sm font-medium">Drivers</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
