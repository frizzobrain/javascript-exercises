//create a function that takes 2 numbers as it's parameters
//it must sum all the number between this two, including them and then return the sum

//funcion sumAll (a,b)
//if a > b the iteration goes from a to b incrementing by 1)
//else the iteration goes from b to a incrementing by 1
//each iteration add to sum the current value of the iterator
//when it exits from the loop, it returns the sum value

const sumAll = function(valStart, valFinish) {
    let iterator;
    let sum=0;
    if (valStart<0 || 
        valFinish<0 || 
        !Number.isInteger(valStart) ||
        !Number.isInteger(valFinish))
        return "ERROR";
    //add a check to see if parameters are integer also
    if (valStart<= valFinish){
        for (iterator=valStart; iterator<=valFinish; iterator++){
            //console.log("iterator value" + iterator);
            sum+=iterator;
        }

    } else {
        for (iterator=valFinish; iterator<=valStart; iterator++){
            sum+=iterator;
        }
    }
return sum;

};

// Do not edit below this line
module.exports = sumAll;
