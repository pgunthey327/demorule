module.exports = {
  rulename: '10000020',
  ruleId: 'c5f9e3a4-af67-4d9c-de45-9b3f4a5c6d7e',
  description: 'Generates a sales report with total, average, and maximum sale amounts from a dataset',
  rule: `export function salesReport(data) {
  const total = data.reduce((sum, d) => sum + d.amount, 0);
  const avg = total / data.length;
  const max = Math.max(...data.map(d => d.amount));
  return { total, avg, max };
}
console.log(salesReport([{ amount: 200 }, { amount: 500 }, { amount: 300 }]));`
};
