//basic math functions
//1) 'add()' is a valid function
function add(){
};


//2) 'subtract()' is a valid function
function subtract(){
};

//3) 'multiply()' is a valid function
function multiply(){
};

//4) 'divide()' is a valid function
function divide(){
};

//5) add(a, b) adds two numbers and returns the result
function add(a,b){
    return a + b;
};
add(350 , 357)

//6) subtract(a, b) subtracts b from a and returns the result
function subtract(a, b){
    return a - b;
};
subtract(967, 300)

//7) multiply(a, b) multiplies two numbers and returns the result
function multiply(a, b){
    return a * b;
};
multiply (2403, 1)

//8) divide(a, b) divides a by b and returns the result
function divide(a, b){
    return a / b;
};
divide(1.03064696 , 4)

//9) increment(n) increments n and returns the result
function increment (n){   
    return ++n 
};
increment(890)

//10) decrement(n) decrements n and returns the result
function decrement (n){
    return --n
};
decrement(203)

//makeInt(n)
//11) parses n as an integer and returns the parsed integer
function makeInt(n) {
    return n.toString()
};     
    makeInt("8");

 //12) assumes base 10
 
function makeInt(n) {
    return parseInt(n, 10)
};
makeInt('0x2328');
  
//13) returns NaN as appropriate
 
function makeInt(n){;
    return parseInt(n, 10)
};
makeInt('sldkjflksjf');
 

//preserveDecimal(n)
function preserveDecimal(n){
    return parseFloat(n)
};
preserveDecimal('2.222')
/* 
//14) preserves n's decimals (it parses n as a floating point number) and returns the parsed number
//15) returns NaN as appropriate

*/