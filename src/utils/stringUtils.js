export const getCurrencyFormat = (
  amount,
  currency = "INR",
  decimals = 0,
  locale = "en-IN"
) => {
  // Check if the input is a valid number
  if (isNaN(amount)) {
    return "Invalid amount";
  }

  // Format the amount using the specified currency and locale with controlled decimal places
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    maximumFractionDigits: decimals,
  }).format(amount);
};
