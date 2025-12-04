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
  
  @media (max-width: 768px) {
    padding: 30px;
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
    border: none;
    box-shadow: none;
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ForgotPassword = styled(Link)`
  display: block;
  text-align: left;
  font-size: 14px;
  color: #0090C1;
  margin: 8px 0 20px;
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
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                )}
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