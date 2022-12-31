let score1=50
console.log(typeof score1);
console.log(typeof(score1));

let score2="40"
console.log(typeof(score2));

//conversion in Number
let valueInNumber=Number(score2);
console.log(typeof(valueInNumber)); //number
console.log(valueInNumber);  //40

let score3="40abc"
let valueInNumber1=Number(score3);
console.log(typeof (valueInNumber));  //number
console.log(valueInNumber1); //NaN

let score4=null
let valueInNumber2=Number(score4);
console.log(typeof (valueInNumber2)); //number
console.log(valueInNumber2); //0

let score5=undefined
let valueInNumber3=Number(score5);
console.log(typeof(valueInNumber3));  //number
console.log(valueInNumber3);  //NaN

let score6=true
let valueInNumber4=Number(score6);
console.log(typeof(valueInNumber4)); //number
console.log(valueInNumber4); //1

let score7=false
let valueInNumber5=Number(score7);
console.log(typeof(valueInNumber5)); ////number
console.log(valueInNumber5);  //0

//conversion in boolean
let isLoggedIn=1
let booleanIsLogeedIn=Boolean(isLoggedIn);
console.log(booleanIsLogeedIn);  //true

let isLoggedIn1=0
let booleanIsLogeedIn1=Boolean(isLoggedIn1);
console.log(booleanIsLogeedIn1);  //false

let isLoggedIn2=""
let booleanIsLogeedIn2=Boolean(isLoggedIn2);
console.log(booleanIsLogeedIn2);  //false

//conversion in String
let someNumber=50
let stringNumber=String(someNumber);
console.log(stringNumber); //50
console.log(typeof(stringNumber)); //string
