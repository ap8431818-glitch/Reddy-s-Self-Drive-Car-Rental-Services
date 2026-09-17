import fs from 'fs';
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Remove irrelevant sections
content = content.replace('<ServicesSection />', '');
content = content.replace('<TourPackages />', '');
content = content.replace('<DestinationExperience />', '');

fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
