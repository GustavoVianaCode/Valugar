import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 20px;
  background-color: #f8f9fa;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const PageTitle = styled.h1`
  color: #333;
  font-size: 32px;
  margin-bottom: 12px;
  font-weight: 600;
`;

const PageSubtitle = styled.p`
  color: #666;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContactInfoItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e8f4f8;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 20px;
    height: 20px;
    color: #0090C1;
  }
`;

const ContactInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ContactLabel = styled.span`
  font-size: 13px;
  color: #666;
  font-weight: 500;
`;

const ContactValue = styled.span`
  font-size: 15px;
  color: #333;
  font-weight: 400;
`;

const RightSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
`;

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
`;

const FormIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: #e8f4f8;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 24px;
    color: #0090C1;
  }
`;

const FormHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FormTitle = styled.h2`
  color: #333;
  font-size: 20px;
  margin: 0;
  font-weight: 600;
`;

const FormSubtitle = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  transition: all 0.2s;
  
  &::placeholder {
    color: #aaa;
  }
  
  &:focus {
    outline: none;
    border-color: #0090C1;
    box-shadow: 0 0 0 3px rgba(0, 144, 193, 0.1);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  background: white;
  transition: all 0.2s;
  
  &::placeholder {
    color: #aaa;
  }
  
  &:focus {
    outline: none;
    border-color: #0090C1;
    box-shadow: 0 0 0 3px rgba(0, 144, 193, 0.1);
  }
`;

const SubmitButton = styled.button`
  background-color: #0090C1;
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s;
  
  &:hover {
    background-color: #007aa3;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 144, 193, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ContactInfoSection = styled.section`
  margin-top: 60px;
`;

const ContactInfoTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
  color: #0090C1;
`;

const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
`;

const ContactIcon = styled.div`
  color: #0090C1;
  font-size: 32px;
  margin-bottom: 15px;
`;

const ContactTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ContactDetail = styled.p`
  color: #666;
`;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <PageContainer>
      <ContentGrid>
        <LeftSection>
          <div>
            <PageTitle>Entre em contato</PageTitle>
            <PageSubtitle>
              Estamos aqui para ajudar. Envie sua mensagem e responderemos o mais breve possível
            </PageSubtitle>
          </div>
          
          <ContactInfoList>
            <ContactInfoItem>
              <IconWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </IconWrapper>
              <ContactInfoText>
                <ContactLabel>Email</ContactLabel>
                <ContactValue>contato@imoveis.com</ContactValue>
              </ContactInfoText>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <IconWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </IconWrapper>
              <ContactInfoText>
                <ContactLabel>Telefone</ContactLabel>
                <ContactValue>(00) 0000-0000</ContactValue>
              </ContactInfoText>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <IconWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </IconWrapper>
              <ContactInfoText>
                <ContactLabel>Endereço</ContactLabel>
                <ContactValue>Rua Exemplo, 123</ContactValue>
                <ContactValue>Centro, Cidade - UF</ContactValue>
              </ContactInfoText>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <IconWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </IconWrapper>
              <ContactInfoText>
                <ContactLabel>Horário</ContactLabel>
                <ContactValue>Seg - Sex: 8h às 18h</ContactValue>
                <ContactValue>Sábado: 9h às 13h</ContactValue>
              </ContactInfoText>
            </ContactInfoItem>
          </ContactInfoList>
        </LeftSection>
        
        <RightSection>
          <FormHeader>
            <FormIcon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </FormIcon>
            <FormHeaderText>
              <FormTitle>Envie uma mensagem</FormTitle>
              <FormSubtitle>Preencha o formulário abaixo</FormSubtitle>
            </FormHeaderText>
          </FormHeader>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Nome completo</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <Label htmlFor="subject">Assunto</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Como podemos ajudar?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Descreva sua dúvida ou sugestão"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit">Enviar mensagem</SubmitButton>
          </ContactForm>
        </RightSection>
      </ContentGrid>
    </PageContainer>
  );
};

export default ContactPage;