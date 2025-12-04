import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 48px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 32px;
  line-height: 1.6;
`;

const Button = styled.button`
  background: #0090C1;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
  margin-bottom: 12px;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    background: #007aa3;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 144, 193, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled(Button)`
  background: #6c757d;
  
  &:hover {
    background: #5a6268;
  }
`;

const InfoBox = styled.div`
  background: #f0f9ff;
  border: 2px solid #0090C1;
  border-radius: 8px;
  padding: 20px;
  margin-top: 24px;
  text-align: left;
`;

const InfoTitle = styled.h3`
  color: #0090C1;
  margin: 0 0 12px 0;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
`;

const InfoText = styled.p`
  color: #333;
  margin: 8px 0;
  font-size: 14px;
  
  strong {
    color: #0090C1;
  }
`;

const DebugLoginPage: React.FC = () => {
  const navigate = useNavigate();

  const mockLogin = () => {
    const mockUser = {
      id: '1',
      name: 'Usuário Teste',
      email: 'teste@valugar.com',
      phone: '(11) 99999-9999',
      avatar: '',
      createdAt: new Date()
    };

    localStorage.setItem('token', 'mock-token-' + Date.now());
    localStorage.setItem('user', JSON.stringify(mockUser));
    
    alert('✅ Login realizado com sucesso!\n\nVocê será redirecionado para o perfil.');
    navigate('/perfil');
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Card>
        <Title>🔧 Debug Login</Title>
        <Subtitle>
          Esta é uma página de desenvolvimento para testar funcionalidades que requerem autenticação.
        </Subtitle>

        <Button onClick={mockLogin}>
          🚀 Fazer Login Fake
        </Button>

        <SecondaryButton onClick={goToHome}>
          🏠 Voltar para Home
        </SecondaryButton>

        <InfoBox>
          <InfoTitle>ℹ️ Informações</InfoTitle>
          <InfoText>
            <strong>Email:</strong> teste@valugar.com
          </InfoText>
          <InfoText>
            <strong>Nome:</strong> Usuário Teste
          </InfoText>
          <InfoText>
            <strong>Token:</strong> Será gerado automaticamente
          </InfoText>
          <InfoText style={{ marginTop: 16, fontSize: 13, color: '#666' }}>
            ⚠️ Esta página é apenas para desenvolvimento. Remova antes do deploy em produção!
          </InfoText>
        </InfoBox>
      </Card>
    </Container>
  );
};

export default DebugLoginPage;
