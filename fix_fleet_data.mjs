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
    price: "₹4,500 / week"
  },
  {
    type: "Premium Hatchback",
    name: "Hyundai i20",
    capacity: "5 Seats",
    luggage: "Automatic",
    service: "Self Drive",
    img: "https://i.ibb.co/TMZ97Hq0/194a7663ebb3a95310b6d7bf479b28a0.jpg",
    price: "₹5,000 / week"
  },
  {
    type: "Compact SUV",
    name: "Tata Nexon",
    capacity: "5 Seats",
    luggage: "Manual",
    service: "Self Drive",
    img: "https://i.ibb.co/xt5c5MT5/2a34e1485e981c686755f76336ebbb0d.jpg",
    price: "₹4,800 / week"
  }
];`;

content = content.replace(/const fleet = \[[\s\S]*?\];/, newFleetData);

// Also remove the fallback error image to not show unsplash if ibb fails
content = content.replace(
  `                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800";
                  }}`,
  `                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}`
);

// We should also change grid-cols-4 to grid-cols-3 since we have 3 items now
content = content.replace(
  'className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"',
  'className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"'
);

fs.writeFileSync('src/components/FleetSection.tsx', content, 'utf8');
