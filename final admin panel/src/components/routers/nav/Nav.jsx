import { Link } from "react-router-dom";
import style from "./nav.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();

    const [islogin, setIsLogin] = useState(false);

    const [user, setUser] = useState("");

    const [activeButton, setActiveButton] = useState(null);

    const buttons = ["Dashboard", "Products", "Account"];

    const active = islogin ? {
        color: "greenyellow",
        textShadow: "1px 1px 10px greenyellow",
    } : {};


    const handleClick = (buttonName) => {

        setActiveButton(buttonName)

    };


    useEffect(() => {
        let check = JSON.parse(localStorage.getItem("login"));

        check === null || undefined ? setUser("") : setUser(check.username);
        // console.log(check)

        setIsLogin(check !== null);
    });

    const visible = islogin ? {} : { display: "none" };

    const handler = (e) => {

        alert(
            "logout"

        )
        setIsLogin(!islogin);

        navigate("/");

        localStorage.removeItem("login");
    };

    return (
        <div className={style.container}>
            <h1>PRODUCT ADMIN</h1>
            <nav>

                <ul >
                    {buttons.map((buttonName) => (
                        <li key={buttonName}>

                            <Link to={`/${buttonName}`} onClick={() => handleClick(buttonName)}>
                                <button
                                    style={activeButton === buttonName ? active : {}}

                                    disabled={!islogin}
                                >
                                    {buttonName}
                                </button>
                            </Link>

                        </li>
                    ))}
                </ul>

                <h1>
                    <button style={visible} onClick={(e) => handler(e)}>
                        {user} ,Logout
                    </button>
                </h1>
            </nav>
        </div>
    );
};
export default Nav;
