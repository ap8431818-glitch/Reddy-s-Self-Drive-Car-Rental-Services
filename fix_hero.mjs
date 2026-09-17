import fs from 'fs';

let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// The original import might not have Link, so we can just use an <a> tag pointing to /catalog. React router will handle a full refresh but it's okay for now. Actually, if we use <Link to="/catalog"> it's much better for SPA.
// Let's add the import.
if (!content.includes('react-router-dom')) {
  content = content.replace(
    "import { Star, ChevronDown, Phone, MessageCircle } from 'lucide-react';",
    "import { Star, ChevronDown, Phone, MessageCircle } from 'lucide-react';\nimport { Link } from 'react-router-dom';"
  );
}

content = content.replace(
  '<a \n              href="#contact" \n              className="px-8 py-4 bg-brand-accent text-brand-dark font-semibold rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center"\n            >\n              Book Your Car\n            </a>',
  '<Link \n              to="/catalog" \n              className="px-8 py-4 bg-brand-accent text-brand-dark font-semibold rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center"\n            >\n              Book Your Car\n            </Link>'
);

fs.writeFileSync('src/components/Hero.tsx', content, 'utf8');
