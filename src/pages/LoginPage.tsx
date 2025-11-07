import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background-color: #fff;
`;

const LoginContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const WelcomeTitle = styled.h1`
  color: #0090C1;
  font-size: 24px;
  text-align: center;
  margin-bottom: 8px;
  font-weight: 600;
`;

const WelcomeSubtitle = styled.p`
  color: #666;
  font-size: 14px;
  text-align: center;
  margin-bottom: 30px;
`;

const GoogleButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 12px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  margin-bottom: 20px;
  
  &:hover {
    background-color: #f9f9f9;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }
  
  span {
    padding: 0 10px;
    color: #999;
    font-size: 14px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  background-color: #f9f9f9;

  &::placeholder {
    color: #aaa;
  }
`;

const PasswordField = styled.div`
  position: relative;
`;

const PasswordVisibilityButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
`;

const ForgotPassword = styled(Link)`
  display: block;
  text-align: left;
  font-size: 14px;
  color: #0090C1;
  margin: -10px 0 20px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  background-color: #0090C1;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 14px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;
  
  &:hover {
    background-color: #007aa9;
  }
`;

const RegisterPrompt = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 0;
  
  a {
    color: #0090C1;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <PageWrapper>
      <LoginContainer>
        <WelcomeTitle>Bem-vindo de volta!</WelcomeTitle>
        <WelcomeSubtitle>Entre com sua conta para continuar</WelcomeSubtitle>
        
        <GoogleButton type="button">
          <img src="https://www.google.com/favicon.ico" alt="Google" width="18" height="18" />
          Continuar com o Google
        </GoogleButton>
        
        <Divider>
          <span>ou</span>
        </Divider>
        
        <form>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Digite seu email" />
          </FormGroup>
          
          <FormGroup>
            <Label>Senha</Label>
            <PasswordField>
              <Input 
                type={showPassword ? "text" : "password"} 
                placeholder="Digite sua senha" 
              />
              <PasswordVisibilityButton 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </PasswordVisibilityButton>
            </PasswordField>
            <ForgotPassword to="/esqueci-senha">Esqueceu sua senha?</ForgotPassword>
          </FormGroup>
          
          <LoginButton type="submit">Entrar</LoginButton>
          
          <RegisterPrompt>
            Não possui uma conta? <Link to="/cadastrar">Cadastre-se</Link>
          </RegisterPrompt>
        </form>
      </LoginContainer>
    </PageWrapper>
  );
};

export default LoginPage;