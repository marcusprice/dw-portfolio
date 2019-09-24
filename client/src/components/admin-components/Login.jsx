import React, { useState } from 'react'
import { LoginContainer, LoginTitle, LoginCard, LoginForm, LoginInput, RememberMe, LoginButton } from './Atoms.jsx'

const Login = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  const handleDisplay = () => {
    
    //toggles between the login and forgot password screens
    if(!showForgotPassword) {
      return(
        <LoginCard>
          <LoginTitle>Sign In</LoginTitle>
          <LoginForm>
            Email:
            <LoginInput type="text"/>
            Password:
            <LoginInput type="password"/>
            <RememberMe type="checkbox"/> Remember Me
            <LoginButton type="submit" value="Sign In"/>
            <span style={{cursor: 'pointer'}} onClick={() => {setShowForgotPassword(true)}}>Forgot Password?</span>
          </LoginForm>
        </LoginCard>
      )
    } else {
      return(
        <LoginCard>
          <LoginTitle>Forgot Password</LoginTitle>
          <LoginForm>
            Email:
            <LoginInput type="text"/>
            <LoginButton type="submit" value="Reset Password"/>
            <span style={{cursor: 'pointer'}} onClick={() => {setShowForgotPassword(false)}}>Back to Sign In</span>
          </LoginForm>
        </LoginCard>
      )
    }
  }

  return(
    <LoginContainer>
        {handleDisplay()}
    </LoginContainer>
  )
}

export default Login
