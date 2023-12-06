import React, { useState } from "react";

const SimpleForm = () => {

    let submitHandler = (event) =>{
        event.preventDefault(); //
        console.log("onSubmit here");
    }
    
    let [username,setUsername] = useState("UFO");
    let inputHandler = (ev) => {
        let user = ev.target.value;
        setUsername(user)
    }

    return(
        <div>
        <div> Username : {username}</div>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label>Enter Name:</label>
                <input type="text" className="form-control" onChange={inputHandler}/>
            </div>
            <button type="submit" className="btn btn-primary">Greet user</button>
        </form>
        </div>
    );
}
export default SimpleForm;