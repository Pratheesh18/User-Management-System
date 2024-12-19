import React from 'react';
import {useForm,SubmitHandler} from 'react-hook-form';
import { TextField,Button,Box,Typography } from '@mui/material';


interface UserFormProps{
    onSubmit:(data:UserFormInputs) => void;
    initialValues?:UserFormInputs;
}

interface UserFormInputs{
    name:string;
    email:string;
}

const Form : React.FC<UserFormProps> = ({onSubmit,initialValues}) => {
    const {register,handleSubmit,reset,formState:{errors}} = useForm<UserFormInputs>({
        defaultValues:initialValues,
    });

    const submitHandler : SubmitHandler<UserFormInputs> = (data) => {
        onSubmit(data);
        reset();
    }

    return(
        <Box component="form" onSubmit={handleSubmit(submitHandler)}>
            <Typography variant='h6' >
                {initialValues ? 'Update User' : 'Add User'}
            </Typography>
            <TextField label="Name" margin="normal" {...register('name',{required:'Name is required'})} error={!!errors.name} helperText={errors.name?.message} fullWidth/>
            <TextField label="Email" margin='normal' {...register('email',{required:'Email is required'})} error={!!errors.email} helperText={errors.email?.message} fullWidth/>
            <Button type='submit' variant='contained' >
                {initialValues ? 'Update':'Add'}
            </Button>
        </Box>
    )
};

export default Form;