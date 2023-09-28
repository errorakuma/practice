import { useEffect, useState } from "react";
import style from "./admin.module.css";
import { useNavigate } from "react-router-dom";

function Home() {

   
   
   
   
   
   
   
   
   

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlesubmit = (e) => {
        // e.preventDefault();

        if (username && password) {
            let user = {
                username: username,
                password: password,
            };

            if (localStorage.getItem("login") === null) {
                localStorage.setItem("login", JSON.stringify(user));
            }

            navigate("/Dashboard");
        }
    };

    const navigate = useNavigate();
    return (
        <div className={style.container}>
            <form className={style.adminform}>
                <h1>Welcome to Dashbord, Login</h1>
                <div className={style.input}>
                    <label>Username</label>
                    <br></br>
                    <input
                        type="text"
                        name="username"
                        required
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className={style.input}>
                    <label>Password</label>
                    <br></br>
                    <input
                        type="password"
                        name="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" onClick={(e) => handlesubmit(e)}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Home;
