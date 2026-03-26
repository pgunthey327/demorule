export function profitLoss(cost, revenue) {
  let profit = revenue - cost;
  let status = profit > 0 ? "Profit" : "Loss";
  return { profit, status };
}
console.log(profitLoss(1000, 1500));