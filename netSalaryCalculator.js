// Challenge 3: 
// Net Salary Calculator (Toy Problem)
// Given the basic salary and benefits of an employee, 
// write a program that would calc
// late the Payee Tax, NHIF, NSSF Deductions and net salary.


// define an object that contains tax brackets and rates
const taxBrackets = [
    { min: 0, max: 24000, rate: 0.1 },
    { min: 24001, max: 40667, rate: 0.15 },
    { min: 40668, max: 57333, rate: 0.20 },
    { min: 57334, max: 74000, rate: 0.25 },
    { min: 74001, max: Infinity, rate: 0.30 }
];

// define NHIF and NSSF rates
const nhifRate = 0.015;
const nssfRate = 0.06;

// get inputs from user
const basicSalary = Number(prompt("Enter employee's basic salary:"));
const benefits = Number(prompt("Enter employee's benefits:"));

// calculate gross pay
const grossPay = basicSalary + benefits;

// calculate NHIF and NSSF deductions
let nhifDeduction = Math.min(grossPay * nhifRate, 1700);
let nssfDeduction = Math.min(grossPay * nssfRate, 1800);

// calculate taxable income
let taxableIncome = grossPay - nhifDeduction - nssfDeduction - 2439;

// calculate Payee tax
let payeeTax = 0;
for (let i = 0; i < taxBrackets.length; i++) {
    const bracket = taxBrackets[i];
    if (taxableIncome > bracket.max) {
        payeeTax += (bracket.max - bracket.min) * bracket.rate;
    } else {
        payeeTax += (taxableIncome - bracket.min) * bracket.rate;
        break;
    }
}

// calculate net salary
const netSalary = grossPay - nhifDeduction - nssfDeduction - payeeTax;

// display results
// console.log(`Gross pay: ${grossPay}`);
// console.log(`NHIF deduction: ${nhifDeduction}`);
// console.log(`NSSF deduction: ${nssfDeduction}`);
// console.log(`Payee tax: ${payeeTax}`);
// console.log(`Net salary: ${netSalary}`);
