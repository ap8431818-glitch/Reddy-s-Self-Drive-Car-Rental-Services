import fs from 'fs';

// 1. Update Catalog.tsx
let catalogContent = fs.readFileSync('src/pages/Catalog.tsx', 'utf8');
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
catalogContent = catalogContent.replace(/const cars = \[[\s\S]*?\];/, newCarsStr);
catalogContent = catalogContent.replace('grid grid-cols-1 max-w-md mx-auto', 'grid md:grid-cols-2 lg:grid-cols-3 gap-8');
fs.writeFileSync('src/pages/Catalog.tsx', catalogContent, 'utf8');

// 2. Update FleetSection.tsx
let fleetContent = fs.readFileSync('src/components/FleetSection.tsx', 'utf8');
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
fleetContent = fleetContent.replace(/const fleet = \[[\s\S]*?\];/, newFleetData);
fleetContent = fleetContent.replace('grid grid-cols-1 max-w-md mx-auto', 'grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8');
fs.writeFileSync('src/components/FleetSection.tsx', fleetContent, 'utf8');

// 3. Update Hero.tsx
let heroContent = fs.readFileSync('src/components/Hero.tsx', 'utf8');
const oldHeroBg = `<div className="absolute inset-0 z-0 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/40 via-brand-dark to-brand-dark opacity-80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
      </div>`;
const newHeroBg = `<div className="absolute inset-0 z-0 bg-brand-dark overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2000" 
          alt="Scenic Road Journey" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[70%_center] md:object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/60 to-brand-dark/20 sm:from-brand-dark sm:via-brand-dark/50 sm:to-brand-dark/20" />
      </div>`;
heroContent = heroContent.replace(oldHeroBg, newHeroBg);
fs.writeFileSync('src/components/Hero.tsx', heroContent, 'utf8');

// 4. Update TrustSection.tsx
let trustContent = fs.readFileSync('src/components/TrustSection.tsx', 'utf8');
const oldTrustImg = `<div className="w-full h-full bg-brand-primary flex flex-col items-center justify-center p-8 text-center"><p className="text-3xl font-serif text-brand-accent mb-4">Drive with Confidence</p><p className="text-white/70 max-w-sm">Experience the freedom of the open road with our well-maintained vehicles.</p></div>`;
const newTrustImg = `<img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1974" 
              alt="Drive with confidence"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />`;
trustContent = trustContent.replace(oldTrustImg, newTrustImg);
fs.writeFileSync('src/components/TrustSection.tsx', trustContent, 'utf8');

// 5. Update EditorialStory.tsx
let editorialContent = fs.readFileSync('src/components/EditorialStory.tsx', 'utf8');
const oldEdImg = `<div className="w-full h-full bg-brand-light flex items-center justify-center text-brand-primary p-8 text-center"><p className="text-4xl font-serif">A seamless self-drive experience.</p></div>`;
const newEdImg = `<img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1920" 
              alt="Seamless self-drive experience"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />`;
editorialContent = editorialContent.replace(oldEdImg, newEdImg);
fs.writeFileSync('src/components/EditorialStory.tsx', editorialContent, 'utf8');

// 6. Update CTASection.tsx
let ctaContent = fs.readFileSync('src/components/CTASection.tsx', 'utf8');
const oldCtaImg = `<div className="w-full h-full bg-brand-primary/10 backdrop-blur-3xl"></div>`;
const newCtaImg = `<img 
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=2000" 
          alt="Your next journey starts here"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-[2px]" />`;
ctaContent = ctaContent.replace(oldCtaImg, newCtaImg);
fs.writeFileSync('src/components/CTASection.tsx', ctaContent, 'utf8');

