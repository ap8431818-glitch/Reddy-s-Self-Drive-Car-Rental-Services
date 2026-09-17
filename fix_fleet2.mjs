import fs from 'fs';

let content = fs.readFileSync('src/components/FleetSection.tsx', 'utf8');

// Replace the motion.a back to a normal Link wrapped in motion.div if needed, or simply standard <a> for now. Let's just use standard <a> pointing to /catalog because it will full refresh but it's simpler and less error-prone for framer-motion conflicts.

content = content.replace(
  '<motion.a as={Link} to="/catalog" variants={itemVariants} className="block w-full py-3 text-center bg-transparent border border-brand-primary text-brand-primary font-medium rounded-lg hover:bg-brand-primary hover:text-white transition-colors">',
  '<motion.a variants={itemVariants} href="/catalog" className="block w-full py-3 text-center bg-transparent border border-brand-primary text-brand-primary font-medium rounded-lg hover:bg-brand-primary hover:text-white transition-colors">'
);

fs.writeFileSync('src/components/FleetSection.tsx', content, 'utf8');
