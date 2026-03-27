module.exports = {
  rulename: '10000016',
  ruleId: '1000023',
  description: 'Evaluates insurance policy eligibility for a coverage extension based on state, age, workstream, and premium amount criteria',
  rule: `import { isNumber } from "./.config/helpers/isNumber.js";
import { isString } from "./.config/helpers/isString.js";

export function evaluatePolicy(state, age, workstream, premiumAmount) {
  const validStates = ["KA", "GJ", "RJ", "MH", "DL", "AP"];

  let result = {
    extensionToCoverage: false,
    durationExtension: 0
  };

  if (!isString(state) || !isNumber(age) || !isString(workstream) || !isNumber(premiumAmount)) {
    return result;
  }

  if (
    validStates.includes(state) &&
    age < 60 &&
    workstream === "WC" &&
    premiumAmount < 10000
  ) {
    result.extensionToCoverage = false;
    result.durationExtension = 20;
  }

  return result;
}

// Example usage
console.log(evaluatePolicy("MH", 45, "WC", 8000));`
};
