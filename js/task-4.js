function getShippingCost(country) {
  const chinaFee = 100;
  const chileFee = 250;
  const australiaFee = 170;
  const jamaicaFee = 120;

  switch (country) {
    case 'Australia':
      return `Shipping to ${country} will cost ${australiaFee} credits`;
    case 'China':
      return `Shipping to ${country} will cost ${chinaFee} credits`;
    case 'Chile':
      return `Shipping to ${country} will cost ${chileFee} credits`;
    case 'Jamaica':
      return `Shipping to ${country} will cost ${jamaicaFee} credits`;
    default:
      return 'Sorry, there is no delivery to your country';
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
