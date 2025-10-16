import React from 'react';
import {
  FormSection,
  FormSectionTitle,
  FormSectionSubtitle,
  InputGroup,
  InputLabel,
  TextInput
} from '../../styles/components/FormStyles';
import {
  ContactOptionsGrid,
  ContactOption,
  ContactOptionIcon,
  ContactOptionText
} from '../../styles/components/MediaStyles';

interface ContatoStepProps {
  name: string;
  setName: (name: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  email: string;
  setEmail: (email: string) => void;
  contactPreference: 'qualquer' | 'telefone' | 'email' | null;
  setContactPreference: (preference: 'qualquer' | 'telefone' | 'email') => void;
}

const ContatoStep: React.FC<ContatoStepProps> = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  contactPreference,
  setContactPreference
}) => {
  return (
    <FormSection>
      <FormSectionTitle>Contato</FormSectionTitle>
      <FormSectionSubtitle>Essas informações serão mostradas para quem tiver interesse no seu imóvel.</FormSectionSubtitle>
      
      <InputGroup>
        <InputLabel>Nome completo</InputLabel>
        <TextInput 
          type="text"
          placeholder="Digite seu nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputGroup>
      
      <InputGroup>
        <InputLabel>Telefone</InputLabel>
        <TextInput 
          type="text"
          placeholder="Digite seu número no WhatsApp"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </InputGroup>
      
      <InputGroup>
        <InputLabel>E-mail</InputLabel>
        <TextInput 
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputGroup>
      
      <InputGroup>
        <InputLabel>Formas de contato</InputLabel>
        <FormSectionSubtitle>Diga como prefere ser contatado.</FormSectionSubtitle>
        
        <ContactOptionsGrid>
          <ContactOption 
            active={contactPreference === 'qualquer'}
            onClick={() => setContactPreference('qualquer')}
          >
            <ContactOptionIcon>📱</ContactOptionIcon>
            <ContactOptionText>Qualquer meio</ContactOptionText>
          </ContactOption>
          
          <ContactOption 
            active={contactPreference === 'telefone'}
            onClick={() => setContactPreference('telefone')}
          >
            <ContactOptionIcon>📞</ContactOptionIcon>
            <ContactOptionText>Apenas telefone</ContactOptionText>
          </ContactOption>
          
          <ContactOption 
            active={contactPreference === 'email'}
            onClick={() => setContactPreference('email')}
          >
            <ContactOptionIcon>✉️</ContactOptionIcon>
            <ContactOptionText>Apenas Email</ContactOptionText>
          </ContactOption>
        </ContactOptionsGrid>
      </InputGroup>
    </FormSection>
  );
};

export default ContatoStep;