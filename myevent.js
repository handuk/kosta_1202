process.on('exit', (event) => {
    console.log(event)
    console.log('process exit event.')
})
process.emit('exit');
console.log('end of program')