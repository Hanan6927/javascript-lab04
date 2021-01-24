var accounts = [50, 346, 789, 500, 694]

function deposit(amount, accNum){
    accounts[accNum] += amount
    alert("Deposited to : " + accNum + " Deposited Amount: " + amount + " total balance : " + accounts[accNum])
    return true
}

function withdraw(amount, accNum){
    if (amount < accounts[accNum]){
        if(amount < 200){
            accounts[accNum] -= amount
            alert("Withdrawn from : "+ accNum + " Withdrawn Amount: " + amount + " total balance : " + accounts[accNum])
            return true
        }else{
            alert("you cannot withdraw more than 200 ETB")
        }
    } else{
        alert("No enough Money to withdraw")
    }
    return false
}

function balance(accNum){
    alert("Your Balance is " + accounts[accNum])
}

function transfer(from, to, amount){
    if (withdraw(amount, from)){
        deposit(amount, to)
    }
}

(
    function(){
        service = parseInt(prompt("What do you want to do today: \n 1: Deposit \n 2: Withdraw \n 3: Balance \n 4: Transfer"))
        console.log(accounts)
        switch (service) {
            case 1:
                deposit(parseInt(prompt("Enter amount: ")), parseInt(prompt("Enter account Number")));
                break;
            case 2:
                withdraw(parseInt(prompt("Enter amount: ")), parseInt(prompt("Enter account Number")));
                break;
            case 3:
                balance(parseInt(prompt("Enter account Number")));
                break;
            case 4:
                transfer(parseInt(prompt("Enter account to transfer from Account Number: ")),parseInt(prompt("Enter account to deposit into Account Number: ")), parseInt(prompt("Enter amount: ")));
                break;
            default:
                alert("Invalid Input");
                break;
        }
    }
)();