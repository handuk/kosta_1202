const fs = require('fs');
fs.readFile('list.txt', 'utf-8', (err, data) => {
    if(err){console.log(err)}
    let list = JSON.parse(data);
    list.sort((a,b) => b.price - a.price);
    console.log(list[0])
})