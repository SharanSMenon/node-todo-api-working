const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var password = '123abc!';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash)
    })
})
var hashedPassword = "$2a$10$NEz3WxWzL0TMzx9tPlfXi.k61QgBUsif3JD0hKPrTaBxTl3NXZjum"
bcrypt.compare('123abc!', hashedPassword, (err, res) => {
    console.log(res)
})
// var data = {
//     id: 10
// }
// var token = jwt.sign(data, '123abc');
// console.log(token);
// var decoded = jwt.verify(token, '123abc')
// console.log(decoded)

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

