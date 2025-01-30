import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import "../Styles/Signup.css"

const Login=(p)=>{
    const navigate = useNavigate();
     const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleLogin =async (e) =>{
        e.preventDefault()
        try{
            console.log("event triggered");
            const req = await axios.post("https://yoga-pose-guide.onrender.com/login",{
              
              email:email,
              password:password
            })
            //console.log(req)
            alert(req.data.response);
            if(req.data.loginStatus){
              navigate("/landing");
            }
            else{
              navigate("/login")
            }
          }
            catch(err){
              console.log(err);
            }
      }

    return(
        <div classname='body'>
        <div className='container '>
            <form method = "POST" onSubmit={handleLogin}>
            Email : <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/><br/>
            Password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/><br/>
            <button type='submit'>Login</button>
            </form>
        </div>
        </div>
        
    )
}

export default Login