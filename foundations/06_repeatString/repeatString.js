function repeatString(word, times) {
    let string= '';
    if (times<0)
        return "ERROR";
    for (let counter=0; counter<times; counter++){
        string += word;
    }
    return string
    }



// Do not edit below this line
module.exports = repeatString;
