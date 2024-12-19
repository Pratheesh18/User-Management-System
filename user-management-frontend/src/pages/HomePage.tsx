import React,{useEffect,useState} from 'react';
import { customerApi } from '../api/userApi';
import Form from '../components/Form';
import { Box,Button,Typography,Dialog,DialogContent,Card,CardContent,IconButton, Icon, colors, DialogActions } from '@mui/material';
import {Edit,Delete,Add} from '@mui/icons-material';


interface User{
    _id:string;
    name:string;
    email:string;
}

const HomePage = () => {

    const [users,setUsers] = useState<User[]>([]);
    const [selectUser,setSelectUser] = useState<User |null>(null);
    const [formOpen,setFormOpen] = useState<boolean>(false);

    useEffect(() => {
        getUsers();
    },[]);

    const getUsers = async () => {
        const fetchUsers = await customerApi.getAllCustomers();
        setUsers(fetchUsers);
    };

    const isFormOpen = (user?:User) => {
        setSelectUser(user || null);
        setFormOpen(true);
    }

    const closeForm = () => {
        setFormOpen(false);
        setSelectUser(null);
    }

    const handleHandleAddOrUpdateUser = async (data:any) => {
        if(selectUser){
            await customerApi.updateCustomer(selectUser._id,data);
        }else{
            await customerApi.addCustomer(data);
        }
        closeForm();
        getUsers();
    }

    const handleDeleteuser = async (customerId:string) => {
        await customerApi.deleteCustomer(customerId);
        getUsers();
    }

    return(
        <>
            <Box sx={{p:4}}>
                <Typography variant='h4' mb={3}>
                    User Management
                </Typography>
                <Button variant='contained' startIcon={<Add/>} onClick={() => isFormOpen()} sx={{mb:2}}> Add User </Button>
                {users.map((user) => (
                    <Card key={user._id} sx={{mb:2}}>
                        <CardContent>
                            <Typography variant='h6'> {user.name} </Typography>
                            <Typography variant='body2' color="textSecondary">
                                Email : {user.email}
                            </Typography>
                            <Box sx={{mt:2}}>
                                <IconButton onClick={() => isFormOpen(user)} color='primary' aria-label='edit'>
                                    <Edit />
                                </IconButton>
                                <IconButton onClick={() => handleDeleteuser(user._id)} color='error' aria-label='delete'>
                                    <Delete />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
                <Dialog open={formOpen} onClose={closeForm} maxWidth="sm" fullWidth>
                    <DialogContent>
                        <Form onSubmit={handleHandleAddOrUpdateUser} initialValues={selectUser || undefined} />
                    </DialogContent>
                </Dialog>
            </Box>
        </>
    )
};


export default HomePage;