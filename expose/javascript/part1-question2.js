
function sumValues(num1, num2, add){
    if(add){
        let result = 0;

        result = num1 + num2;

        console.log('values added: ', result);


    }else return;

    console.log('final result: ', result);
}

sumValues(10, 10, true);



/**
 * OUTPUT:
 * 
 * values added:  20
/Users/dilara/fa21-cse110-lab4/expose/javascript/part1-question2.js:13
    console.log('final result: ', result);
                                  ^

ReferenceError: result is not defined
    at sumValues (/Users/dilara/fa21-cse110-lab4/expose/javascript/part1-question2.js:13:35)
    at Object.<anonymous> (/Users/dilara/fa21-cse110-lab4/expose/javascript/part1-question2.js:16:1)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)
    at node:internal/main/run_main_module:17:47
 */