// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function (){
    let takeoff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");



    // takeoff
    takeoff.addEventListener("click", function (event){
        if (confirm("Confirm the shuttle is ready for takeoff!")){

            flightStatus.innerHTML = "Shuttle in flight"
            shuttleBackground.style.background = "blue";
            spaceShuttleHeight.innerHTML = 10000;

        }
    })

    // landing
    landing.addEventListener("click", function (event){
        alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.background = "green";
        spaceShuttleHeight.innerHTML = 0;
    })

    // abort
    missionAbort.addEventListener("click", function(event){
        if (confirm("Confirm that you want to abort the mission.")){
            flightStatus.innerHTML = "Mission aborted!";
            shuttleBackground.style.background = "red";
            spaceShuttleHeight.innerHTML = 0;
        }
    })

    

});