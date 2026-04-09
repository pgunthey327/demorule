/**
 * @author TEAM PRIMUS
 * Rule: 10000019
 * Calculates total loyalty points earned from a list of purchase amounts,
 * awarding more points for purchases above a threshold.
 */
module.exports = {
  rulename: '10000019',
  ruleId: 'e7b1a5c6-c189-4fbe-f067-bd5b6c7e8f9a',
  description: 'Calculates total loyalty points earned from a list of purchase amounts, awarding more points for purchases above a threshold',
  rule: `export function loyaltyPoints(purchases) {
  return purchases.reduce((points, amount) => {
    return points + (amount > 500 ? 50 : 10);
  }, 0);
}
console.log(loyaltyPoints([200, 600, 800]));`
};
