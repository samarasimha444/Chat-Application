import { useState } from "react";
import { Link } from "react-router-dom";
let Loginpage=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const Reset=()=>{
        setUsername("");
        setPassword("");
    }
    return(
        <div>
            <h1>Login Page</h1>
            <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <div>{username}</div>
            <br/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <div>{password}</div>
            <br/>
            <button type="submit">Login</button>
            <button onClick={Reset}>Reset</button>
            <Link to="/signup">didn't have an account</Link>
        </div>
    )

}
export default Loginpage;