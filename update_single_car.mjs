import fs from 'fs';

// Update Catalog.tsx
let catalogContent = fs.readFileSync('src/pages/Catalog.tsx', 'utf8');

const newCarsStr = `const cars = [
  {
    id: 'car-1',
    name: 'Ertiga CNG + Petrol',
    type: 'SUV',
    price: '₹4,500',
    frequency: '/ week',
    features: ['Manual', '7 Seats', 'Petrol + CNG', 'AC'],
    image: 'https://i.ibb.co/vxgWt8P5/b24a53ce81bd989c53c9110217fdd2b6.jpg',
    viewLink: 'https://ibb.co/99z0MjTX',
    popular: true
  }
];`;

catalogContent = catalogContent.replace(/const cars = \[[\s\S]*?\];/, newCarsStr);
catalogContent = catalogContent.replace('grid md:grid-cols-2 lg:grid-cols-3 gap-8', 'grid md:grid-cols-2 gap-8 max-w-2xl mx-auto');

fs.writeFileSync('src/pages/Catalog.tsx', catalogContent, 'utf8');

// Update FleetSection.tsx
let fleetContent = fs.readFileSync('src/components/FleetSection.tsx', 'utf8');

const newFleetData = `const fleet = [
  {
    type: "SUV",
    name: "Ertiga CNG + Petrol",
    capacity: "7 Seats",
    luggage: "Manual",
    service: "Self Drive",
    img: "https://i.ibb.co/vxgWt8P5/b24a53ce81bd989c53c9110217fdd2b6.jpg",
    price: "₹4,500 / week",
    viewLink: "https://ibb.co/99z0MjTX"
  }
];`;

fleetContent = fleetContent.replace(/const fleet = \[[\s\S]*?\];/, newFleetData);
fleetContent = fleetContent.replace('grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8', 'grid md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto');

fs.writeFileSync('src/components/FleetSection.tsx', fleetContent, 'utf8');
