const fs = require('fs');

let html = fs.readFileSync('stitch_screens/animated_landing_page.html', 'utf8');

// Extract the main content
const mainMatch = html.match(/<main[\s\S]*?<\/main>/);
let main = mainMatch ? mainMatch[0] : '';

// Convert class to className
main = main.replace(/class=/g, 'className=');

// Fix unclosed tags
main = main.replace(/<img([^>]*[^/])>/g, '<img$1 />');
main = main.replace(/<input([^>]*[^/])>/g, '<input$1 />');
// Remove comments
main = main.replace(/<!--[\s\S]*?-->/g, '');

// Fix style attributes
main = main.replace(/style="([^"]*)"/g, (match, p1) => {
    let styles = p1.split(';').filter(s => s.trim() !== '');
    let styleObj = {};
    styles.forEach(s => {
        let parts = s.split(':');
        if (parts.length >= 2) {
            let key = parts.shift().trim();
            let val = parts.join(':').trim();
            let camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            styleObj[camelKey] = val;
        }
    });
    return 'style={' + JSON.stringify(styleObj) + '}';
});

let result = `import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AnimatedLandingPage() {
  return (
    <>
      <Navbar />
      ${main}
      <Footer />
    </>
  );
}`;

fs.writeFileSync('src/app/page.tsx', result);
console.log('Conversion completed.');
