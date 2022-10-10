const removeFromArray = function(array, ...removals) {
    for(let i = 0; i < removals.length; i++) {
        removalIndex = array.indexOf(removals[i])
            if (removalIndex != -1) {
                array.splice(removalIndex,1)
            }    
        }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
