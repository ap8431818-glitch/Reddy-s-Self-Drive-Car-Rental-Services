import fs from 'fs';

let content = fs.readFileSync('src/components/FleetSection.tsx', 'utf8');

const itemVariantsStr = `
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};
`;

// Insert the itemVariants before export function FleetSection()
content = content.replace('export function FleetSection()', itemVariantsStr + '\nexport function FleetSection()');

// Update the motion.div for the card
const originalCardMotion = `<motion.div
              key={vehicle.type}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-brand-light rounded-2xl overflow-hidden border border-brand-primary/5 hover:border-brand-primary/20 transition-colors"
            >`;

const newCardMotion = `<motion.div
              key={vehicle.type}
              custom={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                    staggerChildren: 0.1,
                    delayChildren: (i * 0.1) + 0.2
                  }
                })
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-brand-light rounded-2xl overflow-hidden border border-brand-primary/5 hover:border-brand-primary/20 transition-colors flex flex-col"
            >`;

content = content.replace(originalCardMotion, newCardMotion);

// Now update the children to be motion elements with variants={itemVariants}
content = content.replace(
  '<div className="relative h-48 overflow-hidden">',
  '<motion.div variants={itemVariants} className="relative h-48 overflow-hidden shrink-0">'
);
content = content.replace(
  '</div>\n              <div className="p-6">',
  '</motion.div>\n              <div className="p-6 flex flex-col flex-grow">'
);

content = content.replace(
  '<p className="text-brand-accent text-xs font-semibold tracking-wider uppercase mb-1">{vehicle.type}</p>',
  '<motion.p variants={itemVariants} className="text-brand-accent text-xs font-semibold tracking-wider uppercase mb-1">{vehicle.type}</motion.p>'
);

content = content.replace(
  '<h3 className="text-xl font-serif text-brand-primary mb-4">{vehicle.name}</h3>',
  '<motion.h3 variants={itemVariants} className="text-xl font-serif text-brand-primary mb-4">{vehicle.name}</motion.h3>'
);

content = content.replace(
  '<div className="flex gap-4 mb-6">',
  '<motion.div variants={itemVariants} className="flex gap-4 mb-6">'
);

// We need to close the div replacement carefully. Let's just find it explicitly.
content = content.replace(
  `                  </div>\n                </div>`,
  `                  </div>\n                </motion.div>`
);

content = content.replace(
  '<p className="text-sm text-brand-text/70 mb-6 pb-6 border-b border-brand-primary/10">',
  '<motion.p variants={itemVariants} className="text-sm text-brand-text/70 mb-6 pb-6 border-b border-brand-primary/10">'
);

content = content.replace(
  `</p>\n                                <a`,
  `</motion.p>\n                                <motion.a variants={itemVariants}`
);

// Close the motion.a tag
content = content.replace(
  'Enquire Now\n                </a>',
  'Enquire Now\n                </motion.a>'
);

fs.writeFileSync('src/components/FleetSection.tsx', content, 'utf8');
