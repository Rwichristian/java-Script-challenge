

const  palin=(word)=>{
    let letter=word.split('');
    let neword='';
    for(let i=letter.length-1;i>=0;i--)
    {
         neword+=letter[i];
    }
    if(word.toLowerCase()==neword.toLowerCase())
    {
        return true
    }
    else 
    {
        return false
    }
 }
 console.log(palin("refer"))
 