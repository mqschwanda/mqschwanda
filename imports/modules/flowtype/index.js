import store from 'reducers';

export default function (options) {
  // Establish default options/variables
  const component = this;
  const { maximum, minimum, maxFont, minFont, fontRatio } = {
    maximum: 9999,
    minimum: 1,
    maxFont: 9999,
    minFont: 1,
    fontRatio: 35,
    ...options,
  };

  // Do the magic math
  const handleChange = () => {
    const element = document.querySelector('h1');
    const { offsetWidth } = element;
    const width = offsetWidth > maximum ? maximum : offsetWidth < minimum ? minimum : offsetWidth;
    const fontBase = width / fontRatio;
    const fontSize = fontBase > maxFont ? maxFont : fontBase < minFont ? minFont : fontBase;
    element.style.fontSize = `${fontSize}px`;
    console.log({ component, width, fontBase, fontSize });
  };

  // Make the magic visible
  store.subscribe(() => { handleChange(); });
  handleChange(); // Set changes on load
}
