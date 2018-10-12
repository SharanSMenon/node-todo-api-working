const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
var data = {
    id: 10
}
var token = jwt.sign(data, '123abc');
console.log(token);
var decoded = jwt.verify(token, '123abc')
console.log(decoded)

// var message = 'I am user no. 3'
// var hash = SHA256(message).toString();
// var hash2 = SHA256(message).toString()
// console.log(hash);
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
// // token.data.id = 5;
// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString()
// if (resultHash == token.hash) { 
//     console.log("Data was not changed")
// } else {
//     console.log('Data was changed');
    
// }

