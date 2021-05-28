//amount to be transferred as input
function amountAcceptable(amount){
    if (amount===null || amount==='' || amount=== undefined){
        console.log('please enter amount')

    }else if(isNaN(amount)===true){
        console.log('please enter a numeric figure')
    }else if(amount < 1)
    {
        console.log('Negative input is not acceptable.kindly enter a positive amount')
    }else{
        if(amount <=5000){
            console.log('your commision is #10');
        }
        else if(amount <=50000){
            console.log('your commision is #25');
        }else if(amount >=50000){
            console.log('your commision is #50');
        }
    }
    
} 
export {amountAcceptable};