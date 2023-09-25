	
   import { useState } from 'react';

   function Doorbell() {
      const[bell, setBell] = useState("");

      const handleClick = () => {

         setBell(bell + " you rang...");
      }

      return(
         <div>
            <br></br>
            <hr></hr>
            <h1>Ring the Doorbell!</h1>
            <p>{bell}</p>
            <button onClick={handleClick}>Ring Bell</button>
         </div>
      );
   }

   export {Doorbell};