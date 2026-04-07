module.exports = {
  rulename: '10000021',
  ruleId: 'd6a0f4b5-b078-4ead-ef56-ac4a5b6d7e8f',
  description: 'Calculates the Equated Monthly Instalment (EMI) for a loan given principal amount, annual interest rate, and tenure in months',
  rule: `export function calculateEMI(P, R, N) {
  const monthlyRate = R / 12 / 100;
  const compoundFactor = Math.pow(1 + monthlyRate, N);
  const emi = (P * monthlyRate * compoundFactor) / (compoundFactor - 1);
  return emi.toFixed(2);
}
console.log(calculateEMI(500000, 8, 60));`
};
