import fs from 'fs';

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [search, replace] of replacements) {
    content = content.split(search).join(replace);
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

const files = [
  'index.html',
  'metadata.json',
  'src/components/Navigation.tsx',
  'src/components/Hero.tsx',
  'src/components/Footer.tsx',
  'src/components/ContactSection.tsx',
  'src/components/FAQ.tsx',
  'src/components/CTASection.tsx',
  'src/components/FloatingContact.tsx',
  'src/components/TrustSection.tsx',
  'src/components/Testimonials.tsx',
  'src/components/EditorialStory.tsx'
];

const phoneOld1 = '07083938055';
const phoneNew1 = '8380001886';
const phoneOld2 = '070839 38055';
const phoneNew2 = '+91 83800 01886';
const phoneOld3 = '7083938055';
const phoneNew3 = '8380001886';

const addrOld1 = 'Phase 3, Rajiv Gandhi Infotech Park,';
const addrNew1 = 'Building Name, Ananta Nagar, Shree Maa Gayatri Kripa, near Laxmi Chowk Road, Phase 1, Rajiv Gandhi Infotech Park,';

const oldName = 'Om Sai Tours And Travels';
const newName = 'Reddy’s Self Drive Car Rental Services';

const oldNameUpper = 'OM SAI TOURS & TRAVELS';
const newNameUpper = 'REDDY’S SELF DRIVE CAR RENTAL SERVICES';

const oldNameShort = 'Om Sai Tours';
const newNameShort = 'Reddy’s Car Rental';

const hindiOld = 'ओम साई टूर्स एंड ट्रेवल्स';
const hindiNew = 'रेड्डी\'स सेल्फ ड्राइव कार रेंटल सर्विस';

for (const file of files) {
  if (fs.existsSync(file)) {
    replaceInFile(file, [
      [oldName, newName],
      [oldNameUpper, newNameUpper],
      [oldNameShort, newNameShort],
      [hindiOld, hindiNew],
      [phoneOld1, phoneNew1],
      [phoneOld2, phoneNew2],
      [phoneOld3, phoneNew3],
      [addrOld1, addrNew1],
      ['104 Google Reviews', '275 Google Reviews'],
      ['100+', '275+'],
      ['Premium Travel Agency', 'Premium Car Leasing Service']
    ]);
  }
}
