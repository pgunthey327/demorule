export function generateInvoice(items, taxRate) {
  let subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  let tax = subtotal * taxRate;
  let total = subtotal + tax;
  return { subtotal, tax, total };
}
let items = [{ price: 100, qty: 2 }, { price: 50, qty: 3 }];
console.log(generateInvoice(items, 0.18));