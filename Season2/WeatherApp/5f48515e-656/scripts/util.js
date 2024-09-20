export const createElement = (parent, tagName, className, content) => {
  const element = document.createElement(tagName);
  if (className) element.classList.add(className);
  if (content !== undefined) element.innerHTML = content;
  parent.append(element);
  return element;
}