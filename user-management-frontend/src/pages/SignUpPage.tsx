import React from "react";
import SignUpForm from "../components/SignUpForm";
import { api } from "../api/api";


const SignUpPage = () => {

    const handleSignUp = async (data:{name:string;email:string;password:string;confirmPassword:string}) => {
          try{
            const res = await api.signUp(data);
            console.log('Sign up success',res);
            alert('SignUp Successful');
          }catch(error){
            console.error('Registration error',error);
          }
    }

    return(
        <SignUpForm onSubmit={handleSignUp} />
    )
};

export default SignUpPage;