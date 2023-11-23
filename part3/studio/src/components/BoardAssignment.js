import { useState } from 'react';

export default function BoardAssignment () {

   const [boardName, setBoardName] = useState("no boards yet!")

   const boards = [
      {"label": "one", "value" : "one"},
      {"label":"two", "value" : "two"},
      {"label": "three", "value" : "three"}];

   const optionTags = boards.map((board) =>{
      return(
         <option value={board.value}>{board.label}</option> 
      )
   })

   const handleChange = (event) => {
      setBoardName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            {optionTags}
         </select>

         <p>Saved to {boardName}!</p>
      </div>
   );
}