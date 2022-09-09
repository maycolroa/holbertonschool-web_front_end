function countPrimeNumbers () {
    let int = 0;
    for (i = 2; i <= 100; i++) {
        if (i % 2 != 0 && i % 3 != 0 && i % 5 !=0) {
            int += 1;
        }
    }
    return int;
}
let time_1 = performance.now ();
for (i = 0; i < 100; i ++) {
    countPrimeNumbers ();
}
let time_2 = performance.now ();
let time_t = time_2 - time_1;

console.log(`Execution time of calculating prime numbers 100 times was ${time_t} milliseconds.`);
