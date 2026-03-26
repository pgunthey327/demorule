export function calculateSalary(base, bonus, deductions) {
  let gross = base + bonus;
  let net = gross - deductions;
  return { gross, net };
}
let emp = calculateSalary(50000, 10000, 5000);
console.log(emp);