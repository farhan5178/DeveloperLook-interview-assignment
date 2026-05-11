const fs = require('fs');

function cleanFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove JSX comments
  content = content.replace(/^[ \t]*\{\/\*[\s\S]*?\*\/\}[ \t]*\r?\n/gm, '');
  content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  
  // Remove Block comments
  content = content.replace(/^[ \t]*\/\*[\s\S]*?\*\/[ \t]*\r?\n/gm, '');
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  
  // Remove Single line comments, avoiding URLs
  content = content.replace(/^[ \t]*(?<!:)\/\/.*?\r?\n/gm, '');
  content = content.replace(/(?<!:)\/\/.*?$/gm, '');
  
  // Remove multiple empty lines (leaving max 1 empty line)
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  fs.writeFileSync(filePath, content, 'utf8');
}

const files = [
  'src/components/FeaturedWork.jsx',
  'src/components/ServicesSection.jsx',
  'src/components/Hero.jsx',
  'src/components/MainNavbar.jsx',
  'src/components/Footer.jsx'
];

files.forEach(cleanFile);
console.log('Comments removed from project.');
