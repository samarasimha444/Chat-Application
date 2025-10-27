import { Link } from "react-router-dom";
let Home=()=>{
    return(
        <div>
            <h1>Home Page</h1>
            <Link to='/login'>login</Link>
            <br/>
            <Link to='/signup'>signup</Link>
        </div>
    )
}
export default Home;