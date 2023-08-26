// find the total player list count
// FOr bonus mark
function playerCounFunction() {
    const playerCountNode = document.querySelectorAll('li');
    const playerCount = playerCountNode.length;
    return playerCount;
}
// player 1 card
document.getElementById('btn-1').addEventListener('click', function () {
    const buttonDisable = document.getElementById('btn-1');
    buttonDisable.disabled = true;

    // set the player name to the selected V
    const player1Name = document.getElementById('player-1');
    const newadded1 = player1Name.innerText;

    // add the selected player into ul
    const counter = playerCounFunction();
    if (counter < 5) {
        const listedPlayer1 = document.getElementById('listedPlayer');
        const li = document.createElement('li');
        li.innerText = newadded1;
        listedPlayer1.appendChild(li);
        buttonDisable.style.backgroundColor = 'gray';
    }
    else {
        alert('You have clicked maximum number of player')
    }

})

// player 2 card
document.getElementById('btn-2').addEventListener('click', function () {
    const buttonDisable = document.getElementById('btn-2');
    buttonDisable.disabled = true;

    // set the player name to the selected V
    const player2Name = document.getElementById('player-2');
    const newadded2 = player2Name.innerText;

    // add the selected player into ul
    const counter = playerCounFunction();
    if (counter < 5) {
        const listedPlayer2 = document.getElementById('listedPlayer');
        const li = document.createElement('li');
        li.innerText = newadded2;
        listedPlayer2.appendChild(li);
        buttonDisable.style.backgroundColor = 'gray';
    }
    else {
        alert('You have clicked max player')
    }

})
//player 3 card
document.getElementById('btn-3').addEventListener('click', function () {
    const buttonDisable = document.getElementById('btn-3');
    buttonDisable.disabled = true;

    // set the player name to the selected V
    const player3Name = document.getElementById('player-3');
    const newadded3 = player3Name.innerText;

    // add the selected player into ul
    const counter = playerCounFunction();
    if (counter < 5) {
        const listedPlayer3 = document.getElementById('listedPlayer');
        const li = document.createElement('li');
        li.innerText = newadded3;
        listedPlayer3.appendChild(li);
        buttonDisable.style.backgroundColor = 'gray';
    }
    else {
        alert('You have clicked max player')
    }

})


// player 4 card
document.getElementById('btn-4').addEventListener('click', function () {
    const buttonDisable = document.getElementById('btn-4');
    buttonDisable.disabled = true;

    // set the player name to the selected V
    const player4Name = document.getElementById('player-4');
    const newadded4 = player4Name.innerText;

    // add the selected player into ul
    const counter = playerCounFunction();
    if (counter < 5) {
        const listedPlayer4 = document.getElementById('listedPlayer');
        const li = document.createElement('li');
        li.innerText = newadded4;
        listedPlayer4.appendChild(li);
        buttonDisable.style.backgroundColor = 'gray';
    }
    else {
        alert('You have clicked max player')
    }

})

// player 5 card

document.getElementById('btn-5').addEventListener('click', function () {
    const buttonDisable = document.getElementById('btn-5');
    buttonDisable.disabled = true;

    // set the player name to the selected V
    const player5Name = document.getElementById('player-5');
    const newadded1 = player5Name.innerText;

    // add the selected player into ul
    const counter = playerCounFunction();
    if (counter < 5) {
        const listedPlayer1 = document.getElementById('listedPlayer');
        const li = document.createElement('li');
        li.innerText = newadded1;
        listedPlayer1.appendChild(li);
        buttonDisable.style.backgroundColor = 'gray';
    }
    else {
        alert('You have clicked max player')
    }

})

// player 6 card

document.getElementById('btn-6').addEventListener('click', function () {
    const buttonDisable = document.getElementById('btn-6');
    buttonDisable.disabled = true;

    // set the player name to the selected V
    const player6Name = document.getElementById('player-6');
    const newadded6 = player6Name.innerText;

    // add the selected player into ul
    const counter = playerCounFunction();
    if (counter < 5) {
        const listedPlayer6 = document.getElementById('listedPlayer');
        const li = document.createElement('li');
        li.innerText = newadded6;
        listedPlayer6.appendChild(li);
        buttonDisable.style.backgroundColor = 'gray';
    }
    else {
        alert('You have Select maximum number of Player')
    }

})

// Take first user input for calculate total player cost

let playerCost = 0;
document.getElementById('calculate').addEventListener('click', function () {
    const counter = playerCounFunction();

    const costRateTag = document.getElementById('perPlayer');
    const costRate = parseInt(costRateTag.value);

    // // now multiplication of input ammout and total number of plaers

    const totalPlayerCost = costRate * counter;
    const totalPlayerElement = document.getElementById('TotalPlayersAmount');
    totalPlayerElement.innerText = totalPlayerCost;
    playerCost = totalPlayerCost;
    
})

// take manager and coach input from user and set final calculation for total cost for team

document.getElementById('calculateTotal').addEventListener('click', function () {


    const managerRateTag = document.getElementById('manager');
    const managerRate = parseInt(managerRateTag.value);

    const coachRateTag = document.getElementById('coach')
    const coachRate = parseInt(coachRateTag.value);

    const Total = managerRate + coachRate + playerCost;

    // // now add the stuffs cost and player cost (total cost of amount)

    const TotalCostIsTag = document.getElementById('totalPriceIs');
    TotalCostIsTag.innerText = Total;
    console.log(typeof Total, Total);
})
