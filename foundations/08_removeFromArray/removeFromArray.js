function removeFromArray(array, ...parameters) {
    let elementToControl;
    let arraySliced = array;
        for (let i=0; i<array.length; i++){
            elementToControl = array[i];
            console.log("l'elemento è "+elementToControl);
            for (element of parameters){
                if (elementToControl === element){
                arraySliced= arraySliced.filter((element) => element!== elementToControl); 
                console.log("guarda che bello questo array "+arraySliced);
                }
            }
        }
console.log(arraySliced);
return arraySliced;

}

// Do not edit below this line
module.exports = removeFromArray;
