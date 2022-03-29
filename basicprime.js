const primeNum=(array)=>{
    const NumArray=[]
    for(let i=0;i<array.length;i++)
    {
        let divide=parseInt(array[i]/2)
        let isPrime=true
        for(let dividant=2;dividant<=divide;dividant++){
           if(array[i]%dividant==0)
           {
              isPrime=false
           } 
        }
        if(isPrime)
        {
            NumArray.push(array[i])
        }
    }
    return NumArray
}

console.log(primeNum([1,2,3,4,5,6,7,8,9,10,13]))
