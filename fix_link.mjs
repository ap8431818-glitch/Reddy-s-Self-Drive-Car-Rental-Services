import fs from 'fs';

let content = fs.readFileSync('src/components/FleetSection.tsx', 'utf8');

content = content.replace(
  '<a href="#contact"',
  '<motion.a variants={itemVariants} href="#contact"'
);

fs.writeFileSync('src/components/FleetSection.tsx', content, 'utf8');
