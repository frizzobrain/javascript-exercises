const fibonacci = function(num) {
let sum=0;
let first = 0;
let second = 1;
if (num==0) return 0;
if (num<0) return "OOPS";
for (let i=0; i+1<parseInt(num); i++){
    sum = first + second;
    console.log(sum);
    first= second;
    console.log(first);
    second = sum;
    console.log(second);
}
return second;
};

// Do not edit below this line
module.exports = fibonacci;
