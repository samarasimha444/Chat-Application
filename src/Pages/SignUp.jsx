import { useState } from "react";
import { Link } from "react-router-dom";
let SignUp=()=>{
    let[username,setUsername]=useState("");
    let[password,setPassword]=useState("");
    let[confirmPassword,setConfirmPassword]=useState("");
    
    return(
        <div>
            <h1>Sign Up Page</h1>
            <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <div>{username}</div>
            <br/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <div>{password}</div>
            <br/>
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <div>{confirmPassword}</div>
            <br/>
            <button type="submit">Sign Up</button>
            <button>
                <Link to="/login">I already have an account</Link>
            </button>

        </div>
    )
}
export default SignUp;