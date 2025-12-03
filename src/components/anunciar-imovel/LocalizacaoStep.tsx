import React from 'react';
import {
  FormSection,
  FormSectionTitle,
  FormSectionSubtitle,
  InputGroup,
  InputLabel,
  TextInput,
  SelectInput,
  InputGrid
} from '../../styles/components/FormStyles';

interface LocalizacaoStepProps {
  cep: string;
  setCep: (cep: string) => void;
  state: string;
  setState: (state: string) => void;
  city: string;
  setCity: (city: string) => void;
  street: string;
  setStreet: (street: string) => void;
  number: string;
  setNumber: (number: string) => void;
  complement: string;
  setComplement: (complement: string) => void;
  neighborhood: string;
  setNeighborhood: (neighborhood: string) => void;
}

const LocalizacaoStep: React.FC<LocalizacaoStepProps> = ({
  cep,
  setCep,
  state,
  setState,
  city,
  setCity,
  street,
  setStreet,
  number,
  setNumber,
  complement,
  setComplement,
  neighborhood,
  setNeighborhood
}) => {
  return (
    <FormSection>
      <FormSectionTitle>Onde seu imóvel está localizado</FormSectionTitle>
      <FormSectionSubtitle>Essas informações são a chave para atrair o interessado ideal para o seu imóvel.</FormSectionSubtitle>
      
      <InputGroup>
        <InputLabel>CEP</InputLabel>
        <TextInput 
          type="text"
          placeholder="00000-000"
          value={cep}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '');
            const formatted = value.length > 5 ? `${value.slice(0, 5)}-${value.slice(5, 8)}` : value;
            setCep(formatted);
          }}
          maxLength={9}
        />
      </InputGroup>
      
      <InputGrid>
        <InputGroup>
          <InputLabel>Estado</InputLabel>
          <SelectInput 
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Selecione o estado</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </SelectInput>
        </InputGroup>
        
        <InputGroup>
          <InputLabel>Cidade</InputLabel>
          <TextInput 
            type="text"
            placeholder="Ex: Tabuleiro do norte"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </InputGroup>
      </InputGrid>
      
      <InputGroup>
        <InputLabel>Logradouro</InputLabel>
        <TextInput 
          type="text"
          placeholder="Rua, Avenida, Travessa, Beco..."
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </InputGroup>
      
      <InputGrid>
        <InputGroup>
          <InputLabel>Número</InputLabel>
          <TextInput 
            type="text"
            placeholder="123"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </InputGroup>
        
        <InputGroup>
          <InputLabel>Complemento (opcional)</InputLabel>
          <TextInput 
            type="text"
            placeholder="Ex: Apto 123, Bloco B"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />
        </InputGroup>
      </InputGrid>
      
      <InputGroup>
        <InputLabel>Bairro</InputLabel>
        <TextInput 
          type="text"
          placeholder="Ex: Centro"
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
        />
      </InputGroup>
    </FormSection>
  );
};

export default LocalizacaoStep;