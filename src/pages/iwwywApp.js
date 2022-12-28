import { useState } from "react";

function Appiwwyw(){
    const [input, setInput] = useState("yo");
    return(
        <div className="flex align-center justify-center">
            <div className="flex align-center justify-center flex-col ">
                <input placeholder="write something here" type="text" onChange={(e) =>{setInput(e.target.value)}}/>
                <h1 > 
                    {input.length < 10 ? input : "you are gay"}
                </h1>
            </div>
            <a href="/#/react-playground">home</a>
        </div>
    );
}

export default Appiwwyw;