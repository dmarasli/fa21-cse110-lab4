
Q&A

1. What will happen at line 12 and why? If the code causes an error, explain why.
    prints:
    3

    since “var” has no block scope i is still legal outside of the for loop.

2. What will happen at line 13 and why? If the code causes an error, explain why.
    prints:
    150

    since “var” has no block scope discountedPrice is still legal outside of the for loop.

3. What will happen at line 13 and why? If the code causes an error, explain why.
    prints:
    150

    since finalPrice is a global variable it is still legal outside of the for loop.



4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.

    Nothing on the terminal since there is no log statement to print discounts.
    But in the array final prices are stores so [50, 100, 150]

5. What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
     
     error message since variable i is only legal in that for statement!

6. What will happen at line 13 and why? If the code causes an error, explain why
   
    error message since variable 'discountedPrice' is only legal in that for statement!

7. What will happen at line 14 and why? If the code causes an error, explain why.
   
   prints:
   150

   since finalPrice is a globalvariable we can use outside of the for block.

8. What will this function return? Give a brief explanation. If the code causes an error, explain why. 
    
    on the terminal it does not print anything since there is no print statement but the function succesfully calculates and pushes the correct numbers so discounted = [50 100 150].

9.  What will happen at line 11 and why? If the code causes an error, explain why.

        TypeError: Assignment to constant variable, we cannot reassign anything to a constant variable.

10.  What will happen at line 12 and why? If the code causes an error, explain why.

       prints 3 since it is a global variable and length of given prices array lentgth is 3.

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.

        on the terminal it does not print anything since there is no print statement but the function succesfully calculates and pushes the correct numbers so discounted = [50 100 150].

12. 
    1.  student.name
    2.  student['Grad year']
    3.  student.greeting()
    4.  student['Favorite Teacher'].name
    5.  student.courseLoad[0]
    
13. Arithmetic
‘3’ + 2 = 32   single quote and plus sign concat strings
‘3’ - 2 = 1  3 turns into a number
3 + null = 3    null has 0 value 
‘3’ + null = '3null' single quote and plus sign concat strings
true + 3 = 4  true has the value 1
false + null = 0  both false and the null have value of 0
'3' + undefined = 2  '3undefined' single quote and plus sign concat strings
'3' - undefined = NaN   ndefined is NaN as a number, not 0. (Not a actual number)

14. Comparison
    1. ‘2’ > 1  = true      b/c single literal 2 turns into number 2 
    2. ‘2’ < ‘12’ = false   b/c single literal 2 and 12 turns into numbers
    3. 2 == ‘2’  = true     b/c single literal 2 turns into number 2 
    4. 2 === ‘2’ = false    A strict equality operator === checks the   equality without type conversion, so it is false.
    5. true == 2 = false    b/c true equals to 1
    6. true === Boolean(2) = true     Everything without a value is always false but since 2 has a value of 2 then Boolean(2) equals to true and true === true so TRUE!


15. Explain the difference between the == and === operators.
      A strict equality operator === checks the equality without type conversion while == check with type conversion.

16. for (car in statistics) {
    if((car[0] == 'r' || statistics[car]%2 != 0) ){
        console.log(statistics[car]);
    }

}

17.  the modifyArray function will call doSomething method withinself to multipy each number by 2 and push them into newArr. So newArr will be [2,4,6] 

18. 
var intervalID = setInterval(myCallback, 1000);

function myCallback()
{
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
}

19. What is the output of the above code? (This should be in your part2.md)
    
1
4
3
2


 


 