import { motion } from 'motion/react';
import { Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const fleet = [
  {
    type: "Hatchback",
    name: "Maruti Suzuki Swift",
    capacity: "5 Seats",
    luggage: "Petrol + CNG",
    service: "Self Drive",
    img: "https://i.ibb.co/d48F8w3r/c477e1b1f03907c5494ff76bd3d0c44b.jpg",
    price: "₹4,500 / week",
    viewLink: "https://ibb.co/tpVgVTN4"
  },
  {
    type: "Premium Hatchback",
    name: "Hyundai i20",
    capacity: "5 Seats",
    luggage: "Automatic",
    service: "Self Drive",
    img: "https://i.ibb.co/TMZ97Hq0/194a7663ebb3a95310b6d7bf479b28a0.jpg",
    price: "₹5,000 / week",
    viewLink: "https://ibb.co/yFDHZ8Bk"
  },
  {
    type: "Compact SUV",
    name: "Tata Nexon",
    capacity: "5 Seats",
    luggage: "Manual",
    service: "Self Drive",
    img: "https://i.ibb.co/xt5c5MT5/2a34e1485e981c686755f76336ebbb0d.jpg",
    price: "₹4,800 / week",
    viewLink: "https://ibb.co/G4P1PVSP"
  }
];


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export function FleetSection() {
  return (
    <section id="fleet" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-4">Our Self-Drive Fleet</h2>
          <p className="text-brand-text/80 max-w-2xl mx-auto text-lg">Choose from our well-maintained cars available at affordable prices for your next self-drive journey.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {fleet.map((vehicle, i) => (
            <motion.div
              key={vehicle.type}
              custom={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                    staggerChildren: 0.1,
                    delayChildren: (i * 0.1) + 0.2
                  }
                })
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-brand-light rounded-2xl overflow-hidden border border-brand-primary/5 hover:border-brand-primary/20 transition-colors flex flex-col"
            >
              <motion.div variants={itemVariants} className="relative h-64 overflow-hidden shrink-0 bg-brand-light/50 flex items-center justify-center p-2 border-b border-brand-primary/5">
                <img 
                  src={vehicle.img} 
                  alt={vehicle.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="max-w-full max-h-full object-contain rounded transition-transform duration-700 group-hover:scale-105 drop-shadow"
                />
              </motion.div>
              <div className="p-6 flex flex-col flex-grow">
                <motion.p variants={itemVariants} className="text-brand-accent text-xs font-semibold tracking-wider uppercase mb-1">{vehicle.type}</motion.p>
                <motion.h3 variants={itemVariants} className="text-xl font-serif text-brand-primary mb-4">{vehicle.name}</motion.h3>
                
                <motion.div variants={itemVariants} className="flex gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-sm text-brand-text/80">
                    <Users className="w-4 h-4 text-brand-primary/60" />
                    {vehicle.capacity}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-brand-text/80">
                    <Briefcase className="w-4 h-4 text-brand-primary/60" />
                    {vehicle.luggage}
                  </div>
                </motion.div>
                
                <motion.p variants={itemVariants} className="text-sm text-brand-text/70 mb-6 pb-6 border-b border-brand-primary/10">
                  {vehicle.price ? <span className="font-semibold text-brand-primary">{vehicle.price}</span> : `Ideal for: ${vehicle.service}`}
                </motion.p>
                
                <motion.a variants={itemVariants} href="/catalog" className="block w-full py-3 text-center bg-transparent border border-brand-primary text-brand-primary font-medium rounded-lg hover:bg-brand-primary hover:text-white transition-colors">
                  View Details
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
