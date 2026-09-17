import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function TrustSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-primary leading-[1.1] mb-8 text-balance">
              Drive with Confidence.<br />
              <span className="text-brand-accent">Experience the Freedom.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-text/80 leading-relaxed max-w-lg mb-12">
              Drive with confidence and experience the freedom of the open road with our balanced fleet. Whether it’s a family holiday, a business journey, or a long-distance road trip, Reddy’s Self Drive Car Rental Services focuses on making every journey comfortable, dependable and stress-free.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-brand-primary/10">
              <div>
                <div className="flex items-center gap-1 text-brand-accent mb-2">
                  <span className="text-3xl font-serif text-brand-primary">4.9</span>
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-sm text-brand-text/60 font-medium">Google Rating</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-brand-primary mb-2">275+</p>
                <p className="text-sm text-brand-text/60 font-medium">Happy Reviews</p>
              </div>
              <div>
                <p className="text-xl font-serif text-brand-primary mb-2 mt-2 leading-tight">Professional</p>
                <p className="text-sm text-brand-text/60 font-medium">Travel Service</p>
              </div>
              <div>
                <p className="text-xl font-serif text-brand-primary mb-2 mt-2 leading-tight">Pune</p>
                <p className="text-sm text-brand-text/60 font-medium">Based</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-[4/5] sm:aspect-auto sm:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://i.ibb.co/FkCS6gLp/unnamed-2.jpg" 
              alt="Drive with confidence"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
