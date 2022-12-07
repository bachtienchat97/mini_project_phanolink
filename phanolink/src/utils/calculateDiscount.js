export function calculateDiscount(originalPrice, discount) {
  let total = 0;
  const percentDisc = discount / 100;
  total = originalPrice - originalPrice * percentDisc;
  return Math.round(total);
}