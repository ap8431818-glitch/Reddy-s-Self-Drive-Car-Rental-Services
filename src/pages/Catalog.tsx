import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Car, Zap, Settings, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const cars = [
  {
    id: 'car-1',
    name: 'Maruti Suzuki Swift',
    type: 'Hatchback',
    price: '₹4,500',
    frequency: '/ week',
    features: ['Manual', '5 Seats', 'Petrol + CNG', 'AC'],
    image: 'https://i.ibb.co/d48F8w3r/c477e1b1f03907c5494ff76bd3d0c44b.jpg',
    viewLink: 'https://ibb.co/tpVgVTN4',
    popular: true
  },
  {
    id: 'car-2',
    name: 'Hyundai i20',
    type: 'Premium Hatchback',
    price: '₹5,000',
    frequency: '/ week',
    features: ['Automatic', '5 Seats', 'Petrol', 'Rear AC Vents'],
    image: 'https://i.ibb.co/TMZ97Hq0/194a7663ebb3a95310b6d7bf479b28a0.jpg',
    viewLink: 'https://ibb.co/yFDHZ8Bk',
    popular: false
  },
  {
    id: 'car-3',
    name: 'Tata Nexon',
    type: 'Compact SUV',
    price: '₹4,800',
    frequency: '/ week',
    features: ['Manual', '5 Seats', 'Petrol', 'High Ground Clearance'],
    image: 'https://i.ibb.co/xt5c5MT5/2a34e1485e981c686755f76336ebbb0d.jpg',
    viewLink: 'https://ibb.co/G4P1PVSP',
    popular: false
  }
];

export function Catalog() {
  return (
    <div className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-brand-text/60 hover:text-brand-primary transition-colors mb-6">
            <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-primary mb-4">Our Premium Fleet Catalog</h1>
          <p className="text-lg text-brand-text/80 max-w-2xl">
            Choose from our extensive collection of well-maintained self-drive cars. Perfect for local errands or weekend getaways.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-brand-primary/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
            >
              {car.popular && (
                <div className="absolute top-4 right-4 z-10 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Most Popular
                </div>
              )}
              <a href={car.viewLink} target="_blank" rel="noopener noreferrer" className="relative h-64 md:h-80 overflow-hidden bg-brand-light/50 flex items-center justify-center p-4">
                <img
                  src={car.image}
                  alt={car.name}
                  className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-700 group-hover:scale-105 drop-shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="bg-white/90 text-brand-dark px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Click to View Full Image
                  </span>
                </div>
              </a>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <p className="text-brand-primary/60 text-sm font-medium tracking-wide uppercase mb-1">{car.type}</p>
                  <h3 className="text-2xl font-serif text-brand-primary leading-tight">{car.name}</h3>
                </div>
                
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-brand-primary/10">
                  <span className="text-3xl font-bold text-brand-primary">{car.price}</span>
                  <span className="text-brand-text/60 font-medium">{car.frequency}</span>
                </div>

                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-8 flex-grow">
                  {car.features.map(feature => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-brand-text/80">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={`https://wa.me/918380001886?text=Hi, I want to book the ${car.name} from your catalog.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-4 text-center rounded-xl font-semibold transition-all flex items-center justify-center gap-2 bg-brand-primary text-white hover:bg-brand-dark hover:shadow-md"
                >
                  <Car className="w-4 h-4" />
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
