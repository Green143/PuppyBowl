let puppies = []
const allPuppies = document.querySelector('#allPuppies')
const singPup = document.querySelector('#singPup')

window.addEventListener("hashchange", () => { //to let user click on each puppy and view it , each time the # changes the eventlistener will update the page
    render()
})



async function getAllPuppies() {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310/players")
    const data = await response.json()

    puppies= data.data.players //my stored array of data inside puppies
    render()
} 

async function render() {
    const puppyPlayers = puppies.map((pup) =>{
        return`
        <h3>
        <br> <img src=${pup.imageUrl} width= 400px; height= 400px> </br> 
        <br> <a href=#${pup.name} class="pupName"> Name: ${pup.name}</a> 
        <br><a href=#${pup.breed} class="pupBreed"> Breed: ${pup.breed} </a> 
        <br><a href=#${pup.status} class="pupStatus"> Status: ${pup.status}</a> 
       `
    })
    allPuppies.innerHTML = puppyPlayers.join("")
    
    const name = window.location.hash.slice(1)
    

    const singlePup= puppyPlayers.find((pup)=>{
    return pup.name ===name
    
})
 //console.log(name) console logging the name shows that each time the user clicks the name of the puppy, it updastes the hash, and also is sending a message to the log of the specific puppy name.

allPuppies.innerHTML = singPup ? "":"<h1> All Puppy Bowl Players <h1>" +
/*if(singlePup) {
    const puppyData = await fetch(singlePup.url)
    const singlePupData = await puppyData.json()
    //console.log(singlePupData)
      }*/
}
getAllPuppies()




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// I want to create a function that randomly selects a football position for the puppy ie: Kicker (K), Running back (RB), Offensive Line, (OL) OffensiveTackle (OT), Center (C), Offensive Gaurd (OG), Quarterback (QB), Wide Receiver (WR), Defensive End(DE), Linebacker (LB)
// so when the user clicks a single puppy, their page will pop up with their position on it an their stats: age, weight, where they are from . 
//I want the app to be able to let the user make their own team roster , click on the puppy and add it to a list (bank)