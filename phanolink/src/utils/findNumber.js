export function findNumber (str) {
  const num = /\d+/g;
  let res = str.match(num);
  return [...res].pop();
}