import { useState } from "react";

function App1irwyr(){
    const [input, setInput] = useState("yo");
    return(
        <>
            <input placeholder="write something here" type="text" onChange={(e) =>{setInput(e.target.value)}}/>
            <h1 > 
                {input.length < 10 ? input : "you are gay"}
            </h1>
        </>
    );
}

export default App1irwyr;