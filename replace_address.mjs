import fs from 'fs';

let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

content = content.replace(
  '<p>Building Name, Ananta Nagar, Shree Maa Gayatri Kripa, near Laxmi Chowk Road, Phase 1, Rajiv Gandhi Infotech Park,<br/>Hinjawadi, Pune, Maharashtra 411057</p>',
  '<p>Building Name, Ananta Nagar, Shree Maa Gayatri Kripa, near Laxmi Chowk Road, Phase 1, Rajiv Gandhi Infotech Park,<br/>Hinjawadi, Pune, Maharashtra 411057</p><p className="pt-2"><strong>Branch:</strong><br/>Bhumkar Das Gugre Road, Shree Ram Colony, Pimpri Chinchwad 411057, Maharashtra, India</p>'
);

content = content.replace(
  'Comfortable journeys. Reliable service. Memorable destinations.',
  'Enjoy Your Ride with Our Cars 🚗 • The Best Cars Available At Affordable Prices • We Provide Cars for Self drive •'
);

fs.writeFileSync('src/components/Footer.tsx', content, 'utf8');
