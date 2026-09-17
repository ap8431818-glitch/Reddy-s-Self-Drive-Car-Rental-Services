import fs from 'fs';

let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

content = content.replace(
  'Travel Beyond Destinations.<br />\n              <span className="text-brand-accent-light italic">Travel With Confidence.</span>',
  'Enjoy Your Ride<br />\n              <span className="text-brand-accent-light italic">with Our Cars.</span>'
);

content = content.replace(
  'Comfortable journeys, reliable service and memorable experiences — from Pune to destinations across India.',
  'The Best Cars Available At Affordable Prices. We Provide Cars for Self drive.'
);

content = content.replace('Plan Your Journey', 'Book Your Car');

fs.writeFileSync('src/components/Hero.tsx', content, 'utf8');
