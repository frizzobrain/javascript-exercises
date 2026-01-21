const palindromes = function (string) {
const punctuationless = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'\s]/g, "");
const array = punctuationless.toLowerCase().split("");
let boo = false;
    for (let i=0; i<(array.length)/2; i++){
        if (array[i]==array[(array.length)-1-i]){
            boo=true;
        }else {
            return false;}
    }
return boo;
};

// Do not edit below this line
module.exports = palindromes;
