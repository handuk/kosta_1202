var count=1;
function add(){
    count++;
}
add();
add();
console.log(count);
var addclosure = (function(){
    var localcount = 1;
    return function(){
        return localcount ++;
    }
})();

console.log(addclosure());
console.log(addclosure());
addclosure();
console.log(addclosure());
