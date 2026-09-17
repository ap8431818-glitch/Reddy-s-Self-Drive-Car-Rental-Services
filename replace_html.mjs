import fs from 'fs';

let content = fs.readFileSync('index.html', 'utf8');
content = content.replace(
  /<meta name="description" content=".*" \/>/,
  '<meta name="description" content="Enjoy Your Ride with Our Cars 🚗 • The Best Cars Available At Affordable Prices • We Provide Cars for Self drive •" />'
);
content = content.replace(
  /<meta property="og:description" content=".*" \/>/,
  '<meta property="og:description" content="Enjoy Your Ride with Our Cars 🚗 • The Best Cars Available At Affordable Prices • We Provide Cars for Self drive •" />'
);
fs.writeFileSync('index.html', content, 'utf8');
