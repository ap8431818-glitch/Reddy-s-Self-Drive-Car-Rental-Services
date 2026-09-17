import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function EditorialStory() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-primary leading-[1.1] mb-8 text-balance">
              A Seamless Self-Drive<br />
              <span className="text-brand-accent italic">Experience.</span>
            </h2>
            <p className="text-lg text-brand-text/80 leading-relaxed mb-8">
              At Reddy’s Self Drive Car Rental Services, we believe that the journey is just as important as the destination. We help our customers travel comfortably and safely for every occasion:
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Holidays', 'Family trips', 'Business travel', 'Outstation journeys', 'Airport transfers', 'Special occasions'].map((item, i) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-3 text-brand-primary font-medium"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="mt-2 pt-8 border-t border-brand-primary/10 mb-8">
              <p className="font-serif text-xl text-brand-primary italic">"Welcome to our family. We look forward to driving yours."</p>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-accent transition-colors w-fit group">
              Start Your Story 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative aspect-[4/5] sm:aspect-auto sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden order-1 lg:order-2"
          >
             <img 
              src="https://i.ibb.co/3mNSRGzF/unnamed-1.jpg" 
              alt="Seamless self-drive experience"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
