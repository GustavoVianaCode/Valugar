import React from 'react';
import styled from 'styled-components';

const StepContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 48px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  max-width: 900px;
  margin: 40px auto;
  
  @media (max-width: 768px) {
    padding: 24px;
    margin: 20px auto;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 12px 0;
  font-family: 'Poppins', sans-serif;
`;

const SectionSubtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 24px 0;
  line-height: 1.5;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const OptionCard = styled.button<{ selected: boolean }>`
  background: ${props => props.selected ? '#e0f2fe' : 'white'};
  border: 2px solid ${props => props.selected ? '#0090C1' : '#e5e7eb'};
  border-radius: 12px;
  padding: 32px 24px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  
  &:hover {
    border-color: #0090C1;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 144, 193, 0.15);
  }
  
  svg {
    width: 48px;
    height: 48px;
    color: ${props => props.selected ? '#0090C1' : '#6b7280'};
  }
`;

const OptionTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
  font-family: 'Poppins', sans-serif;
`;

const OptionDescription = styled.div`
  font-size: 13px;
  color: #6b7280;
  line-height: 1.4;
`;

const RadioOption = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  border: 2px solid ${props => props.selected ? '#0090C1' : '#e5e7eb'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${props => props.selected ? '#e0f2fe' : 'white'};
  
  &:hover {
    border-color: #0090C1;
  }
  
  input {
    margin-top: 2px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: #0090C1;
  }
`;

const RadioContent = styled.div`
  flex: 1;
`;

const RadioTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 4px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RecommendedBadge = styled.span`
  background: #fbbf24;
  color: #78350f;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const RadioDescription = styled.div`
  font-size: 13px;
  color: #6b7280;
  line-height: 1.4;
`;

interface TipoImovelStepProps {
  propertyType: 'residencial' | 'comercial' | null;
  setPropertyType: (type: 'residencial' | 'comercial' | null) => void;
  adFormat: 'completo' | 'simples' | null;
  setAdFormat: (format: 'completo' | 'simples' | null) => void;
}

const TipoImovelStep: React.FC<TipoImovelStepProps> = ({
  propertyType,
  setPropertyType,
  adFormat,
  setAdFormat
}) => {
  return (
    <StepContainer>
      <Section>
        <SectionTitle>Que tipo de imóvel você quer anunciar?</SectionTitle>
        <SectionSubtitle>Escolha a categoria que melhor descreve seu imóvel</SectionSubtitle>
        
        <OptionsGrid>
          <OptionCard 
            selected={propertyType === 'residencial'}
            onClick={() => setPropertyType('residencial')}
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <OptionTitle>Residencial</OptionTitle>
            <OptionDescription>
              Ex: Casas, apartamentos, kitnets, quartos, sítios...
            </OptionDescription>
          </OptionCard>
          
          <OptionCard 
            selected={propertyType === 'comercial'}
            onClick={() => setPropertyType('comercial')}
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
            </svg>
            <OptionTitle>Comercial</OptionTitle>
            <OptionDescription>
              Ex: Lojas, pontos comerciais, salas, conjuntos, galpões...
            </OptionDescription>
          </OptionCard>
        </OptionsGrid>
      </Section>
      
      {propertyType && (
        <Section>
          <SectionTitle>Formato do anúncio</SectionTitle>
          <SectionSubtitle>Um anúncio mais completo atrai mais pessoas.</SectionSubtitle>
          
          <OptionsGrid>
            <RadioOption selected={adFormat === 'completo'}>
              <input 
                type="radio"
                name="adFormat"
                checked={adFormat === 'completo'}
                onChange={() => setAdFormat('completo')}
              />
              <RadioContent>
                <RadioTitle>
                  Anúncio completo
                  <RecommendedBadge>Recomendado</RecommendedBadge>
                </RadioTitle>
                <RadioDescription>
                  Mais detalhes, mais visitantes
                </RadioDescription>
              </RadioContent>
            </RadioOption>
            
            <RadioOption selected={adFormat === 'simples'}>
              <input 
                type="radio"
                name="adFormat"
                checked={adFormat === 'simples'}
                onChange={() => setAdFormat('simples')}
              />
              <RadioContent>
                <RadioTitle>Anúncio simples</RadioTitle>
                <RadioDescription>
                  Rápido e básico
                </RadioDescription>
              </RadioContent>
            </RadioOption>
          </OptionsGrid>
        </Section>
      )}
    </StepContainer>
  );
};

export default TipoImovelStep;