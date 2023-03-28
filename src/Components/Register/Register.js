import React from 'react';
// import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom';
export default function Register() {
  // const navigate = useNavigate();
  // function redirectToRegisterPage(){
  //   navigate("./")
  // }
  return(
    <div>
    <h1>Register Page</h1>
    <input placeholder="Email"/><br/>
    <input placeholder="Username"/><br/>
    <input placeholder="Password"/><br/>
    
    <Link to="/"><button>Register</button><br/></Link>
    </div>
  )
}
