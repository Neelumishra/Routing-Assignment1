import React from "react";
import { Link} from 'react-router-dom';


export default function Login(){
  return(
    <div>
    <input placeholder="Username"/><br/>
    <input placeholder="Password"/><br/>
    <Link to="/"><button>Login</button><br/></Link>
    <Link to="/register">Register</Link>
    
    </div>
  )
}