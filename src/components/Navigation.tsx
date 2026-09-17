import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'About Us', href: '/#about' },
    { name: 'Our Car', href: '/#fleet' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b',
          isScrolled 
            ? 'bg-brand-light/95 backdrop-blur-md border-brand-primary/10 py-4 shadow-sm' 
            : 'bg-transparent border-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="/" className="flex flex-col group relative z-50">
            <span className={cn(
              "font-serif font-bold text-xl md:text-2xl tracking-wide transition-colors",
              isScrolled ? "text-brand-primary" : "text-white group-hover:text-white/90"
            )}>
              REDDY’S SELF DRIVE CAR RENTAL SERVICES
            </span>
            <span className={cn(
              "text-[0.6rem] md:text-xs uppercase tracking-widest font-sans transition-colors",
              isScrolled ? "text-brand-accent font-semibold" : "text-white/80"
            )}>
              Premium Car Leasing Service
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-accent",
                    isScrolled ? "text-brand-text" : "text-white/90"
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#contact"
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95",
                isScrolled 
                  ? "bg-brand-primary text-white hover:bg-brand-dark" 
                  : "bg-white text-brand-primary hover:bg-white/90"
              )}
            >
              View Catalog
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-brand-primary" />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-brand-primary" : "text-white")} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-light flex flex-col pt-24 px-6 pb-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-brand-primary border-b border-brand-primary/10 pb-4"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-8 flex flex-col gap-4">
              <a 
                href="tel:8380001886"
                className="flex items-center justify-center gap-2 w-full py-4 bg-brand-primary text-white rounded-xl font-medium"
              >
                <Phone className="w-5 h-5" />
                Call +91 83800 01886
              </a>
              <a 
                href="https://wa.me/918380001886"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-green-600 text-white rounded-xl font-medium"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
