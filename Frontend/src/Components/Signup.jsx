import {useState} from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
import '../Styles/Signup.css'

const Signup = () => {
  
    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [username,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();

    const handleSignUp =async (event) =>{
      event.preventDefault();
      try{
        console.log("event triggered");
        const req = await axios.post("https://yoga-pose-guide.onrender.com/signup",{
          firstname:firstname,
          lastname:lastname,
          username:username,
          email:email,
          password:password
        })
        console.log(req)
        alert(req.data.response)
        if(req.data.signupStatus){
          navigate("/login")}
          else{
            navigate("/signup")
          }
      }
        catch(err){
          console.log(err);
        }
    }
  return (
    
    <div classname='body'>
      <div className='container '>
      <form method = "POST"  onSubmit={handleSignUp}>
            FirstName : <input type="text" value={firstname} onChange={(e)=>{setFirstName(e.target.value)}} required/>
            LastName : <input type="text" value={lastname} onChange={(e)=>{setLastName(e.target.value)}} required/>
            UserName : <input type="text" value={username} onChange={(e)=>{setUserName(e.target.value)}} required/>
            Email : <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
            Password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
            <button type="submit">Signup</button>
        </form>
        <p>Already have an account??<Link to="/login">Login</Link></p>
      
      </div>
        
    </div>
  )
}

export default Signup