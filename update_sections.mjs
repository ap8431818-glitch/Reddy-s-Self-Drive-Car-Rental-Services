import fs from 'fs';

// Update TrustSection.tsx
let trustContent = fs.readFileSync('src/components/TrustSection.tsx', 'utf8');
const oldTrustContainer = `className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1974" 
              alt="Drive with confidence"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />`;
const newTrustContainer = `className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-brand-dark/5 flex items-center justify-center p-4 md:p-8 border border-brand-primary/10"
          >
            <img 
              src="https://i.ibb.co/FkCS6gLp/unnamed-2.jpg" 
              alt="Drive with confidence"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105 rounded-xl"
            />`;
trustContent = trustContent.replace(oldTrustContainer, newTrustContainer);
fs.writeFileSync('src/components/TrustSection.tsx', trustContent, 'utf8');

// Update EditorialStory.tsx
let editorialContent = fs.readFileSync('src/components/EditorialStory.tsx', 'utf8');
const oldEdContainer = `className="lg:col-span-7 relative h-[600px] rounded-2xl overflow-hidden order-1 lg:order-2"
          >
             <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1920" 
              alt="Seamless self-drive experience"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />`;
const newEdContainer = `className="lg:col-span-7 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden order-1 lg:order-2 bg-brand-dark/5 flex items-center justify-center p-4 md:p-8 border border-brand-primary/5"
          >
             <img 
              src="https://i.ibb.co/3mNSRGzF/unnamed-1.jpg" 
              alt="Seamless self-drive experience"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-1000 group-hover:scale-105 rounded-xl"
            />`;
editorialContent = editorialContent.replace(oldEdContainer, newEdContainer);
fs.writeFileSync('src/components/EditorialStory.tsx', editorialContent, 'utf8');

