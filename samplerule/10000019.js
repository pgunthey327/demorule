export function loyaltyPoints(purchases) {
  return purchases.reduce((points, p) => {
    return points + (p > 500 ? 50 : 10);
  }, 0);
}
console.log(loyaltyPoints([200, 600, 800]));