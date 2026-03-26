export function salesReport(data) {
  let total = data.reduce((sum, d) => sum + d.amount, 0);
  let avg = total / data.length;
  let max = Math.max(...data.map(d => d.amount));
  return { total, avg, max };
}
console.log(salesReport([{ amount: 200 }, { amount: 500 }, { amount: 300 }]));