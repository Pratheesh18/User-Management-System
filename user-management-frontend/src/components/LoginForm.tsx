import React from "react";
import {useForm,SubmitHandler} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation/formValidation";
import { TextField,Button,Typography,Box } from "@mui/material";

interface LoginFormInputs {
    email:string;
    password:string;
}

interface LoginFormProps {
    onSubmit : SubmitHandler<LoginFormInputs>;
}

const LoginForm : React.FC<LoginFormProps> = ({onSubmit}) => {
    const {register,handleSubmit,formState:{errors}} = useForm<LoginFormInputs>({resolver:yupResolver(loginSchema)});

    return(
        <Box sx={{maxWidth:400,margin:'auto',mt:5}}>
            <Typography variant="h4" mb={3}>
                Login
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField label="Email" margin="normal" {...register('email')} error={!!errors.email} helperText={errors.email?.message} fullWidth />
                <TextField label="Password" type="password" margin="normal" {...register('password')} error={!!errors.email} helperText={errors.password?.message} fullWidth/>
                <Button type="submit" variant="contained" sx={{mt:2}} fullWidth>
                    Login
                </Button>
            </form>
        </Box>
    )
};

export default LoginForm;