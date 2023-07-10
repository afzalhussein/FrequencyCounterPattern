function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    return validateFrequencySame( populateObjectFromArray( arr1 ), populateObjectFromArray( arr2 ) );
}

function validateFrequencySame( frequency1, frequency2 ) {
    for(let key in frequency1){
        if ( !( key ** 2 in frequency2 ) || ( frequency2[ key ** 2 ] !== frequency1[ key ] ) ) {
            return false;
        }
    }
    return true;
}

function populateObjectFromArray( arr ) {
    let frequencyCounter = {}
    for ( let val of arr ) {
        frequencyCounter[ val ] = ( frequencyCounter[ val ] || 0 ) + 1;
    }
    console.log( frequencyCounter );
    return frequencyCounter;
}
console.log( same( [ 1, 2, 3, 2, 5 ], [ 9, 1, 4, 4, 25 ] ) );
