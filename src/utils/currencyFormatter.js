const currencyFormatter = (value) => {
  // eslint-disable-next-line no-undef
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  return formatter.format(value);
};

export default currencyFormatter;
