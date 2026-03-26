import { isNumber } from "./.config/helpers/isNumber.js";
import { isString } from "./.config/helpers/isString.js";

export function evaluateLoanPolicy(state, age, workstream, loanAmount) {
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
    isString(workstream) &&
    workstream === "WC" &&
    isNumber(loanAmount) &&
    loanAmount < 10000
  ) {
    result.extensionToCoverage = true;
    result.durationExtension = 20;
  }

  return result;
}

// Example usage
console.log(evaluateLoanPolicy("MH", 45, "WC", 8000));