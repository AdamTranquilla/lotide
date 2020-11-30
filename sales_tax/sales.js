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

const calculateSales = (salesData, taxRates) => {
  const mergerSalesData = {}
  for (const branch of salesData) {
    branch.totalSales = branch.sales.reduce((a, b) => a + b, 0)
        if (!mergerSalesData[branch.name]) {
          mergerSalesData[branch.name] = {}
          mergerSalesData[branch.name].totalSales = 0
          mergerSalesData[branch.name].totalTaxes = 0
        }
    mergerSalesData[branch.name].totalSales += branch.totalSales
    mergerSalesData[branch.name].totalTaxes += taxRates[branch.province] * branch.totalSales
  }
  return mergerSalesData
};

/* 
const calculateSales = (salesData, taxRates) => {
  const mergerSalesData = {}
  for (const branch of salesData) {
    let companyName = branch.name
    let sumSales = branch.sales.reduce((a, b) => a + b, 0)
    branch.totalSales = sumSales
    let provinceName = branch.province
    let provinceTaxRate = salesTaxRates[provinceName]
    let totalTaxes = provinceTaxRate * branch.totalSales
        if (!mergerSalesData[companyName]) {
          mergerSalesData[companyName] = {}
          mergerSalesData[companyName].totalSales = 0
          mergerSalesData[companyName].totalTaxes = 0
        }
    mergerSalesData[companyName].totalSales += branch.totalSales
    mergerSalesData[companyName].totalTaxes += totalTaxes
  }
  return mergerSalesData
}; */

console.log(calculateSales(companySalesData, salesTaxRates))
