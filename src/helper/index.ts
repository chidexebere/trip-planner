export const formatToNairaWithCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount);
};

export const formatToNairaWithCurrencyShortcode = (amount: number) => {
  return new Intl.NumberFormat('ng-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount);
};
