let players = [];
const playersList = document.querySelector('ul');

window.addEventListener('hashchange', function(){
    render();
});

function render(){
    const hash = window.location.hash;
    const id = hash.slice(1)*1;
    let filtered = players;
    if(id){
        filtered = filtered.filter(function(player){
            return player.id === id; 
        });
    }

    const html = filtered.map(function(player){
     return `
        <li>
        <h2><a href='#${player.id}'>${ player.name }</a></h2>
        <h4>Breed: ${ player.breed } </h4>
        <img src='${ player.imageUrl }' />
        </li>
        `;
    }).join('');
    playersList.innerHTML = html;
}
render();

async function fetchPlayers(){
    try{
       const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-AM/players');
       const json = await response.json();
       players = json.data.players;
       render();
    }
    catch(error){
        console.log(error);
    }
}

fetchPlayers();

//${ player.breed }
//<img src='${ player.imageUrl }' />
