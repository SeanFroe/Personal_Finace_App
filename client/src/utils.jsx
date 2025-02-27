const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "usd",
  style: "currency",
  minimumFractionDigits: 0,
});

const getProgressBarVariant = (amount, max) => {
  const ratio = amount / max;
  if (ratio <= 0.49) return "primary";
  if (ratio >= 0.75) return "danger";
  return "warning";
};
export { currencyFormatter, getProgressBarVariant };
