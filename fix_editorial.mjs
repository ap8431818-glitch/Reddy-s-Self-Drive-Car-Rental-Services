import fs from 'fs';
let content = fs.readFileSync('src/components/EditorialStory.tsx', 'utf8');
content = content.replace(
  '<img \n              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1920" \n              alt="Family travelling comfortably" \n              referrerPolicy="no-referrer"\n              className="w-full h-full object-cover object-center"\n            />',
  '<div className="w-full h-full bg-brand-light flex items-center justify-center text-brand-primary p-8 text-center"><p className="text-4xl font-serif">A seamless self-drive experience.</p></div>'
);
fs.writeFileSync('src/components/EditorialStory.tsx', content, 'utf8');
