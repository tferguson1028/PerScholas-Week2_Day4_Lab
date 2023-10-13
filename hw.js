/* Test Cases */
console.log("\n" + "-".repeat(20) + " Q1: Grade Message " + "-".repeat(20));
motivationalGrade(89);  // Expected Output: You did a good job! 
motivationalGrade(72);  // Expected Output: Keep trying... 
motivationalGrade(65);  // Expected Output: ehhhhhh~
motivationalGrade(56);  // Expected Output: Not to good.
motivationalGrade(50);  // Expected Output: Bad grade, but you'll get em next time.
motivationalGrade(-2);  // Expected Output: Please enter a positive numerical value to get a grade.

console.log("\n" + "-".repeat(20) + " Q2: Print Multiples of 10 " + "-".repeat(20));
printMultiples(58);     // Expected Output: 0, 10, 20, 30, 40, 50
printMultiples(256);    // Expected Output: 0, 10, 20, ..., 240, 250
printMultiples(1000);  // Expected Output: 0, 10, 20, ..., 990, 1000

console.log("\n" + "-".repeat(20) + " Q3: Quarters Returned " + "-".repeat(20));
receiptInQuarters(10, 5);   // Expected Output: 20
receiptInQuarters(8, 7);    // Expected Output: 4
receiptInQuarters(9.25, 2); // Expected Output: 29 
receiptInQuarters(9.29, 2); // Expected Output: 29

console.log("\n" + "-".repeat(20) + " Q4: Bills Returned " + "-".repeat(20));
receiptInBills(10, 5);    // Expected Output: 5
receiptInBills(10.89, 2); // Expected Output: 8
receiptInBills(18.89, 8); // Expected Output: 10

console.log("\n" + "-".repeat(20) + " Q5: FizzBuzz " + "-".repeat(20));
FizzBuzz(); // I'm not doing expected output for this one.


/* Functions */
// 1. Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

function motivationalGrade(gradeValue)
{
  let returnMessage = "";
  if (gradeValue >= 80)
  {
    returnMessage = "You did a good job!";
  }else if (gradeValue >= 70)
  {
    returnMessage = "Keep trying...";  
  }else if (gradeValue >= 60)
  {
    returnMessage = "ehhhhhh~";
  }else if (gradeValue >= 55)
  {
    returnMessage = "Not to good.";  
  }else if (gradeValue < 55 && gradeValue > 0)
  {
    returnMessage = "Bad grade, but you'll get em next time.";  
  }else
  {
    returnMessage = "Please enter a positive numerical value to get a grade.";
  }
  
  console.log(returnMessage);
}



// 2. Write a function that prints out multiples of 10 up to a given input (argument)
function printMultiples(upToValue)
{
  const multiples = 10;
  console.log(`Multiples of ${multiples} from 0 to ${upToValue}`);

  // let currentValue = 0;
  // while(currentValue < upToValue)
  // {
  //   console.log(currentValue);
  //   currentValue += multiples;
  // }
  
  for(let i = 0; i < upToValue; i += multiples)
  {
    console.log(i);
  }
}

// 3. Write a function that takes bill amount and item price and says how many quarters they'd get in return
function receiptInQuarters(amountPaid, itemCost)
{
  const quartersValue = 0.25;
  let numQuartersRet = 0;
  let amountReturned = amountPaid - itemCost;
  // console.log(`Quarters Returned (Math): ${(amountPaid-itemCost)/quartersValue}`);
  while(amountReturned >= quartersValue)
  {
    numQuartersRet++;
    amountReturned -= quartersValue; 
  }
  console.log(`Quarters Returned : ${numQuartersRet}`);
}

// 4.
// Write a function that prints out how many bills you would receive in change after paying a certain amount.
// Return in as large denominations as possible. Parameters should be amount paid and amount cost
function receiptInBills(amountPaid, itemCost)
{
  let billsReturned = 0;
  let difference = amountPaid - itemCost;
  for(billsReturned = 0; billsReturned <= difference-1; billsReturned++); // difference-1 accounts for left over cent
  
  console.log(`Bills returned: ${billsReturned}`);
}


// 5.
// Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, 
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz", 
// for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
function FizzBuzz() // Yay
{
  for(let i = 0; i < 100; i++)
  {
    let num = i+1;
    let message = "";
    if(num % 3 == 0) { message += "Fizz"; }
    if(num % 5 == 0) { message += "Buzz"; }
    
    if(message === "")
    {
      console.log(num);
    }else
    {
      console.log(message);
    }
  }
}

