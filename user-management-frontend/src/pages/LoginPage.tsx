import React from "react";
import LoginForm from "../components/LoginForm";
import { api } from "../api/api";
import { useNavigate,Link} from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();


    const handleLogin = async (data:{email:string;password:string}) => {
        try{
            const res = await api.signIn(data);
            console.log("res",res);
            alert("Login successful");
            navigate('dashboard');
        }catch(error){
            console.error("Login error",error);
        };
    }

    return(
        <>
            <LoginForm onSubmit={handleLogin} />
            <div style={{textAlign:'center',marginTop:'1rem'}}>
                <span> Don't have an account </span>
                <Link to="/signup" style={{color:'#1976d2',textDecoration:'none'}}> Sign Up </Link>
            </div>
        </>
    )
};

export default LoginPage;