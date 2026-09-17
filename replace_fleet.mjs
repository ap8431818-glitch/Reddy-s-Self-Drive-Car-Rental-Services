import fs from 'fs';

let content = fs.readFileSync('src/components/FleetSection.tsx', 'utf8');

content = content.replace(
  'Comfort For Every Journey',
  'Our Self-Drive Fleet'
);
content = content.replace(
  'Our fleet is maintained to the highest standards, ensuring a safe and comfortable ride for every requirement.',
  'Choose from our well-maintained cars available at affordable prices for your next self-drive journey.'
);

content = content.replace(
  `{
    type: "SUV",
    name: "Comfort SUV Class",
    capacity: "6-7 Passengers",
    luggage: "4 Bags",
    service: "Outstation & Family",
    img: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=800"
  }`,
  `{
    type: "SUV",
    name: "Ertiga CNG + Petrol",
    capacity: "7 Passengers",
    luggage: "4 Bags",
    service: "Self Drive",
    img: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=800",
    price: "₹3,000 / 24 hours"
  }`
);

content = content.replace(
  `Ideal for: {vehicle.service}`,
  `{vehicle.price ? <span className="font-semibold text-brand-primary">{vehicle.price}</span> : \`Ideal for: \${vehicle.service}\`}`
);

fs.writeFileSync('src/components/FleetSection.tsx', content, 'utf8');
