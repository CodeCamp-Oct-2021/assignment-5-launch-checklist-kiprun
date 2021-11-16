// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden"
   let form = document.querySelector("form");


   form.addEventListener("submit", function(event){ 
        let pilot = document.querySelector("input[name=pilot]");
        let copilot = document.querySelector("input[name=copilot]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoLevel]");
        event.preventDefault();
    
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)


   })
})