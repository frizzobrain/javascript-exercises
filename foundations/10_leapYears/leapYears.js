//leap year return true when the year passed for parameter to the funcion
//can be divided by 4. if last 2 numbers of the year are 00, the year must be divided by 400
//to be considered leap year

//function leapYear (year)
//if number cant be divided by four
//return false
//else if last two numbers of the year are 00 && cant be divided by 400
// return false
//else return true

const leapYears = function(year) {
    if (year % 4 !=0)
        return false;
    else if (year % 100 == 0o0 && year % 400 !=0)
        return false;
    else return true;

};

// Do not edit below this line
module.exports = leapYears;
