
function mergeArray(arr1, arr2) {
    if (typeof arr1 === 'string' || typeof arr2 === 'string') {
        return "not good"
    }
    if (arr1.length == 0) {
        return arr2;
    }
    if (arr2.length == 0) {
        return arr1;
    }
    let arr1_Item = arr1[0];
    let arr2_Item = arr2[0];
    let mergedArray = [];
    let i = 1;
    let j = 1;
    while (arr1_Item || arr2_Item) {
        console.log(arr1_Item, arr2_Item);
        if (!arr2_Item || arr1_Item < arr2_Item) {
            mergedArray.push(arr1_Item)
            arr1_Item = arr1[i]
            i++;
        } else {
            mergedArray.push(arr2_Item)
            arr2_Item = arr1[j]
            j++;
        }
    }
    return mergedArray;


}

console.log(mergeArray([0, 3, 4, 31], [4, 6, 30]))

// most all item in array is string ? yes / no
// do any one from array can be empty or have alwayes data ? yes /no 
