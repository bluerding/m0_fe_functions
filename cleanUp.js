// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1: I changed nothing here. I see proper use of indentations and brackets. The code ran with no changes.
function nameQuestion() {
  console.log("Hello, what is your name?")
}

nameQuestion()


// EX 2: I indented lines 20/21, added a semicolon to line 20, and pushed the bracket in 22 to the left. The code ran after changes.
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3: I changed func to function in line 29. The code ran after changes
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();


//  EX 4: Moved the close parenthesis before the period in line 46
// Moved the opening bracket up to 42 and moved the one in 47 to the left. Realinged either 43 or 44, I dont remember which.
function average(num1, num2) {
var sum = num1 + num2;
var avg = sum / 2;

console.log(`the average is: ${avg}`)
}