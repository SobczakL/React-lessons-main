import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavigateLogin() {
  const details = {
    username: "Lucas",
    password: "lucas1"
  };

  const [check, setCheck] = useState("fail");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    if (check === "pass") {
      navigate("/Home");
    }
  }, [check, navigate]);

  const handleClick = (e) => {
    e.preventDefault();
    
    if (username === details.username && password === details.password) {
      setCheck("pass");
    }
    if (username !== details.username) {
      alert("Username is wrong");
    }
    if (password !== details.password) {
      alert("Password is wrong");
    }
  };

  return (
    <div>
      <form>
        <input 
          type="text" 
          name="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username"
        />
        <input 
          type="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password"
        />
        <button onClick={handleClick}>Login</button>
      </form>
    </div>
  );
}
