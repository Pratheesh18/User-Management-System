import axios from 'axios';

const BASE_URL = 'http://localhost:5000/auth';


export const api = {
    signUp : async (data:{name:string;email:string;password:string;confirmPassword:string}) => {
        const response = await axios.post(`${BASE_URL}/signup`,data);
        return response.data;
    },
    signIn : async (data:{email:string;password:string}) => {
        const response = await axios.post(`${BASE_URL}/signin`,data);
        return response.data;
    }
}