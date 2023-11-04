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
    let rocket = document.getElementById("rocket")
    // let upPosition = parseInt(getComputedStyle(rocket).bottom);
    // let leftPosition = parseInt(getComputedStyle(rocket).left);
    let upPosition = 0;
    let leftPosition = 250;

    // set initial rocket position
    rocket.style.position = "absolute";
    rocket.style.bottom = upPosition + "px";
    rocket.style.left = leftPosition + "px";


    // takeoff
    takeoff.addEventListener("click", function (event){
        if (confirm("Confirm the shuttle is ready for takeoff!")){

            flightStatus.innerHTML = "Shuttle in flight"
            shuttleBackground.style.background = "blue";
            spaceShuttleHeight.innerHTML = 10000;
            rocket.style.transform = "rotate(0deg)";
        }
    })

    // landing
    landing.addEventListener("click", function (event){
        alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.background = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.bottom = "0px";
        rocket.style.left = "250px";
        rocket.style.transform = "rotate(0deg)";
    })

    // abort
    missionAbort.addEventListener("click", function(event){
        if (confirm("Confirm that you want to abort the mission.")){
            flightStatus.innerHTML = "Mission aborted!";
            shuttleBackground.style.background = "red";
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.transform = "rotate(180deg)";
            rocket.style.bottom = "0px";
            rocket.style.left = "250px";
        }
    })

    //up
    up.addEventListener("click", function(){
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        upPosition += 10;
        rocket.style.bottom = upPosition + "px";
        // upPosition = parseInt(getComputedStyle(rocket).bottom);
    })

    //down
    down.addEventListener("click", function(){
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
        upPosition -= 10
        rocket.style.bottom = upPosition + "px";
        // upPosition = parseInt(getComputedStyle(rocket).bottom);
    })

    //left
    left.addEventListener("click", function(){
        leftPosition -= 10
        rocket.style.left = leftPosition + "px";
        // leftPosition = parseInt(getComputedStyle(rocket).left);
    })

    //right
    right.addEventListener("click", function(){
        leftPosition += 10;
        rocket.style.left = leftPosition + "px";
        // leftPosition = parseInt(getComputedStyle(rocket).left);
    })

    document.onkeydown = function(e) { 
        switch (e.keyCode) { 
            case 37: 
                rocket.style.left = (leftPosition - 10) + "px";
                leftPosition = parseInt(getComputedStyle(rocket).left);
                rocket.style.transform = "rotate(270deg)";
                break;
            case 38: 
                spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
                upPosition += 10;
                rocket.style.bottom = upPosition + "px";
                rocket.style.transform = "rotate(0deg)";
                break; 
            case 39: 
                rocket.style.left = (leftPosition + 10) + "px";
                leftPosition = parseInt(getComputedStyle(rocket).left);
                rocket.style.transform = "rotate(90deg)";
                break; 
            case 40: 
                spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
                upPosition -= 10
                rocket.style.bottom = upPosition + "px";
                rocket.style.transform = "rotate(180deg)";
                break; 
        } 
    };

    

});