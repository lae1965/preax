const getElementProperty = (element, property) =>
  +window.getComputedStyle(element).getPropertyValue(property).split('px')[0];
export default getElementProperty;
