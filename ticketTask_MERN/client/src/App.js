import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Dashboard } from "./components/Home/Dashboard";
import LoginFormik from "./components/LoginForm/LoginFormik";
// import LoginForm from "./components/LoginForm/LoginForm";
import SingUpFormik from "./components/SignupForm/SingupFormik";



const App = () => {

    
    
    return(
        <Router>
        <Routes>
            <Route path='/' element={<LoginFormik />} />
            {/* <Route path='/' element={<SignInSide />} /> */}
            <Route path='/SignIn' element={<LoginFormik />} />
            <Route path="/SignUp" element={<SingUpFormik />}/>
            <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        </Router>
       );
}

export default App;