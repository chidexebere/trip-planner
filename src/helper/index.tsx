export const formatToNaira = (amount: number) => {
  return new Intl.NumberFormat('ng-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount);
};
