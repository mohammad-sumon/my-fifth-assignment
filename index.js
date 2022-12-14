
const players = [];

let count = 0;
function addPlayers(name){
    count++;

    const nameButton = name;
    nameButton.disabled = true;

    const names = name.parentNode.parentNode.children[0].innerText;

    if(players.length < 5){
        const previousOrderContainer = document.getElementById('order-container');
        const newOrderList = document.createElement ('ol');
        newOrderList.innerHTML = `
        <ol><li>${count + '. ' + names}</li></ol>
        `;
        previousOrderContainer.appendChild(newOrderList);
    
        players.push(names);
    }
    else{
        alert('You can not add more than five players');
        return;
    }
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerInput = document.getElementById('per-player-input');
    const perPlayerInputValue = perPlayerInput.value;
    const perPlayerInputValueTotalString = parseFloat(perPlayerInputValue);

    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesValue = playerExpenses.innerText;
    const playerExpensesValueTotalString = parseFloat(playerExpensesValue);

    const totalPlayerExpenses = perPlayerInputValueTotalString * players.length;
    playerExpenses.innerText = totalPlayerExpenses;
    
    if(perPlayerInputValueTotalString === 0){
        alert('Please enter a valid number');
    }
    else if(players.length === ''){
        alert('Please enter your desired player');
    }
    else if(players.length > 5){
        alert('Please do not add more than five players');
        playerExpenses.innerText = ''; 
    }
})

document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const managerInput = document.getElementById('manager-input');
    const managerInputValue = managerInput.value;
    const managerInputTotalString = parseFloat(managerInputValue);

    const coachInput = document.getElementById('coach-input');
    const coachInputValue = coachInput.value;
    const coachInputTotalString = parseFloat(coachInputValue);

    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesValue = playerExpenses.innerText;
    const playerExpensesValueTotalString = parseFloat(playerExpensesValue);

    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesValue = totalExpenses.innerText;
    const totalExpensesString = parseFloat(totalExpensesValue);

    totalExpenses.innerText = playerExpensesValueTotalString + managerInputTotalString + coachInputTotalString;
})


// extra recommended works for validation
const allInputFields = document.querySelectorAll('input.input-bordered');
for (const input of allInputFields) {
    input.addEventListener('input', function(){
        console.log(input.value);

        if(isNaN(input.value)){
            window.alert('Please enter a valid number');
            input.value = '';
        }
        
    })
}