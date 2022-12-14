import React from 'react'
import { useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login.svg'
import './login.css'
const Login = () => {
    const navigate = useNavigate();
    const handleLogin = (e) => {

        const user = e.target.email.value;
        const password = e.target.password.value;


        if (user == "admin" && password == "admin") {
            navigate('/all');
        } else {
            navigate("/admin");
        }
    }

    return (
        <div className='login'>
            <div>
                <img src={loginImg} alt="" width={"450px"} />
            </div>
            <div>
                <form onSubmit={handleLogin}>
                    <div className='email'>
                        <label htmlFor="">User Name</label>
                        <input type="text" name="email" id="" />
                    </div>
                    <div className='pass'>
                        <label htmlFor=""> Password </label>
                        <input type="password" name="password" id="" />
                    </div>
                    <div ><button className='submit' type="submit">Login</button></div>
                </form>
            </div>
        </div>

    )
}

export default Login