import React, { useState } from "react";
import "./../Assets/LoginSignup/LoginSignup.css";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function LoginSignup() {

    const[action, setAction] = useState("Sign Up");


    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">

                {action==="Login" ? <></> :
                <div className="inp">
                    <AccountCircleOutlinedIcon className="img"/>
                    <input type="text" className="Username" placeholder="Username" />
                </div>
            }          
            
                <div className="inp">
                    <EmailOutlinedIcon className="img"/>
                    <input type="email" className="Email" placeholder="Email"/>
                </div>
            
                <div className="inp">
                    <LockOutlinedIcon className="img"/>
                    <input type="password" className="Password" placeholder="Password"/>
                </div>
            </div>

            {action === "Sign Up" ? <></> :
                <div className="forgot-password">Lost Password? <span>Click here</span></div>
            }

            <div className="submit-container">
                <button className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</button>
                <button className={action === "Login" ? "submit" : "submit gray"} onClick={() => setAction("Login")}>Login</button>
            </div>
        </div>
    );
}

export default LoginSignup;