import fs from 'fs';

let content = fs.readFileSync('src/components/FleetSection.tsx', 'utf8');

const newFleetData = `const fleet = [
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
];`;

content = content.replace(/const fleet = \[[\s\S]*?\];/, newFleetData);

const oldImageRender = `<motion.div variants={itemVariants} className="relative h-48 overflow-hidden shrink-0">
                <img 
                  src={vehicle.img} 
                  alt={vehicle.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 bg-brand-dark/10"
                />
              </motion.div>`;

const newImageRender = `<motion.div variants={itemVariants} className="relative h-64 overflow-hidden shrink-0 bg-brand-light/50 flex items-center justify-center p-2 border-b border-brand-primary/5">
                <img 
                  src={vehicle.img} 
                  alt={vehicle.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="max-w-full max-h-full object-contain rounded transition-transform duration-700 group-hover:scale-105 drop-shadow"
                />
              </motion.div>`;

content = content.replace(oldImageRender, newImageRender);

fs.writeFileSync('src/components/FleetSection.tsx', content, 'utf8');
