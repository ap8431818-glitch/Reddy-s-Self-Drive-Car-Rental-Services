import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Local & Outstation Cab Services",
    description: "Comfortable transportation for local and long-distance journeys.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Airport Transfers",
    description: "Reliable pickup and drop-off services.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "One-Way Trips",
    description: "Convenient one-way travel between destinations.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Round Trips",
    description: "Comfortable return journeys for holidays and personal travel.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Family Travel",
    description: "Safe and comfortable transportation for family trips.",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Corporate Travel",
    description: "Professional transportation for business travellers and corporate requirements.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Customized Tours",
    description: "Travel itineraries designed around the customer's destination, schedule and requirements.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Group Travel",
    description: "Travel solutions for families, groups and special occasions.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brand-primary leading-tight">
              Travel Services<br className="hidden md:block" /> Designed Around You
            </h2>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            href="#contact"
            className="group flex items-center gap-2 text-brand-primary font-medium hover:text-brand-accent transition-colors"
          >
            Request a Service
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={service.image} 
                alt={service.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1506259091721-347e791bab0f?auto=format&fit=crop&q=80&w=800";
                }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 bg-brand-dark/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent transition-opacity duration-500" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-serif text-white mb-2">{service.title}</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {service.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="inline-flex items-center gap-2 text-brand-accent-light text-sm font-medium">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
