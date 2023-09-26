import { useState } from "react";

function ReportForm(){
    // add a state variable to hold notes
    const [notes, setNotes] = useState("");

    const handleChange = (event) => {
        console.log(event) // use inspect > console > event > target > value  to see changes
        setNotes(event.target.value);
    }

    const handleSubmit = (event) => {
        alert("form submitted")
        event.preventDefault(); // prevents form submission. add api functionality here.
    }

    return(
        <div>
            <br></br>
            <hr></hr>
            <form onSubmit = {handleSubmit}> {/*handle submission in form tag*/} 
                <label>
                    Report Here: <input type="textarea" value = {notes} onChange = {handleChange}/>
                </label>
                <input type="submit"/>
            </form>
            <p>Preview: {notes}</p>
        </div>

    );
}

export {ReportForm};