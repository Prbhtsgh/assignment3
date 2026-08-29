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

function totalPaid(expenses, members){
  let output = {};


members.forEach(member => {
	output[member] = 0;
});

expenses.forEach(({paidBy, amount}) => {
	output[paidBy] += amount;
});

  return output;
};

//splitEvenly(100, 3)
//[33.34, 33.33, 33.33]
//

console.log("Q1 - Total paid by each member:");
console.log(totalPaid(expenses, members));

function splitEvenly(amount, parts){
  //leftover paisa is given to first n people in array

  let totalPaise = Math.round(amount * 100);
  let basePaise = Math.floor(totalPaise / parts);
  let remainder = totalPaise % parts;

  let shares = [];

  for(let i = 0; i < parts; i++)
  {
    let extra = (i < remainder) ? 1 : 0;

    shares.push((basePaise + extra) / 100);
  }
  return shares;
}

console.log("Q2: Split 100 by 3:");
let test1 = splitEvenly(100, 3);
console.log("Output", test1);

console.log("Proof sum:", test1.reduce((acc, val) => acc + val, 0).toFixed(2));

console.log("Q2: Split 90 by 3:");
let test2 = splitEvenly(90, 3);
console.log("Ouput:", test2);
console.log("Proof sum:", test2.reduce((acc, val) => acc + val, 0).toFixed(2));


