import fs from 'fs';

let content = fs.readFileSync('src/components/Navigation.tsx', 'utf8');

const oldNavLinks = `  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Tour Packages', href: '#packages' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];`;

const newNavLinks = `  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'About Us', href: '/#about' },
    { name: 'Our Services', href: '/#services' },
    { name: 'Fleet', href: '/#fleet' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact', href: '/#contact' },
  ];`;

content = content.replace(oldNavLinks, newNavLinks);
content = content.replace(
  '<a href="#" className="flex flex-col group relative z-50">',
  '<a href="/" className="flex flex-col group relative z-50">'
);
// replace `#contact` for Plan Your Trip with `/catalog`
content = content.replace(
  '<a \n                href="#contact"',
  '<a \n                href="/catalog"'
);
content = content.replace(
  'Plan Your Trip',
  'View Catalog'
);

// We need to import Link instead of a tag for faster client side routing? No, standard <a> tag with / works fine, but Link is better for SPAs so we don't full refresh. Let's replace <a with <Link for links? Actually, for hash links /#about standard <a> works better because react-router sometimes struggles to scroll to hashes. Let's keep <a>.

fs.writeFileSync('src/components/Navigation.tsx', content, 'utf8');
