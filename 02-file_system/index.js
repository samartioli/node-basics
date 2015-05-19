var fs = require('fs');


/* Asynchronous */

fs.readFile('./test.txt', function(err, data) {
    console.log('Asynchronous: %s', data);
})

// fs.readFile('./test.txt', {encoding: 'utf8'}, function(err, data) {
//     console.log('Asynchronous with encoding: %s', data);
// })


/* Synchronous */

// var data = fs.readFileSync('./test.txt', {encoding: 'utf8'});
// console.log('Synchronous: %s', data);