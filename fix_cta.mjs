import fs from 'fs';
let content = fs.readFileSync('src/components/CTASection.tsx', 'utf8');
content = content.replace(
  '<img \n          src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=2000" \n          alt="Cinematic Indian Road" \n          referrerPolicy="no-referrer"\n          className="w-full h-full object-cover object-center"\n        />',
  ''
);
fs.writeFileSync('src/components/CTASection.tsx', content, 'utf8');
