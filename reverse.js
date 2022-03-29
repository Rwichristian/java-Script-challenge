const  reverse=(array)=>
{
    
    let NumArray=[];
    for(let i=array.length-1;i>=0;i--)
    {
            NumArray.push(array[i])
    }
     return NumArray

}
console.log(reverse([1,6,4,9,0]))
