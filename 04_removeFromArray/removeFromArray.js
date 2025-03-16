const removeFromArray = function(arr, ... sevValue) {

    // arr=[1, 2, 3, 4];
    // value=(2, 3);
    
   sevValue.forEach(value => {  //=> is function(value) {}
    let index;
        while((index = arr.indexOf(value)) != -1) {
            arr.splice(index, 1);
        
        // while (index < arr.length) {
        //     if (arr[index] === value) {
        //       arr.splice(index, 1);
        //     } else {
        //       ++index;
        //     }
        // }
        }
        })
        return arr;
}








// Do not edit below this line
module.exports = removeFromArray;
