const  inreverse=(array)=>
{
    let length=array.length-1;
        for(let i=parseInt(array.length/2)-1;i>=0;i--)
        {     
            let firstIndex=length-i;
            let lastIndex= array[i];
            array[i]=array[firstIndex]
            array[firstIndex]=lastIndex;        
        }
         return array
  
}
console.log(inreverse([1,2,3,4,5,6]))
