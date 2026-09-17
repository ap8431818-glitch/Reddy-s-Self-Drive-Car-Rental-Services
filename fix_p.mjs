import fs from 'fs';

let content = fs.readFileSync('src/components/FleetSection.tsx', 'utf8');

content = content.replace(
  '</p>\n                                \n                                <motion.a',
  '</motion.p>\n                                \n                                <motion.a'
);

fs.writeFileSync('src/components/FleetSection.tsx', content, 'utf8');
