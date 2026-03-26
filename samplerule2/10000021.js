export function calculateEMI(P, R, N) {
  R = R / 12 / 100;
  let emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  return emi.toFixed(2);
}
console.log(calculateEMI(500000, 8, 60));