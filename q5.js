// Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
// recursion. Test the function with different inputs.
const fact =(num)=>{
    if(num==0)
        return 1
    else
        return num*fact(num-1)
}
console.log(fact(5))
