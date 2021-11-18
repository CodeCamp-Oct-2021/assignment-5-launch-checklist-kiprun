// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
        let missionTarget = document.getElementById('missionTarget');
            missionTarget.innerHTML = 
               `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`
}

function validateInput(testInput) {
    
    if (testInput === ''){
        return "Empty";  
    }
    else if (!isNaN(Number(testInput))){
        return "Is a Number";
    }
     else{
        return "Is not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot) === 'Empty' || 
       validateInput(copilot) === "Empty" ||
       validateInput(fuelLevel) === "Empty" ||
       validateInput(cargoLevel) === "Empty") {
            alert("All fields must be filled out");
   }
   if (validateInput(pilot) === 'Is a Number' ||
       validateInput(copilot) === "Is a Number"){
            alert("Pilot and coilot names cannot be a number");
   }
   if (validateInput(fuelLevel) === 'Is not a Number' ||
       validateInput(cargoLevel) === 'Is not a Number'){
            alert("Fuel and cargo levels must be numerical");
   }
   
   let pilotStatus = document.getElementById("pilotStatus")
   pilotStatus.innerHTML =`Pilot ${pilot} is for ready`
   let copilotStatus = document.getElementById("copilotStatus")
   copilotStatus.innerHTML =`CoPilot ${copilot} is for ready`
   let fuelStatus = document.getElementById("fuelStatus")
   let cargoStatus = document.getElementById("cargoStatus")
   let launchStatus = document.getElementById("launchStatus")   


   if (fuelLevel < 10000 && cargoLevel > 10000){
    list.style.visibility = "visible";
    fuelStatus.innerHTML = `Fuel level too low for launch`;
    cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = "red";
   }

   if (fuelLevel >= 10000 && cargoLevel > 10000){
    list.style.visibility = "visible";
    fuelStatus.innerHTML = `Fuel level high enough for launch`;
    cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = "red";
   }

   if (fuelLevel < 10000 && cargoLevel <= 10000){
    list.style.visibility = "visible";
    fuelStatus.innerHTML = `Fuel level too low for launch`;
    cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color = "red";
   }

   if (fuelLevel >= 10000 && cargoLevel <= 10000){
    list.style.visibility = "visible";
    fuelStatus.innerHTML = 'Fuel level high enough for launch';
    cargoStatus.innerHTML = 'Cargo mass low enough for launch';
    launchStatus.innerHTML = `Shuttle is ready for launch`;
    launchStatus.style.color = "green";
   }


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
    return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
