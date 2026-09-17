import fs from 'fs';
let content = fs.readFileSync('src/components/Navigation.tsx', 'utf8');

const oldNavLinks = `  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'About Us', href: '/#about' },
    { name: 'Our Services', href: '/#services' },
    { name: 'Fleet', href: '/#fleet' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact', href: '/#contact' },
  ];`;

const newNavLinks = `  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'About Us', href: '/#about' },
    { name: 'Our Car', href: '/#fleet' },
    { name: 'Reviews', href: '/#reviews' },
    { name: 'Contact', href: '/#contact' },
  ];`;

content = content.replace(oldNavLinks, newNavLinks);

fs.writeFileSync('src/components/Navigation.tsx', content, 'utf8');
