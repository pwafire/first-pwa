// Mulika...
mulika.debug = true;
mulika.start();

// Type check...
const votes = 12000;

mulika.typeCheck({type : 'number', value: votes});


// Other test....
function Add(a, b) {
    return a + b;
}

mulika.expect('sum to be 20', Add(11, 8), 20)