import { useState } from "react";


const authorizedUsers = [
  { email: "alaa@gmail.com", password: "123456" },
  { email: "hager@gmail.com", password: "admin123" },
];


function LoginPage() {
    const[email, setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[message,setMessage]=useState("")


    const handleSubmit = (e)=>{
        e.preventDefault();

        const userFound = authorizedUsers.find(
            (user)=>user.email === email && user.password === password);
            
            if(userFound) 
                {setMessage(" Login successful!");
                 setEmail("");
                 setPassword("")
                }
            else {setMessage("Invalid email or password.")}
            }

    return (
        <div className="login-container">
            <h2>Login Page</h2>
            <form className="login-form" onSubmit={handleSubmit}>
            <input 
            type="email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            placeholder="Email"
            required
            />

            <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"
            required
            />

            <button type="submit">Login</button>

            </form>

            <p className="message">{message}</p>
        </div>
    );
}
export default LoginPage;