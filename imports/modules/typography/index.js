import Typography from 'typography';

const title = 'MQSchwanda'; // The theme title.

const Roboto = ['Roboto', 'sans-serif'];
const headerFontFamily = Roboto;
const bodyFontFamily = Roboto;

const bodyWeight = 400; // Specify the font weight for body text. Defaults to normal.
const boldWeight = 700; // Specify the font weight for “bold” (b, strong, dt, th) elements. Defaults to bold.
const headerWeight = boldWeight; // Specify the font weight for headers. Defaults to bold.

const baseFontSize = '16px'; // The base font size in pixels, defaults to 16px.

const goldenRatio = 1.618;
const baseLineHeight = goldenRatio; // The base line height using the css unitless number, defaults to 1.5.
const scaleRatio = goldenRatio; // The “scale ratio” for the theme. This value is the ratio between the h1 font size and the baseFontSize. So if the scale ratio is 2 and the baseFontSize is 16px then the h1 font size is 32px.

const bodyGray = 20; // The “lightness” value for headers (set in hsl). Defaults to 20.
const headerGray = bodyGray / 2; // The “lightness” value for body text (in hsl). Defaults to 20.

const headerGrayHue = 0; // The “hue” value for headers (set in hsl). Defaults to 0. Also accepts three named hues, cool, slate, and warm.
const bodyGrayHue = 0; // The “hue” value for body text (in hsl). Defaults to 0. Also accepts three named hues, cool, slate, and warm.

const includeNormalize = false; // Include normalize.css. Normalize.css is an excellent project which works to normalize the base browser CSS across browsers and serves as an excellent foundation for Typography.js. We include normalize.CSS by default but if you’re already including it elsewhere in your project, you can disable including it here by passing false.

const typography = new Typography({
  title,
  headerFontFamily,
  bodyFontFamily,
  baseFontSize,
  baseLineHeight,
  scaleRatio,
  headerGray,
  headerGrayHue,
  bodyGray,
  bodyGrayHue,
  headerWeight,
  bodyWeight,
  boldWeight,
  includeNormalize,
});

export default typography;
