//TODO: Add Your Code Below
window.addEventListener("load", function(){
    let container = document.getElementById("container");
    // function compare(a,b){
    //     if (a.hoursInSpace > b.hoursInSpace){
    //         return -1;
    //     } else if (a.hoursInSpace < b.hoursInSpace){
    //         return 1
    //     }
    //     return 0;
    // }

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(
        function (response){
            response.json().then(
                function (json){
                    console.log(json)
                    // json.sort(compare)
                    for (let object of json){
                        let skillsToString = ""; // just for fun
                        for (let skill of object.skills){ // just for fun
                            skillsToString += skill + ", " // just for fun
                        }
                        skillsToString = skillsToString.slice(0, skillsToString.length-2) // just for fun // remove trailing , and space
                        let green = object.active === true ? `class="green"` : `class=""`
                        container.innerHTML += 
                        `<div class="astronaut">
                            <div class="bio">
                                <h3>${object.firstName} ${object.lastName}</h3>
                                <ul>
                                <li>Hours in space: ${object.hoursInSpace}</li>
                                <li ${green}>Active: ${object.active}</li>
                                <li>Skills: ${skillsToString} </li>
                                </ul>
                            </div>
                            <img class="avatar" src="${object.picture}">
                        </div>`

                                }})
        }

    )

})