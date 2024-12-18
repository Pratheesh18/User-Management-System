import React from "react";
import {useForm,SubmitHandler} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../validation/formValidation";
import { TextField,Button,Typography,Box } from "@mui/material";

interface SignUpFormInputs {
    name : string;
    email : string;
    password:string;
    confirmPassword:string;
}

interface SignUpFormProps{
    onSubmit : SubmitHandler<SignUpFormInputs>;
}

const SignUpForm : React.FC<SignUpFormProps> = ({onSubmit}) => {
    const {register,handleSubmit,formState:{errors}} = useForm<SignUpFormInputs>({resolver:yupResolver(signUpSchema)});

    return(
        <Box sx={{maxWidth:400,margin:'auto',mt:5}}>
            <Typography variant="h4" mb={3}>
                Sign Up
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField label="Name" margin="normal" {...register('name')} error={!!errors.name} helperText={errors.name?.message} fullWidth />
                <TextField label="Email" margin="normal" {...register('email')} error={!!errors.email} helperText={errors.email?.message} fullWidth />
                <TextField label="Password" type="password"  margin="normal" {...register('password')} error={!!errors.password} helperText={errors.password?.message} fullWidth />
                <TextField label="Confirm Password" type="password" margin="normal" {...register('confirmPassword')} error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message} fullWidth />
                <Button type="submit" variant="contained" fullWidth sx={{mt:5}}>
                    Sign Up
                </Button>
            </form>
        </Box>
    )
};

export default SignUpForm;