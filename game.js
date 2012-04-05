// -----------------------------------
// aksjdflkasdf

var users = ['john', 
             'bill'];

var phone_book = {'john' : '415-232-1233', 
                  'bill' : '415-231-1232'};

var alphabetSounds  = {},
    alphabet        = 'abcdefghijklmnopqrstuvwxyz'.split( '' );

for( var i in alphabet ) {
    var letter = alphabet[ i ];
    alphabetSounds[ letter ] = letter;
//new buzz.sound('sounds/kid/'+ letter );
}

// [1,2,3,4,5]