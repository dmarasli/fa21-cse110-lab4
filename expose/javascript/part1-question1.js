
function sumValues(num1, num2, add){
    if(add){
        var result = 0;

        result = num1 + num2;

        console.log('values added: ', result);


    }else return;

    console.log('final result: ', result);
}

sumValues(10, 10, true);
sumValues(10, 10, false);


/**
 * OUTPUT:
 * 
 * values added:  20
 * final result:  20
 */