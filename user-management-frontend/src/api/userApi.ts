import axios from "axios";

const BASE_URL = 'http://localhost:5000/customers';

export const customerApi = {
    getAllCustomers : async () => {
        const response = await axios.get(`${BASE_URL}`);
        return response.data;
    },
    addCustomer : async (customer:{name:string;email:string}) => {
        const response = await axios.post(`${BASE_URL}`,customer);
        return response.data;
    },
    updateCustomer : async (customerId:string,updatedData:{name?:string;email?:string}) => {
        const response = await axios.patch(`${BASE_URL}/${customerId}`,updatedData);
        return response.data;
    },
    deleteCustomer:async(customerId:string) => {
        const response = await axios.delete(`${BASE_URL}/${customerId}`);
        return response.data;
    }
}