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

console.log("Q1 - Total paid by each member:");
console.log(totalPaid(expenses, members));

//Question 2

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
console.log("Output:", test2);
console.log("Proof sum:", test2.reduce((acc, val) => acc + val, 0).toFixed(2));

// Question 3

function totalOwed(expenses, members){
  let output = {};

  members.forEach(member => {
    output[member] = 0;
  });

  expenses.forEach(({amount, participants}) => {
    let share = amount / participants.length;

    participants.forEach(participant => {
      output[participant] += share;
    });
  });

  return output;
}

console.log("Total each member owes:");
console.log(totalOwed(expenses, members));

//Question 4


function balances(paid, owed){
  let output = {};
  let members = Object.keys(paid);

  members.forEach(member => {
    output[member] = paid[member] - owed[member];
  });

  return output;
}

console.log("Q4 - net balance:");
let finalPaid = totalPaid(expenses, members);
let finalOwed = totalOwed(expenses, members);
console.log(balances(finalPaid, finalOwed));

//Question5


function balancesAddup(balancesObj) {
  let amounts = Object.values(balancesObj);
  let total = amounts.reduce((acc, val) => acc + val, 0);

  return total === 0;
}

console.log("Do the balances add up:");
let testBalances1 = { rahul: 140, aisha: 200, kabir: -340 };
console.log("Q5:");
console.log("Test1:" + balancesAddup(testBalances1));

let testBalances2 = { rahul: 140, aisha: 200, kabir: -300 };
console.log("Test2:" + balancesAddup(testBalances2));

//Question 6

function biggestSpender(totals) {
    
    let members = Object.keys(totals).sort(); 
    
    return members.reduce((champion, challenger) => {
        if (totals[challenger] > totals[champion]) {
            return challenger; 
        } else {
            return champion;
        }
    });
}

console.log("\nQ6 - Biggest spender:");

let testTotals1 = { rahul: 900, aisha: 960, kabir: 120 };
console.log("Input 1:", biggestSpender(testTotals1));

let testTotals2 = { rahul: 960, aisha: 960, kabir: 120 };
console.log("Tie-Breaker Test:", biggestSpender(testTotals2));

//Question 7

function byMember(expenses, memberName) {

    return expenses.filter(({ paidBy, participants }) => {
        
        let isPayer = paidBy === memberName;
        
        let isParticipant = participants.includes(memberName);
        
        return isPayer || isParticipant;
    });
}

console.log("\nQ7 - Filter expenses by member (kabir):");
console.log(byMember(expenses, "kabir"));


//Question 8

function search(expenses, searchTerm)
  {
    return expenses.filter(expense => {
    return expense.desc.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

console.log("Q8:");
console.log(search(expenses, "wi"));
console.log(search(expenses, "GAS"));

//Question 9

function filterExpenses(expenses, { member, search }) {
    return expenses.filter(expense => {

        let matchMember;

        if (member === null) {
            matchMember = true;
        } else {
            let isPayer = expense.paidBy === member;
            let isParticipant = expense.participants.includes(member);
            matchMember = isPayer || isParticipant;
        }

        let matchSearch;

        if (search === "") {
            matchSearch = true;
        } else {
            matchSearch = expense.desc.toLowerCase().includes(search.toLowerCase());
        }

        return matchMember && matchSearch;
    });
}

console.log("Q9:");
console.log(filterExpenses(expenses, { member: "rahul", search: "i" }));
console.log(filterExpenses(expenses, { member: null, search: "" }));

//Question 10

function summary(expenses) {

    let expenseCount = expenses.length;
    let totalAmount = expenses.reduce((total, expense) => {
      return total + expense.amount;
    }, 0);

    let averageAmount = totalAmount / expenseCount;

    let highestExpense = expenses.reduce((champion, challenger) => {
        if(challenger.amount > champion.amount){
      return challenger;
    }else{
      return champion;
    }
    });

    return {
        total: totalAmount,
        count: expenseCount,
        average: averageAmount,
        biggestSpender: highestExpense.paidBy
    };
}

console.log("Q10:");
console.log(summary(expenses));
