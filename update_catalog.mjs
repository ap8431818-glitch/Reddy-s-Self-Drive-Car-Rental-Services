import fs from 'fs';

let content = fs.readFileSync('src/pages/Catalog.tsx', 'utf8');

// Replace the cars array to include the viewLink
const newCarsStr = `const cars = [
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
];`;

content = content.replace(/const cars = \[[\s\S]*?\];/, newCarsStr);

// Now update the image rendering
const oldImageRender = `<div className="relative h-56 md:h-64 overflow-hidden bg-gray-100">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>`;

const newImageRender = `<a href={car.viewLink} target="_blank" rel="noopener noreferrer" className="relative h-64 md:h-80 overflow-hidden bg-brand-light/50 flex items-center justify-center p-4">
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
              </a>`;

content = content.replace(oldImageRender, newImageRender);

fs.writeFileSync('src/pages/Catalog.tsx', content, 'utf8');
