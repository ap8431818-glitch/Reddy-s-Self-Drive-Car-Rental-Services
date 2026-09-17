import fs from 'fs';

let heroContent = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const oldImg = `src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2000"`;
const newImg = `src="https://i.ibb.co/mC8BCMRm/unnamed.webp"`;

heroContent = heroContent.replace(oldImg, newImg);
fs.writeFileSync('src/components/Hero.tsx', heroContent, 'utf8');
