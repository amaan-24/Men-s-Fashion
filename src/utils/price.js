const DEFAULT_USD_TO_INR = 83.5;

export function formatToINR(price, rate = DEFAULT_USD_TO_INR) {
  if (price == null) return '';
  // If price is a number, treat it as USD
  let usd = Number(price);
  if (Number.isNaN(usd)) {
    // Try to extract numeric part from strings like '$149' or '$149.99'
    const match = String(price).replace(/,/g, '').match(/([0-9]+(?:\.[0-9]+)?)/);
    if (!match) return String(price);
    usd = Number(match[1]);
  }

  const inr = Math.round(usd * rate);
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(inr);
}

export default formatToINR;
