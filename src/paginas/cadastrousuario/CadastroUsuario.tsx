import React, { ChangeEvent, useEffect, useState } from 'react'
import './CadastroUsuario.css';
import { Grid, Typography, Box, Button, TextField } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroUsuario } from '../../services/Service';
import User from '../../models/User';



function CadastroUsuario() {
  let navigate = useNavigate()

  const [confirmarSenha, setConfirmarSenha] = useState<String>("")
  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    foto: '',
    usuario: '',
    senha: ''
  })

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (userResult.id !== 0) {
      navigate("/login")
    }
  }, [userResult])

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)

  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
      //usuario: 'a

    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    //if (confirmarSenha == user.senha) {
     if (confirmarSenha === user.senha && user.senha.length>= 8){
      try {
        await cadastroUsuario('/usuarios/cadastrar', user, setUserResult)
        alert('Usuario cadastrado com sucesso')

        //Se houver erro, pegue o Erro e retorna uma msg
      } catch (Error) {
       console.log('Error: ${error}')

        //Pode modificar a msg de acordo com o erro
        alert("Erro ao cadastrar o Usuário")
      }
    } else {
      alert('Senha deve ter 8 caracteres. Verifique as informações de cadastro')

      // setUser({ ...user, senha: "" })//Reinicia o campo senha
      // setConfirmarSenha("")
    }
  }




  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid item xs={6} className='imagem2'></Grid>
      <Grid item xs={6} alignItems='center'>
        <Box padding={10}>
          <form onSubmit={onSubmit}>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'> Cadastrar</Typography>
            <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth placeholder='insira seu nome' />
            <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='foto' variant='outlined' name='foto' margin='normal' placeholder='insira seu nome' fullWidth />
            <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth placeholder='insira seu email' />
            <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth placeholder='insira uma senha' />
            <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='ConfirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth placeholder='insira novamente a senha ' />
            <Box marginTop={2} textAlign='center'>
              <Link to='/login' className='text-decorator-none'>
                <Button variant='contained' color='secondary' className='btnCancelar'>
                  Cancelar
                </Button>
              </Link>
              <Button type='submit' variant='contained' color='primary'>
                Cadastrar
              </Button>
            </Box>
          </form>

        </Box>
      </Grid>

    </Grid>
  )
}

export default CadastroUsuario;