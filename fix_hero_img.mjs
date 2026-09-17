import fs from 'fs';

let content = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const oldBg = `<div className="absolute inset-0 z-0 bg-brand-dark">
        <img 
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=2069" 
          alt="Beautiful Indian Destination" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[70%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/60 to-brand-dark/20 sm:from-brand-dark sm:via-brand-dark/50 sm:to-brand-dark/20" />
      </div>`;

const newBg = `<div className="absolute inset-0 z-0 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/40 via-brand-dark to-brand-dark opacity-80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
      </div>`;

content = content.replace(oldBg, newBg);
fs.writeFileSync('src/components/Hero.tsx', content, 'utf8');
