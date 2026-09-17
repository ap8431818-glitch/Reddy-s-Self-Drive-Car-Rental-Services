import fs from 'fs';

let heroContent = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const oldOverlay = `<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/60 to-brand-dark/20 sm:from-brand-dark sm:via-brand-dark/50 sm:to-brand-dark/20" />`;

const newOverlay = `<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/60 to-transparent sm:from-brand-dark sm:via-brand-dark/50 sm:to-transparent" />
        <div className="absolute inset-0 lg:w-2/3 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent" />`;

heroContent = heroContent.replace(oldOverlay, newOverlay);
fs.writeFileSync('src/components/Hero.tsx', heroContent, 'utf8');
