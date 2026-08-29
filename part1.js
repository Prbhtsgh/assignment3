//const members = ["rahul", "aisha", "kabir"];
//
//const expenses = [
//  { id: 1, desc: "Milk", amount: 60,  paidBy: "rahul", participants: ["rahul", "aisha", "kabir"] },
//  { id: 2, desc: "Gas",  amount: 960, paidBy: "aisha", participants: ["rahul", "aisha", "kabir"] },
//  { id: 3, desc: "Wifi", amount: 840, paidBy: "rahul", participants: ["rahul", "aisha"] }
//];
//
//totalPaid(expenses, members)
//
// { rahul: 900, aisha: 960, kabir: 0 }

const members = ["rahul", "aisha", "kabir"];

const expenses = [
  { id: 1, desc: "Milk", amount: 60,  paidBy: "rahul", participants: ["rahul", "aisha", "kabir"] },
  { id: 2, desc: "Gas",  amount: 960, paidBy: "aisha", participants: ["rahul", "aisha", "kabir"] },
  { id: 3, desc: "Wifi", amount: 840, paidBy: "rahul", participants: ["rahul", "aisha"] }
];

let output = {};

members.forEach(member => {
	output[member] = 0;
});

expenses.forEach(({paidBy, amount}) => {
	output[paidBy] += amount;
});

console.log(output);

