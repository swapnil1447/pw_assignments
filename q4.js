function outer(){
    const data ={num:0.2}
function tax(value){
    return (value*data.num)
}
return tax
}

const result = outer();

console.log("tax for income 1", result(2000))
console.log("tax for income 2", result(3000))