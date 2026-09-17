import fs from 'fs';

let trustContent = fs.readFileSync('src/components/TrustSection.tsx', 'utf8');
const oldTrustImg = `<img 
              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1974" 
              alt="Premium Car Service"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />`;
const newTrustImg = `<img 
              src="https://i.ibb.co/vxgWt8P5/b24a53ce81bd989c53c9110217fdd2b6.jpg" 
              alt="Premium Car Service"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 hover:scale-105"
            />`;
trustContent = trustContent.replace(oldTrustImg, newTrustImg);
fs.writeFileSync('src/components/TrustSection.tsx', trustContent, 'utf8');

let editorialContent = fs.readFileSync('src/components/EditorialStory.tsx', 'utf8');
const oldEdImg = `<img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1920" 
              alt="Scenic Road Journey"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />`;
const newEdImg = `<div className="w-full h-full bg-brand-primary"></div>`;
editorialContent = editorialContent.replace(oldEdImg, newEdImg);
fs.writeFileSync('src/components/EditorialStory.tsx', editorialContent, 'utf8');

let ctaContent = fs.readFileSync('src/components/CTASection.tsx', 'utf8');
const oldCtaImg = `<img 
          src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Journey"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />`;
const newCtaImg = `<div className="w-full h-full bg-brand-primary/10 backdrop-blur-3xl"></div>`;
ctaContent = ctaContent.replace(oldCtaImg, newCtaImg);
fs.writeFileSync('src/components/CTASection.tsx', ctaContent, 'utf8');

