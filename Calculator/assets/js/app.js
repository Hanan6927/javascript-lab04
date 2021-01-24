function add2(a,b){
    return a+b
}

function addMultiple(arr){
    sum = 0
    for(let i=0;i< arr.length;i++){
        sum += arr[i]
    }
    return sum
}

function sub(a,b){
    return a-b
}


function mult(a,b){
    return a*b
}

function multiplyMultiple(arr){
    let product = 1

    for(let i=0;i< arr.length;i++){
        product = product * arr[i]
    }
    return product
}

function div(a,b){
    return a/b
}

(function(){
    let a;
    let b;
    let service = parseInt(prompt("What you want to do today: \n 1: Add 2 numbers \n 2: add multiple numbers \n 3: Subtract \n 4: multiply 2 numbers \n 5: multiply multiple numbers \n 6: Divide 2 numbers:  "));
    switch (service) {
        case 1:
            alert(add2(parseInt(prompt("Enter first Number: ")),parseInt(prompt("Enter second Number: "))))
            break;
        case 2:
            let length = prompt("Enter the number of Numbers you want to add: ")
            array = new Array()
            for(let i=0; i<length; i++){
                array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
            } 
            alert(addMultiple(array))
            break;
        case 3:
            alert(sub(parseInt(prompt("Enter first Number: ")) ,parseInt(prompt("Enter second Number: "))))
            break;
        case 4:
            alert(mult(parseInt(prompt("Enter first Number: ") ),parseInt(prompt("Enter second Number: "))))
            break;
        case 5:
            var nums = prompt("Enter the number of Numbers you want to multiply: ")
            array = new Array()
            for(let i=0; i<nums; i++){
                array[i] = parseInt(prompt("Enter Number("+(i+1)+"): "));
            }
            alert(multiplyMultiple(array))
            break;
        case 6:
            let a = prompt("Enter first Number: ") 
            let b = prompt("Enter second Number: ")
            if (b == 0){alert("Wrong input second number cannot be zero(0)")}
            else{
                alert(div(a,b))
            }
            break;
        default:
            alert("Invalid input")
            break;
    }

})();