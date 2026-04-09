module.exports = {
  rulename: '1000023',
  ruleId: '1000023',
  description: 'Evaluates insurance policy eligibility for a coverage extension based on state, age, workstream, underwriting group code, and premium amount criteria with duration extension of 20 years',
  criteria: {
    expiryDate: "05-04-2026",
  },
  rule: `import { isNumber } from "./.config/helpers/isNumber.js";
import { isString } from "./.config/helpers/isString.js";

export function evaluatePolicy(state, age, workstream, premiumAmount, underwritingGroupCode) {
  const validStates = ["KA", "GJ", "RJ", "MH", "DL", "AP"];

  let result = {
    extensionToCoverage: false,
    durationExtension: 0
  };

  if (
    isString(state) &&
    validStates.includes(state) &&
    isNumber(age) &&
    age < 60 &&
    workstream === "WC" &&
    isNumber(premiumAmount) &&
    premiumAmount < 10000 &&
    underwritingGroupCode === "10000016"
  ) {
    result.extensionToCoverage = false;
    result.durationExtension = 20;
  }

  return result;
}

// Example usage
console.log(evaluatePolicy("MH", 45, "WC", 8000, "10000016"));`
};
