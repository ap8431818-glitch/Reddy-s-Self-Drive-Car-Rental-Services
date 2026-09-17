import fs from 'fs';
let content = fs.readFileSync('src/components/EditorialStory.tsx', 'utf8');

content = content.replace(
  'Every Road Has A Story.<br />\n              <span className="text-brand-accent italic">Let Us Be Part Of Yours.</span>',
  'A Seamless Self-Drive<br />\n              <span className="text-brand-accent italic">Experience.</span>'
);

fs.writeFileSync('src/components/EditorialStory.tsx', content, 'utf8');
