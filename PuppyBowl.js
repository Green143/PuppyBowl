let puppies = []
const allPuppies = document.querySelector('#allPuppies')
const singPup = document.querySelector('#singPup')
const allPupPlayers = document.querySelector('#allPupPlayers')


window.addEventListener("hashchange", () => { //to let user click on each puppy and view it , each time the # changes the eventlistener will update the page
    render()
})

async function getAllPuppies() {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310/players")
    const data = await response.json()

    puppies= data.data.players //my stored array of data inside puppies
    render()
} 

function render() {
    const puppyPlayers = puppies.map((pup) =>{
        return`
        <center><h3>
        <br> <img src=${pup.imageUrl} width= 400px; height= 400px> </br>
        <br> <div><a href=#${pup.name} class="pupName"> Name: ${pup.name}</a> </div>
        <br><a> Breed: ${pup.breed} </a> 
        <br><a> Status: ${pup.status} </a></center>
       `
    })
    allPuppies.innerHTML = puppyPlayers.join("")
    
    const name = window.location.hash.slice(1)

    const singlePup= puppies.find((pup)=> {
        return pup.name === name
    }) 
    if (singlePup){

        singPup.innerHTML = `
       <center> <h2>
        <br> <img src=${singlePup.imageUrl} width= 400px; height= 400px> </br> 
        <br> <a> Name: ${singlePup.name}</a>
        <br><a> Breed: ${singlePup.breed} </a> 
        <br><a> Status: ${singlePup.status} </a> 
        <div> <a class="Return" href =#> Return to Players </a> </div></center>

       `
    } else{
        singPup.innerHTML =""
    }

}     
getAllPuppies()




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// I want to create a function that randomly selects a football position for the puppy ie: Kicker (K), Running back (RB), Offensive Line, (OL) OffensiveTackle (OT), Center (C), Offensive Gaurd (OG), Quarterback (QB), Wide Receiver (WR), Defensive End(DE), Linebacker (LB)
// so when the user clicks a single puppy, their page will pop up with their position on it an their stats: age, weight, where they are from . 
//I want the app to be able to let the user make their own team roster , click on the puppy and add it to a list (bank)