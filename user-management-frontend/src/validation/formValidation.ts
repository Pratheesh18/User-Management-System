import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name : Yup.string().required('Name is required'),
    email : Yup.string().email('Invalid email').required('Email is required'),
    password:Yup.string().min(5,'Password must be at least 5 characters ').required('Password is required'),
    confirmPassword : Yup.string().oneOf([Yup.ref('password')],'Passwords must match').required('Confirm password is required'),
});

export const loginSchema = Yup.object({
    email : Yup.string().email('Invalid email').required('Email is required'),
    password : Yup.string().required('Password is required'),
});

