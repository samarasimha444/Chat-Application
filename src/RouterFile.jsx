import { BrowserRouter,Routes,Route } from "react-router-dom";
import Loginpage from "./Pages/LoginPage.jsx";
import Home from "./Pages/Home.jsx";
import SignUp from "./Pages/SignUp.jsx";
let Router=()=>{
    return(
       <div>
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Loginpage/>}/>
                <Route path="/signup" element={<SignUp/>}/>

            </Routes>
        </BrowserRouter>
       </div>
    )
}
export default Router;
