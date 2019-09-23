import React from 'react'
import { LoginContainer, LoginTitle, LoginCard, LoginForm, LoginInput, RememberMe, LoginButton } from './Atoms.jsx'

const Login = () => {
  return(
    <LoginContainer>
      <LoginCard>
        <LoginTitle>Sign In</LoginTitle>
        <LoginForm>
          Email:
          <LoginInput type="text"/>
          Password:
          <LoginInput type="password"/>
          <RememberMe type="checkbox"/> Remember Me
          <LoginButton type="submit" value="Sign In"/>
          Forgot Password?
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  )
}

export default Login
