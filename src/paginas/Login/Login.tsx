import React from 'react'
import './Login.css';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function login() {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
    <Grid alignItems='center' xs={6}>
        <Box paddingX={20}>

            <form>
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>
                    Entrar
                </Typography>

                {/* <TextField value={ userLogin.usuario } onChange={ (e: ChangeEvent<HTMLInputElement>) => updatedModel(e) } id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth /> */}
                {/* <TextField value={ userLogin.senha } onChange={ (e: ChangeEvent<HTMLInputElement>) => updatedModel(e) } id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth /> */}
                
                <Box marginTop={2} textAlign='center'>
                    <Button type='submit' variant='contained' color='primary'>
                        Logar
                    </Button>
                </Box>
            </form>
            
            <Box display='flex' justifyContent='center' marginTop={2}>
                <Box marginRight={1}>
                    <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                </Box>
                <Link to='/cadastro'>
                    <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>
                        Cadastre-se
                    </Typography>
                </Link>
            </Box>

        </Box>
    </Grid>
    <Grid xs={6} className="imagem">
    </Grid>
</Grid>
  )
}

export default login