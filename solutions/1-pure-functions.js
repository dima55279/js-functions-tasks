// BEGIN
const checkPrime = (num) => {
    let i = 2;
    if (num <= 1) {
        return false;
    }
    while (i <= Math.round(Math.sqrt(num))) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }
    return true;
};
const sayPrimeOrNot = (num) => {
    if (checkPrime(num) === true) {
        return console.log('yes');
    }
    return console.log('no');
}
export default sayPrimeOrNot;
// END