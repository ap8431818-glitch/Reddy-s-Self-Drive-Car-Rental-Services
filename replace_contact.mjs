import fs from 'fs';

let content = fs.readFileSync('src/components/ContactSection.tsx', 'utf8');

content = content.replace(
  '<p className="text-brand-text/80">Building Name, Ananta Nagar, Shree Maa Gayatri Kripa, near Laxmi Chowk Road, Phase 1, Rajiv Gandhi Infotech Park,<br/>Hinjawadi, Pune, Maharashtra 411057</p>',
  '<p className="text-brand-text/80 mb-2">Building Name, Ananta Nagar, Shree Maa Gayatri Kripa, near Laxmi Chowk Road, Phase 1, Rajiv Gandhi Infotech Park,<br/>Hinjawadi, Pune, Maharashtra 411057</p><p className="text-brand-text/80"><span className="font-medium text-brand-primary">Branch:</span><br/>Bhumkar Das Gugre Road, Shree Ram Colony, Pimpri Chinchwad 411057, Maharashtra, India</p>'
);

content = content.replace(
  'q=Phase+3,+Rajiv+Gandhi+Infotech+Park,+Hinjawadi,+Pune,+Maharashtra+411057',
  'q=Building+Name,+Ananta+Nagar,+Shree+Maa+Gayatri+Kripa,+near+Laxmi+Chowk+Road,+Phase+1,+Rajiv+Gandhi+Infotech+Park,+Hinjawadi,+Pune,+Maharashtra+411057'
);

content = content.replace(
  '<option>Local Cab Service</option>',
  '<option>Self Drive Car Rental</option>'
);

fs.writeFileSync('src/components/ContactSection.tsx', content, 'utf8');
