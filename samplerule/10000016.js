module.exports = {
  rulename: '10000016',
  ruleId: 'b0e4d8f9-f4bc-4ce1-c39a-e08e9f0b1c2d',
  description: 'Evaluates insurance policy eligibility for a coverage extension based on state, age, workstream, underwriting group code, and premium amount criteria',
  rule: `import { isNumber } from "./.config/helpers/isNumber.js";
import { isString } from "./.config/helpers/isString.js";

export function evaluatePolicy(state, age, workstream, premiumAmount, businessUnit, subGroup, underwritingGroupCode) {
  const ELIGIBLE_STATES = ["KA", "GJ", "RJ", "MH", "DL", "AP"];
  const MAX_AGE = 60;
  const MAX_PREMIUM = 10000;
  const REQUIRED_WORKSTREAM = "WC";
  const REQUIRED_UW_GROUP_CODE = "10000016";

  const result = {
    extensionToCoverage: false,
    durationExtension: 0
  };

  const isEligible =
    isString(state) &&
    ELIGIBLE_STATES.includes(state) &&
    isNumber(age) &&
    age < MAX_AGE &&
    workstream === REQUIRED_WORKSTREAM &&
    businessUnit === null &&
    subGroup === null &&
    underwritingGroupCode === REQUIRED_UW_GROUP_CODE &&
    isNumber(premiumAmount) &&
    premiumAmount < MAX_PREMIUM;

  if (isEligible) {
    result.durationExtension = 20;
  }

  return result;
}

// Example usage
console.log(evaluatePolicy("MH", 45, "WC", 8000, null, null, "10000016"));`
};
