import React from "react";
import SignUpForm from "../components/SignUpForm";
import { api } from "../api/api";
import { useNavigate,Link } from "react-router-dom";


const SignUpPage = () => {

  const navigate = useNavigate();

    const handleSignUp = async (data:{name:string;email:string;password:string;confirmPassword:string}) => {
          try{
            const res = await api.signUp(data);
            console.log('Sign up success',res);
            alert('SignUp Successful');
            navigate('/');
          }catch(error){
            console.error('Registration error',error);
          }
    }

    return(
      <>
        <SignUpForm onSubmit={handleSignUp} />
        <div style={{textAlign:'center',marginTop:'1rem'}}>
           <span> Already have an account </span>
           <Link to="/" style={{color:'#1976d2',textDecoration:'none'}}> Login </Link>
        </div>
      </>
    )
};

export default SignUpPage;