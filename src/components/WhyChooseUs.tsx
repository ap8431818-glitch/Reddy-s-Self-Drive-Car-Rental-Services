import { motion } from 'motion/react';
import { Shield, Sparkles, Clock, Map, Users, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: "Clean & Comfortable Vehicles",
    desc: "Travel in vehicles maintained with customer comfort in mind."
  },
  {
    icon: Shield,
    title: "Professional Driving",
    desc: "A smooth and responsible driving experience."
  },
  {
    icon: Clock,
    title: "Reliable Service",
    desc: "Focused on punctuality and dependable travel support."
  },
  {
    icon: Map,
    title: "Personalized Travel",
    desc: "Travel arrangements tailored around your requirements."
  },
  {
    icon: Users,
    title: "Local Understanding",
    desc: "Based in Hinjawadi, Pune, with knowledge of local and outstation travel needs."
  },
  {
    icon: Heart,
    title: "Customer First",
    desc: "Every journey should end with a customer who feels taken care of."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-brand-primary relative text-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-light mb-6">More Than A Ride. <br className="md:hidden"/>It's Your Journey.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent mb-2">
                <benefit.icon className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-serif text-white">{benefit.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
