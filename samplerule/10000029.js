module.exports = {
  rulename: '10000029',
  ruleId: '1000024',
  description: 'Evaluates loan coverage extension eligibility based on state, age, workstream, loan amount, and mortgage expiry for underwriting group 10000029',
  criteria: {
    expiryDate: "01-03-2026",
  },
  rule: `import { isNumber } from "./.config/helpers/isNumber.js";
import { isString } from "./.config/helpers/isString.js";

export function evaluateLoanCoverage(state, age, workstream, loanAmount, mortgageExpiry) {
  const validStates = ["KA", "GJ", "RJ", "MH", "DL", "AP"];

  let result = {
    extensionToCoverage: false,
    durationExtension: 0
  };

  if (!isString(state) || !isNumber(age) || !isString(workstream) || !isNumber(loanAmount)) {
    return result;
  }

  const mortgageExpiryDate = new Date(mortgageExpiry);
  const thresholdDate = new Date("2027-01-01");

  if (
    validStates.includes(state) &&
    age < 60 &&
    workstream === "WC" &&
    loanAmount < 10000 &&
    mortgageExpiryDate < thresholdDate
  ) {
    result.extensionToCoverage = true;
    result.durationExtension = 20;
  }

  return result;
}

// Example usage
console.log(evaluateLoanCoverage("MH", 45, "WC", 8000, "2026-06-15"));`
};
