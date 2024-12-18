import React from "react";
import LoginForm from "../components/LoginForm";
import { api } from "../api/api";
import { Login } from "@mui/icons-material";

const LoginPage = () => {
    const handleLogin = async (data:{email:string;password:string}) => {
        try{
            const res = await api.signIn(data);
            console.log("res",res);
            alert("Login successful");
        }catch(error){
            console.error("Login error",error);
        };

        return(
            <LoginForm onSubmit={handleLogin} />
        )
    }
};

export default LoginPage;