const accountId = 4233
let accountEmail = "vishal@gmail.com"
var accountPassword = "12345"
accountCity = "Kanpur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "vashu@.com"
accountPassword = "439"
accountCity = "kannauj"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])