module.exports = {
  rulename: '10000029',
  ruleId: '1000024',
  description: 'Evaluates loan coverage extension eligibility based on state, age, workstream, loan amount, and mortgage expiry for underwriting group 10000029',
  criteria: {
    expiryDate: "01-03-2026",
    states: ["KA", "GJ", "RJ", "MH", "DL", "AP"],
    ageLessThan: 60,
    workstream: "WC",
    businessUnit: null,
    subGroup: null,
    underwritingGroupCode: "10000029"
  },
  rule: `import { isNumber } from "./.config/helpers/isNumber.js";
import { isString } from "./.config/helpers/isString.js";

export function evaluateLoanCoverage(state, age, workstream, loanAmount, mortgageExpiry) {
  const validStates = ["KA", "GJ", "RJ", "MH", "DL", "AP"];
  const mortgageExpiryLimit = new Date("2027-01-01");

  let result = {
    extensionToCoverage: false,
    durationExtension: 0
  };

  if (!isString(state) || !isNumber(age) || !isString(workstream) || !isNumber(loanAmount)) {
    return result;
  }

  const mortgageDate = new Date(mortgageExpiry);

  if (
    validStates.includes(state) &&
    age < 60 &&
    workstream === "WC" &&
    loanAmount < 10000 &&
    mortgageDate < mortgageExpiryLimit
  ) {
    result.extensionToCoverage = true;
    result.durationExtension = 20;
  }

  return result;
}

// Example usage
console.log(evaluateLoanCoverage("MH", 45, "WC", 8000, "2026-06-15"));`
};
