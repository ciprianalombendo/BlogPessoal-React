import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/userReducer';
import { addToken } from '../../../store/tokens/action';
import {toast} from 'react-toastify';
import './NavBar.css'

function Navbar() {

    let navigate = useNavigate()

    const dispatch = useDispatch()

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate("/login")
    }

    var navBarComponent

    if (token !== "") {
        navBarComponent = <AppBar position="static" className='back'>
        <Toolbar variant="dense">
            <Box className= 'cursor' >
                <Typography variant="h5" color="inherit">
                    BlogPessoal
                </Typography>
            </Box>
            
            
            <Box display="flex" justifyContent="start">
            <Link to='/home' className='text-decorator-none'> 
                <Box mx={1}  className= 'cursor'>
                    <Typography variant="h6" color="inherit">
                        Home
                    </Typography>
                </Box>
                </Link>
                <Link to='/posts' className='text-decorator-none'> 
                <Box mx={1} className= 'cursor'>
                    <Typography variant="h6" color="inherit">
                        Postagens
                    </Typography>
                </Box>
                </Link>
                <Link to='/temas' className='text-decorator-none'> 
                <Box mx={1} className= 'cursor'>
                    <Typography variant="h6" color="inherit">
                        Temas 
                    </Typography>
                </Box>
                </Link>
                <Link to='/formularioTema' className='text-decorator-none'> 
                <Box mx={1} className= 'cursor'>
                    <Typography variant="h6" color="inherit">
                        Cadastrar Tema
                    </Typography>
                </Box>
                </Link>
                <Box mx={1} className= 'cursor' onClick={goLogout}>
                <Typography variant="h6" color="inherit">
                        Logout
                    </Typography>
                </Box>
                
            </Box>

        </Toolbar>
    </AppBar>
    }
    return (
        <>
            { navBarComponent }
        </>
    )
}

export default Navbar;