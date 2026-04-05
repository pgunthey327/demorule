module.exports = {
  rulename: '10000016',
  ruleId: 'b0e4d8f9-f4bc-4ce1-c39a-e08e9f0b1c2d',
  description: 'Evaluates insurance policy eligibility for a coverage extension based on state, age, workstream, and premium amount criteria',
  criteria: {
    expiryDate: "01-01-2026",
    effectiveDate: "02-03-2026",
  },
  rule: `export function evaluatePolicy(state, age, workstream, premiumAmount) {
  const validStates = ["KA", "GJ", "RJ", "MH", "DL", "AP"];

  let result = {
    extensionToCoverage: false,
    durationExtension: 0
  };

  if (
    validStates.includes(state) &&
    age < 60 &&
    workstream === "WC" &&
    premiumAmount < 10000
  ) {
    result.extensionToCoverage = true;
    result.durationExtension = 10;
  }

  return result;
}

// Example usage
console.log(evaluatePolicy("MH", 45, "WC", 8000));`
};
