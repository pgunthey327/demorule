module.exports = {
  rulename: '10000016',
  ruleId: 'b0e4d8f9-f4bc-4ce1-c39a-e08e9f0b1c2d',
  description: 'Evaluates insurance policy eligibility for a coverage extension based on state, age, workstream, and premium amount criteria',
  criteria: {
    expiryDate: "05-04-2026",
    effectiveDate: "02-03-2026",
  },
  rule: `import { isNumber } from "./.config/helpers/isNumber.js";
import { isString } from "./.config/helpers/isString.js";

// Eligible states for coverage extension
const VALID_STATES = ["KA", "GJ", "RJ", "MH", "DL", "AP"];
const MAX_AGE = 60;
const MAX_PREMIUM = 10000;
const REQUIRED_WORKSTREAM = "WC";
const EXTENSION_DURATION = 20;

export function evaluatePolicy(state, age, workstream, premiumAmount) {
  if (!isString(state) || !isNumber(age) || !isString(workstream) || !isNumber(premiumAmount)) {
    throw new Error("Invalid input types");
  }

  const result = {
    extensionToCoverage: false,
    durationExtension: 0
  };

  const isEligible =
    VALID_STATES.includes(state) &&
    age < MAX_AGE &&
    workstream === REQUIRED_WORKSTREAM &&
    premiumAmount < MAX_PREMIUM;

  if (isEligible) {
    result.durationExtension = EXTENSION_DURATION;
  }

  return result;
}

// Example usage
console.log(evaluatePolicy("MH", 45, "WC", 8000));`
};
