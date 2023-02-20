function abc()
{
const num1 = 1489;
const num2 = 714;

let carryString ="";
let sumString = "";
let result = {};

for(let i=0;i<4;i++)
{
    const num1Index = 3-i;
    const num2Index = 2-i;


    const sum = (num1%(10**(num1Index+1)-num1%(10**num1Index))/(10**num1Index)+(num2%(10**num2Index+1))-num2%(10**num2Index))/(10**num2Index);
   // console.log(sum);
}
}
const data = JSON.data(abc);
console.log(data);