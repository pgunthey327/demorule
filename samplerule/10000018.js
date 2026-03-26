export function calculateTax(income) {
  if (income < 250000) return 0;
  if (income < 500000) return income * 0.05;
  return income * 0.2;
}
console.log(calculateTax(600000));