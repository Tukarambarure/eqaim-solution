function findSmallerDigitNumber(num)
{
    // two digits or more
    if(num<10)
    {
        console.log("Error:Please eenter a number with two or more");
        return;
    }
    let leftDigit = Math.floor(num/10);
    let midDigit = Math.floor(num%10);
    let rightDigit = Math.floor(num%10);

    if(leftDigit<midDigit<rightDigit)
    {
        console.log(`${num} is a valid two or more digit number with left digit smaller than right digit`);
    }
    else{
        console.log(`${num} is not a valid number`);
    }
    
}
findSmallerDigitNumber(975); 


function count1(n)
{
    let count = 0;
    for(let i=18;i<=n;i++)
    {
        let leftDigit1 = Math.floor(i/10);
        let midDigit1 = Math.floor(i/10);
        let rightDigit1 = Math.floor(i/10);

        if(leftDigit1<midDigit1<rightDigit1)
        {
            count++;
        }
    }
    console.log("the number of two digit numbers with on the left smaller than right is "+count);
}
count1(189)