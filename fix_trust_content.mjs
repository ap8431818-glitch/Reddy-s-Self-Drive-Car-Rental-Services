import fs from 'fs';
let content = fs.readFileSync('src/components/TrustSection.tsx', 'utf8');

content = content.replace(
  'Your Journey.<br />\n              <span className="text-brand-accent">Our Responsibility.</span>',
  'Drive with Confidence.<br />\n              <span className="text-brand-accent">Experience the Freedom.</span>'
);

content = content.replace(
  '“Whether it’s a family holiday, a business journey, airport transfer or a long-distance road trip, Reddy’s Self Drive Car Rental Services focuses on making every journey comfortable, dependable and stress-free.”',
  'Drive with confidence and experience the freedom of the open road with our balanced fleet. Whether it’s a family holiday, a business journey, or a long-distance road trip, Reddy’s Self Drive Car Rental Services focuses on making every journey comfortable, dependable and stress-free.'
);

fs.writeFileSync('src/components/TrustSection.tsx', content, 'utf8');
