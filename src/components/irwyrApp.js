import { useState } from "react";

function App1irwyr(){
    const [input, setInput] = useState();
    return(
        <>
            <input placeholder="write something here" type="text" onChange={(e) =>{setInput(e.target.value)}}/>
            <h1 > 
                {input}
            </h1>
        </>
    );
}

export default App1irwyr;