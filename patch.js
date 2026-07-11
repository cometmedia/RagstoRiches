const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const newFont = `@font-face {
  font-family: "PP Neue Montreal Medium";
  src: url("./assets/ppneuemontreal-medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
`;

css = css.replace('@theme {', newFont + '\n@theme {');
fs.writeFileSync('src/index.css', css);
