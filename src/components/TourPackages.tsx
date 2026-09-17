import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const destinations = [
  { name: "Lonavala", desc: "Verdant hills and misty valleys.", img: "https://images.unsplash.com/photo-1592639296611-eeb914e6e6da?auto=format&fit=crop&q=80&w=800" },
  { name: "Goa", desc: "Sun, sand, and coastal heritage.", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800" },
  { name: "Rajasthan", desc: "Palaces, forts, and desert luxury.", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800" },
  { name: "Kerala", desc: "Tranquil backwaters and lush greenery.", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800" },
  { name: "Mahabaleshwar", desc: "Strawberry fields and panoramic viewpoints.", img: "https://images.unsplash.com/photo-1623595119708-26b1f7300075?auto=format&fit=crop&q=80&w=800" }
];

export function TourPackages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="packages" ref={containerRef} className="py-24 md:py-32 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-4">Discover India Your Way</h2>
          <p className="text-brand-text/80 max-w-2xl mx-auto text-lg">Sample destination categories to inspire your next memorable journey with us.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.slice(0, 3).map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6">
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  referrerPolicy="no-referrer" 
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1506259091721-347e791bab0f?auto=format&fit=crop&q=80&w=800";
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 bg-brand-light" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-brand-primary mb-2">{dest.name}</h3>
              <p className="text-brand-text/70 mb-4">{dest.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-brand-accent font-medium group-hover:text-brand-primary transition-colors">
                Explore Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
