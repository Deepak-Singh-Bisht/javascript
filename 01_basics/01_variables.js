const accountId=12344
let accountEmail="abc@gmail.com"
var accountPassword="12345"
accountCity="lucknow"
let accountState;

// accountId=3 //not allowed
/* prefer not to use var 
because of issue in block scope and functional scope */

console.log(accountId)
accountEmail="xyz@gmail.com"
accountPassword=72154
accountCity="jaipur"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])