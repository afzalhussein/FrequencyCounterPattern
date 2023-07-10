function valid_anagram( str1, str2 ) {
    if ( str1.length !== str2.length ) return false;
    const [frequencyCounter1, frequencyCounter2] = compare( str1, str2 );

    for ( let key in frequencyCounter1 ) {
        if (frequencyCounter2[ key ] !== frequencyCounter1[ key ]) {
            return false;
        }
    }
    return true;
}
function compare( str1, str2 ) {
    return [arrToObjectWithFrequency( str1 ),  arrToObjectWithFrequency( str2 ) ];
}
function arrToObjectWithFrequency( str ) {
    let frequencyCounter = {};
    for ( let char in str ) {
        frequencyCounter[ str[ char ] ] = ( frequencyCounter[ str[ char ] ] || 0 ) + 1;
    }
    return frequencyCounter;
}

console.log( valid_anagram( "", "" )) ;
console.log( valid_anagram( "aaz", "zza" ) );
console.log( valid_anagram( "anagram", "anagram" ) );
console.log( valid_anagram( "rat", "car" ) );
console.log( valid_anagram( "awesome", "awesom" ) );
console.log( valid_anagram( "qwerty", "qeywrt" ) );
console.log( valid_anagram( "texttwisttime", "timetwisttext" ));
