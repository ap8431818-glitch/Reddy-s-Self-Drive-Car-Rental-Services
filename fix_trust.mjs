import fs from 'fs';
let content = fs.readFileSync('src/components/TrustSection.tsx', 'utf8');
content = content.replace(
  '<img \n              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1974" \n              alt="Premium Indian Travel Experience" \n              referrerPolicy="no-referrer"\n              className="w-full h-full object-cover object-center"\n            />',
  '<div className="w-full h-full bg-brand-primary flex flex-col items-center justify-center p-8 text-center"><p className="text-3xl font-serif text-brand-accent mb-4">Drive with Confidence</p><p className="text-white/70 max-w-sm">Experience the freedom of the open road with our well-maintained vehicles.</p></div>'
);
fs.writeFileSync('src/components/TrustSection.tsx', content, 'utf8');
