// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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

function formSubmission(doc, list, pilot, copilot, fuelLevel, cargoLevel) {
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
   
   let pilotStatus = document.getElementId("pilotStatus");
   pilotStatus.innerHTML = "Me"
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementId("fuelStatus");
   let cargoStatus = document.getElementId("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");

    list.style.visibility = "visible"

//    if (Number(fuelLevel) < 10000)){
//     list.style.visibility = "visible"
    
    
//    }
   
//    if (Number(validateInput(cargoLevel) >10000)){
//     list.style.visibility = "visible"
//    }


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
