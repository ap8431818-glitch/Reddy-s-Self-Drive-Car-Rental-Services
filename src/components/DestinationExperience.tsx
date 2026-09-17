import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const destinations = [
  { name: "Pune", img: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=1200" },
  { name: "Mumbai", img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1200" },
  { name: "Nashik", img: "https://images.unsplash.com/photo-1506259091721-347e791bab0f?auto=format&fit=crop&q=80&w=1200" },
  { name: "Alibaug", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200" },
];

export function DestinationExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // For a section of 300vh, we transform x from 0 to -75% (to slide through the 4 items)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-brand-dark" id="destinations">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-20 pb-10">
           <h2 className="text-4xl md:text-5xl font-serif text-brand-light">
             From Pune Roads to<br/>Unforgettable Places
           </h2>
        </div>
        
        <motion.div style={{ x }} className="flex w-[400vw] h-[60vh]">
          {destinations.map((dest, i) => (
            <div key={i} className="w-[100vw] h-full p-6 md:p-12 flex-shrink-0 relative group cursor-pointer">
              <div className="w-full h-full relative rounded-2xl overflow-hidden">
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to a reliable scenic landscape image if the primary one fails
                    e.currentTarget.src = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200";
                  }}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 bg-brand-light"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-7xl font-serif text-white mb-4"
                  >
                    {dest.name}
                  </motion.h3>
                  <div className="flex items-center gap-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <span className="text-white text-lg font-medium">Explore</span>
                    <ArrowRight className="w-6 h-6 text-brand-accent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
