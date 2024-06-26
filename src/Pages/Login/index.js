import React, { useState } from 'react';
import { Container, Form } from "./styles";
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { validarEmail, validarSenha } from "../../Utils/validadores";

const Login = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      alert('Login')
      setLoading(false)
    } catch (err) {
      alert('Algo deu errado com o logun' + err)     
    }
  }

  const handleChange = (event) => {
    console.log('Digitando...', event.target.name, event.target.value)
    setForm({...form, [event.target.name]: event.target.value})
    console.log('Form', form)
  }

  const validarInput = () => {
    return validarEmail(form.email) && validarSenha(form.password)
  }

  console.log('Form esta válido?',validarInput())

  return ( 
    <Container>
      <Form>
        <h1>Faça o seu Login!</h1>
        <Input 
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleChange}
          type='email'
        />
        <Input 
          name='password'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type='password'/>
        <Button 
          type='submit'
          text='Entrar!'
          onClick={handleSubmit}
          disabled={loading === true || !validarInput()}
        />
        <div>
          <p>Não possui conta?</p>
          <a href="#">Cadastrar-se</a>
        </div>
      </Form>
    </Container>
   );
}
 
export default Login;