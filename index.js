function add(a=716, b){
    const result = a += b
    return result;
}

function subtract(a, b){
    const result = a -= b;
    return result;

}

function multiply(a, b){
    const result = a * b;
    return result;

}

function divide(a, b){
    const result = a/b;
    return result;

}

function increment(n){
    n++;
    return n;
}

function decrement(n){
    n--;
    return n;
}

function makeInt(n = ""){
    const result = parseInt(n.value, 10);
    return result;
}


