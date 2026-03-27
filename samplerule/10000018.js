module.exports = {
  rulename: '10000018',
  ruleId: 'f8c2b6d7-d29a-4acf-a178-ce6c7d8f9a0b',
  description: 'Calculates income tax liability based on tiered tax slabs applied to a given annual income',
  rule: `export function calculateTax(income) {
  if (income < 250000) return 0;
  if (income < 500000) return income * 0.05;
  return income * 0.2;
}
console.log(calculateTax(600000));`
};
