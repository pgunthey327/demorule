/**
 * @author TEAM PRIMUS
 * Rule: 10000022
 * Calculates employee gross and net salary from base pay, bonus,
 * and deductions.
 */
module.exports = {
  rulename: '10000022',
  ruleId: 'b4e8d2f3-9f56-4c8b-cd34-8a2e3f4b5c6d',
  description: 'Calculates employee gross and net salary from base pay, bonus, and deductions',
  rule: `export function calculateSalary(base, bonus, deductions) {
  const gross = base + bonus;
  const net = gross - deductions;
  return { gross, net };
}
const emp = calculateSalary(50000, 10000, 5000);
console.log(emp);`
};
