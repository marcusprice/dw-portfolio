import styled from 'styled-components'

/*login form*/
export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F0F4F8;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginCard = styled.div`
  border-radius: 10px;
  border: solid #627D98 1px;
  width: 384px;
  padding: 32px;
  box-sizing: border-box;
  /* background-color: #F0F4F8; */
  background-color: #334E68;
  -moz-box-shadow:    2px 5px 5px #666;
  -webkit-box-shadow: 2px 5px 5px #666;
  box-shadow:         2px 5px 5px #666;
`

export const LoginTitle = styled.h1`
  margin: 0; padding: 0;
  margin-bottom: 32px;
  font-family: 'roboto';
  font-weight: 500;
  width: 100%;
  border-bottom: solid #F0F4F8 1px;
  color: #F0F4F8;
`

export const LoginForm = styled.form`
  width: 100%;
  box-sizing: border-box;
  font-family: 'roboto';
  font-weight: 500;
  color: #F0F4F8;
`

export const LoginInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: 4px;
  margin-bottom: 32px;
  font-size: 18px;
  padding: 8px;
  border-radius: 5px;
  border: solid 0px;
  font-weight: 500;
  font-family: 'roboto';
  color: #102A43;
  background-color: #F0F4F8;
`

export const RememberMe = styled.input`
`

export const LoginButton = styled.input`
  margin-top: 16px;
  margin-bottom: 8px;
  display: block;
  height: 48px;
  width: 100%;
  border-radius: 5px;
  font-size: 20px;
  border: solid 0px;
  background-color: #102A43;
  color: #F0F4F8;
  font-family: 'roboto';
  cursor: pointer;
`
