
const players = [];

// function playerNames(arr){
//     const itemBody = document.getElementById('order-container');
//     // console.log(itemBody);
//     for (let i = 0; i < arr.length; i++) {
        
//         const orderedList = document.createComment('ol');
//         orderedList.innerHTML = `
//         <li>${arr}</li>
//         `
//         itemBody.appendChild(orderedList);
//         itemBody.innerText = orderedList;
//     }
// }

function addPlayers(name){
    const names = name.parentNode.parentNode.children[0].innerText;
    players.push(names);
    console.log(players);

    document.getElementById('order-container').innerText = names;
    // if(playersLength > 5){
    //     alert('you can not add more than 5')
    // }
    // playerNames(names);
}