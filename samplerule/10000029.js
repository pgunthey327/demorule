import { isNumber } from "./.config/helpers/isNumber.js";
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
console.log(evaluateLoanCoverage("MH", 45, "WC", 8000, "2026-06-15"));