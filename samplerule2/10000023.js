module.exports = {
  rulename: '10000023',
  ruleId: 'a3f7c1d2-8e45-4b9a-bc23-7f1d2e3a4b5c',
  description: 'Generates an invoice with subtotal, tax, and total calculated from a list of items and a tax rate',
  rule: `export function generateInvoice(items, taxRate) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  return { subtotal, tax, total };
}
const items = [{ price: 100, qty: 2 }, { price: 50, qty: 3 }];
console.log(generateInvoice(items, 0.18));`
};
