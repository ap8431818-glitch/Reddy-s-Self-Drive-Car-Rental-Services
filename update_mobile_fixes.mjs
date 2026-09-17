import fs from 'fs';

// 1. Contact Section (Map link)
let contactContent = fs.readFileSync('src/components/ContactSection.tsx', 'utf8');
contactContent = contactContent.replace(
  'href="https://maps.google.com/?q=Building+Name,+Ananta+Nagar,+Shree+Maa+Gayatri+Kripa,+near+Laxmi+Chowk+Road,+Phase+1,+Rajiv+Gandhi+Infotech+Park,+Hinjawadi,+Pune,+Maharashtra+411057"',
  'href="https://share.google/TmNcbH0MKzzSgo14w"'
);
fs.writeFileSync('src/components/ContactSection.tsx', contactContent, 'utf8');

// 2. Hero Section (Mobile 9:16 Fixes)
let heroContent = fs.readFileSync('src/components/Hero.tsx', 'utf8');
// Improve image positioning and brightness for better visibility
heroContent = heroContent.replace(
  'className="w-full h-full object-cover object-[70%_center] md:object-center opacity-80"',
  'className="w-full h-full object-cover object-center opacity-90"'
);
// Adjust gradients so mobile view is less obscured
heroContent = heroContent.replace(
  '<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/60 to-transparent sm:from-brand-dark sm:via-brand-dark/50 sm:to-transparent" />\n        <div className="absolute inset-0 lg:w-2/3 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent" />',
  '<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent sm:bg-gradient-to-r sm:from-brand-dark/90 sm:via-brand-dark/40 sm:to-transparent" />\n        <div className="absolute inset-0 bg-brand-dark/10" />'
);
// Scale typography better for mobile
heroContent = heroContent.replace(
  'text-4xl md:text-5xl lg:text-7xl',
  'text-4xl sm:text-5xl lg:text-7xl'
);
fs.writeFileSync('src/components/Hero.tsx', heroContent, 'utf8');

// 3. Trust Section (Dynamic Aspect Ratio for Mobile)
let trustContent = fs.readFileSync('src/components/TrustSection.tsx', 'utf8');
trustContent = trustContent.replace(
  'className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"',
  'className="relative aspect-[4/5] sm:aspect-auto sm:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"'
);
fs.writeFileSync('src/components/TrustSection.tsx', trustContent, 'utf8');

// 4. Editorial Section (Dynamic Aspect Ratio for Mobile)
let editorialContent = fs.readFileSync('src/components/EditorialStory.tsx', 'utf8');
editorialContent = editorialContent.replace(
  'className="lg:col-span-7 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden order-1 lg:order-2"',
  'className="lg:col-span-7 relative aspect-[4/5] sm:aspect-auto sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden order-1 lg:order-2"'
);
fs.writeFileSync('src/components/EditorialStory.tsx', editorialContent, 'utf8');

