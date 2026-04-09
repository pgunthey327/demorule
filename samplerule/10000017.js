/**
 * @author TEAM PRIMUS
 * Rule: 10000017
 * Determines profit or loss by comparing cost and revenue,
 * and returns the amount along with a status label.
 */
module.exports = {
  rulename: '10000017',
  ruleId: 'a9d3c7e8-e3ab-4bd0-b289-df7d8e9a0b1c',
  description: 'Determines profit or loss by comparing cost and revenue, and returns the amount along with a status label',
  rule: `export function profitLoss(cost, revenue) {
  const profit = revenue - cost;
  const status = profit > 0 ? "Profit" : "Loss";
  return { profit, status };
}
console.log(profitLoss(1000, 1500));`
};
