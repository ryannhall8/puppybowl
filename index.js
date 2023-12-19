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
   // console.log(player);
     return `
        <li>
        <h5><a href='#${player.id}'>${ player.name }</a></h5>
        ${ player.breed }
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
       //console.log(json.data.players);
       render();
    }
    catch(error){
        console.log(error);
    }
}

fetchPlayers();

//<img src='${ player.imageUrl }' />
