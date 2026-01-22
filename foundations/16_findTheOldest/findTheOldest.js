function getAge (person){
    if (person.yearOfDeath){
        return (person.yearOfDeath-person.yearOfBirth);
    }else return ((new Date().getFullYear())-person.yearOfBirth);
}

const findTheOldest = function(arr) {
let people = arr.sort((a,b) => (getAge(b)-(getAge(a))));
console.log(people[0]);
if (people[0]){
    return people[0];
}else return people[1];
};

// Do not edit below this line
module.exports = findTheOldest;
