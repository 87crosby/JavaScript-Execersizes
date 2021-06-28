function printOdd(){
    for(i=1;i<20;i+=2){
        console.log(i)
    }
}

//printOdd()

function decreaseMultiples(){
    for(i=100;i>0;i--){
        if(i%3==0){
            console.log(i)
        }
    }
}

//decreaseMultiples()

function printSequence(){
    for(i=4;i>-4;i-=1.5){
        console.log(i)
    }
}

//printSequence()

function sigma(){
    var sum = 0
    for(i=1;i<101;i++){
        sum += i
    }
    console.log(sum)
}

//sigma()

function factorial(num){
    if(num==1){
        return num
    }
    else{
        return num * factorial(num-1)
    }
}

console.log(factorial(12))