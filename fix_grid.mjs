import fs from 'fs';

let catalogContent = fs.readFileSync('src/pages/Catalog.tsx', 'utf8');
catalogContent = catalogContent.replace('grid md:grid-cols-2 gap-8 max-w-2xl mx-auto', 'grid grid-cols-1 max-w-md mx-auto');
fs.writeFileSync('src/pages/Catalog.tsx', catalogContent, 'utf8');

let fleetContent = fs.readFileSync('src/components/FleetSection.tsx', 'utf8');
fleetContent = fleetContent.replace('grid md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto', 'grid grid-cols-1 max-w-md mx-auto');
fs.writeFileSync('src/components/FleetSection.tsx', fleetContent, 'utf8');
