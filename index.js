
const players = [];
let count = 0;
function addPlayers(name){
    count++;
    const nameButton = name;
    nameButton.disabled = true;
    const names = name.parentNode.parentNode.children[0].innerText;
    // console.log(names);
    // players.push(names);
    // console.log(players.length);
    // playerNames();

    const previousOrderContainer = document.getElementById('order-container');
    const newOrderList = document.createElement ('ol');
    newOrderList.innerHTML = `
    <ol><li>${count + '. ' + names}</li></ol>
    `
    previousOrderContainer.appendChild(newOrderList);
    
    players.push(names);
    console.log(players.length);
    if(players.length > 5){
        alert('You can not add more than five players');
        previousOrderContainer.innerText = '';
    }

}

document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerInput = document.getElementById('per-player-input');
    const perPlayerInputValue = perPlayerInput.value;
    const perPlayerInputValueTotalString = parseFloat(perPlayerInputValue);
    console.log(perPlayerInputValueTotalString);

    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesValue = playerExpenses.innerText;
    const playerExpensesValueTotalString = parseFloat(playerExpensesValue);
    console.log(playerExpensesValueTotalString);

    const totalPlayerExpenses = perPlayerInputValueTotalString * players.length;
    playerExpenses.innerText = totalPlayerExpenses;
    
    if(perPlayerInputValueTotalString === 0){
        alert('Please enter your desired players');
    }
    else if(players.length === ''){
        alert('Please enter your desired player');
    }
    else if(players.length > 5){
        alert('Please do not add more than five players');
        playerExpenses.innerText = ''; 
    }
    // else if(perPlayerInputValueTotalString !== 'number'){
    //     alert('Please enter a valid number');
    // }
})

document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const managerInput = document.getElementById('manager-input');
    const managerInputValue = managerInput.value;
    const managerInputTotalString = parseFloat(managerInputValue);
    console.log(managerInputTotalString);

    const coachInput = document.getElementById('coach-input');
    const coachInputValue = coachInput.value;
    const coachInputTotalString = parseFloat(coachInputValue);
    console.log(coachInputTotalString);

    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesValue = playerExpenses.innerText;
    const playerExpensesValueTotalString = parseFloat(playerExpensesValue);
    console.log(playerExpensesValueTotalString);

    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesValue = totalExpenses.innerText;
    const totalExpensesString = parseFloat(totalExpensesValue);
    console.log(totalExpensesString);
    totalExpenses.innerText = playerExpensesValueTotalString + managerInputTotalString + coachInputTotalString;
})