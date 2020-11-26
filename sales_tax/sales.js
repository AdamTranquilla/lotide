const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

const calculateSalesTax = (salesData, taxRates) => {

  for (const key in salesData) {
    salesData[key].totalSales = 0;
    salesData[key].totalTaxes = 0;
    for (let i = 0; i < salesData[key].sales.length; i++) {
      salesData[key].totalSales += salesData[key].sales[i];
    }
    salesData[key].totalTaxes = salesData[key].totalSales * salesTaxRates[salesData[key].province]
  }

  const mergerSalesData = {}
  for (const company in salesData) {
    if (mergerSalesData[companySalesData[company].name]) {
      mergerSalesData[companySalesData[company].name] += salesData[company].totalSales;
      mergerSalesData[companySalesData[company].name] += salesData[company].totalTaxes;
    } else {
      mergerSalesData[companySalesData[company].name] = salesData[company].totalSales;
      mergerSalesData[companySalesData[company].name] = salesData[company].totalTaxes;
    }
    console.log(mergerSalesData)
  }

 // console.log(mergerSalesData)
};

console.log(calculateSalesTax(companySalesData, salesTaxRates))