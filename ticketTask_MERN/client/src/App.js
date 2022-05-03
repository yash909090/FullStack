import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import SignUp from "./components/SignupForm/SignupForm";
import { Dashboard } from "./components/Home/Dashboard";
import SignInSide from "./components/LoginForm/LoginForm";
import SingUp from "./components/SignupForm/SignupForm";



const App = () => {

    
    
    return(
        <Router>
        <Routes>
            <Route path='/' element={<SignInSide />} />
            <Route path='/Signin' element={<SignInSide />} />
            <Route path="/SignUp" element={<SingUp />}/>
            <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        </Router>
    );
}

export default App;