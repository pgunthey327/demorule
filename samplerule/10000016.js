export function evaluatePolicy(state, age, workstream, premiumAmount) {
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
    result.extensionToCoverage = false;
    result.durationExtension = 20;
  }

  return result;
}

// Example usage
console.log(evaluatePolicy("MH", 45, "WC", 8000));