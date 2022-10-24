# var declaration
1. values added: 20
2. final result: 20
3. values added: 20
4. It returns an error, because since result is declared by let, and it 
   only can be accessed within the if loop. It can not be called outside the loop.
5. It returns an error, because result is a constant value, it cannot be reassigned.
6. It returns an error, because since result is declared by let, and it 
    only can be accessed within the if loop. It can not be called outside the loop.


# part2
1. 32, because it will display the value of i, and i < prices.length (3) and i++. Therefore, i will stop at 3 and exit the for loop.
2. 150, discounterPrice = 300*0.5=150.
3. 150, finalPrice = Math.round(150*100)/100 = 150.
4. It will return [50, 100, 150], because it pushes 100*0.5, 200*0.5, 300*0.5 to
   the array, and it will return [50, 100, 150].
5. It will give an error, because i is not defined in the function scope, it is
   only existed in the for loop scope.
6. It will give an error, because discountedPrice is not defined in the function scope, it is defined by let, and only existed in the for loop scope.
7. 150, finalPrice = Math.round(150*100)/100 = 150. finalPrice is a function
   scope variable.
8. It will return [50, 100, 150], because discounted pushes 100*0.5, 200*0.5, 
   300*0.5 to the array, and it will return [50, 100, 150]. It is also declared in the function, so it is fine to call it in line 16.
9. It will give an error, because i is not defined in the function scope, it is 
    defined by let in the for loop, and only existed in the for loop scope.
10. It will print out 3, because length is a constant which is equal to prices
    length (3), and its scope is in the function scope.
11. It will return [], because it is a constant variable, it cannot be changed
    after it is initialized, so it will return the initialization which is [].