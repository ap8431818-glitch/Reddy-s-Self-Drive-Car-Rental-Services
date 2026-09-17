import fs from 'fs';

let content = fs.readFileSync('src/components/FleetSection.tsx', 'utf8');

if (!content.includes('react-router-dom')) {
  content = content.replace(
    "import { Users, Briefcase } from 'lucide-react';",
    "import { Users, Briefcase } from 'lucide-react';\nimport { Link } from 'react-router-dom';"
  );
}

content = content.replace(
  '<motion.a variants={itemVariants} href="#contact"',
  '<motion.a as={Link} to="/catalog" variants={itemVariants}'
);
content = content.replace(
  'Enquire Now\n                </motion.a>',
  'View Details\n                </motion.a>'
);

fs.writeFileSync('src/components/FleetSection.tsx', content, 'utf8');
