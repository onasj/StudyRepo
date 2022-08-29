// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let arr1 = [
    ["PENNY", 0.01], 
    ["NICKEL", 0.05], 
    ["DIME", 0.10], 
    ["QUARTER", 0.25], 
    ["ONE", 1.00], 
    ["FIVE", 5.00], 
    ["TEN", 10.00], 
    ["TWENTY", 20.00], 
    ["ONE HUNDRED", 100.00]
    ]
  let arr2 = [
    ["PENNY", 0], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 0], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]
  ]
  let totalChange = arr2.reverse()
  let currency = arr1.reverse()
  let cashReg = [...cid].reverse()
  let totalCash = Math.round(cid.reduce((a, b) => a + b[1], 0)*100)/100
  if (change === totalCash){
    return {status: "CLOSED", change: cid}
  } else {
    for (let i = 0; i < cashReg.length; i++){
      if (change >= currency[i][1] && cashReg[i][1] !== 0){
        change = Math.round((change - currency[i][1])*100)/100
        cashReg[i][1] -= currency[i][1]
        totalChange[i][1] += currency[i][1]
        i -= 1
      }
    }
    let retChange = totalChange.filter(a => a[1] !== 0)
    let retTotal = retChange.reduce((a,b) => a + b[1], 0)
    if (retTotal < change){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else {
      return {status: "OPEN", change: retChange}
    }
  }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));