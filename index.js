let players = [];
const playerslist = document.querySelector('ul');


function render(){
    const html = players.map(function(player){
        console.log(player);
        return `
        <li>
       <h5> ${ player.name } </h5>
       ${ player.breed }
       ${ player.status } 
        </li>
        `;
    }).join('');
    playerslist.innerHTML = html;
}

render();

async function fetchPlayers(){
    try{
        const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-AM/players');
        const json = await response.json();
        players = json.data;
        render();
    }
    catch(error){
        console.log(error);
    }
}

fetchPlayers();