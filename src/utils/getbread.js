export default function getBread(keyPath = [], menus = []) {
  const bread = [];
  keyPath.forEach(path => {
    menus.forEach(({ label, type, key, children }) => {
      if (path === key) {
        bread.push({ label, key, type });
      }
      if (children?.length) {
        bread.push(...getBread([path], children));
      }
    });
  });
  return bread.reverse();
}