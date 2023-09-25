import { useState } from "react";

function ShoeButton(){
    const [shoeCount, setShoeCount] = useState(0);
    const handleClick = () => {
        setShoeCount(shoeCount + 1);
    }

    return(
        <div>
            <h1>{shoeCount} shoe(s) have come off the line.</h1>
            <button onClick={handleClick}>Click me.</button>
        </div>
    );
    
}

export {ShoeButton};