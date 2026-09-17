import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    q: "How do I book a cab or travel service?",
    a: "You can easily book your journey by calling us directly at +91 83800 01886, sending us a WhatsApp message, or filling out the enquiry form on our website. Our team will promptly confirm your travel details and vehicle availability."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major convenient payment methods including UPI (Google Pay, PhonePe, Paytm), instant bank transfers, and cash. A partial advance may be required to confirm outstation or multi-day customized tour packages."
  },
  {
    q: "What is your cancellation and refund policy?",
    a: "We understand that plans can change. Cancellations made 24 hours prior to the scheduled pickup time are typically fully refundable. For detailed cancellation terms regarding customized holiday packages or fleet bookings, please speak with our travel executive."
  },
  {
    q: "Are toll, parking, and state taxes included in the fare?",
    a: "Our commitment is absolute transparency. Our quotes clearly specify whether tolls, parking, and state taxes are included. Typically, for standard outstation trips, these are settled at actuals during the journey unless you opt for an all-inclusive premium package."
  },
  {
    q: "Are your drivers experienced for hill stations and long trips?",
    a: "Absolutely. Safety and comfort are our highest priorities. Our chauffeurs are highly experienced professionals, thoroughly trained and well-versed with local city routes, major highways, and challenging hill station terrains like Mahabaleshwar and Lonavala."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-brand-text/80 font-sans max-w-2xl mx-auto">
            Find quick answers to common queries regarding our booking process, payment methods, and travel policies.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "border rounded-2xl transition-colors duration-300",
                  isOpen ? "border-brand-accent/50 bg-brand-light/50 shadow-sm" : "border-brand-primary/10 hover:border-brand-primary/30"
                )}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className={cn(
                    "text-lg md:text-xl font-serif transition-colors duration-300",
                    isOpen ? "text-brand-accent font-medium" : "text-brand-primary"
                  )}>
                    {faq.q}
                  </h3>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300",
                    isOpen ? "bg-brand-accent text-white" : "bg-brand-primary/5 text-brand-primary"
                  )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden px-6"
                    >
                      <p className="pb-6 text-brand-text/80 leading-relaxed font-sans text-balance">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
