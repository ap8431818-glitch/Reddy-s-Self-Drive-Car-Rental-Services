import fs from 'fs';

// Update TrustSection.tsx
let trustContent = fs.readFileSync('src/components/TrustSection.tsx', 'utf8');
const oldTrustContainer = `className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-brand-dark/5 flex items-center justify-center p-4 md:p-8 border border-brand-primary/10"
          >
            <img 
              src="https://i.ibb.co/FkCS6gLp/unnamed-2.jpg" 
              alt="Drive with confidence"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105 rounded-xl"
            />`;
const newTrustContainer = `className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://i.ibb.co/FkCS6gLp/unnamed-2.jpg" 
              alt="Drive with confidence"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />`;
trustContent = trustContent.replace(oldTrustContainer, newTrustContainer);
fs.writeFileSync('src/components/TrustSection.tsx', trustContent, 'utf8');

// Update EditorialStory.tsx
let editorialContent = fs.readFileSync('src/components/EditorialStory.tsx', 'utf8');
const oldEdContainer = `className="lg:col-span-7 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden order-1 lg:order-2 bg-brand-dark/5 flex items-center justify-center p-4 md:p-8 border border-brand-primary/5"
          >
             <img 
              src="https://i.ibb.co/3mNSRGzF/unnamed-1.jpg" 
              alt="Seamless self-drive experience"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-1000 group-hover:scale-105 rounded-xl"
            />`;
const newEdContainer = `className="lg:col-span-7 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden order-1 lg:order-2"
          >
             <img 
              src="https://i.ibb.co/3mNSRGzF/unnamed-1.jpg" 
              alt="Seamless self-drive experience"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />`;
editorialContent = editorialContent.replace(oldEdContainer, newEdContainer);
fs.writeFileSync('src/components/EditorialStory.tsx', editorialContent, 'utf8');

