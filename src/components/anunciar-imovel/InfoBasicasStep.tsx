import React from 'react';
import {
  FormSection,
  FormSectionTitle,
  FormSectionSubtitle,
  InputGroup,
  InputLabel,
  TextInput,
  TextArea,
  InputGrid,
  CurrencyInputWrapper,
  CurrencyPrefix,
  CurrencyInput,
  AccordionSection,
  AccordionHeader,
  AccordionTitle,
  AccordionIcon,
  AccordionContent
} from '../../styles/components/FormStyles';
import {
  PropertyTypeOptionsGrid,
  PropertyTypeOption,
  PropertyOptionIcon,
  PropertyOptionText,
  NumberCounter,
  CounterButton,
  AmenitiesGrid,
  AmenityOption,
  AmenityIcon,
  AmenityText
} from '../../styles/components/CardStyles';

interface InfoBasicasStepProps {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  residentialType: 'casa' | 'apartamento' | 'kitnet' | 'quarto' | 'sitio' | 'outros' | null;
  setResidentialType: (type: 'casa' | 'apartamento' | 'kitnet' | 'quarto' | 'sitio' | 'outros') => void;
  bedrooms: number;
  setBedrooms: (bedrooms: number) => void;
  bathrooms: number;
  setBathrooms: (bathrooms: number) => void;
  area: string;
  setArea: (area: string) => void;
  rent: string;
  setRent: (rent: string) => void;
  additionalCosts: boolean;
  setAdditionalCosts: (additionalCosts: boolean) => void;
  wantsFeatured: boolean;
  
  // Amenidades (apenas para anúncios com destaque)
  hasGarage?: boolean;
  setHasGarage?: (hasGarage: boolean) => void;
  acceptsPets?: boolean;
  setAcceptsPets?: (acceptsPets: boolean) => void;
  hasPool?: boolean;
  setHasPool?: (hasPool: boolean) => void;
  hasCeramicFloor?: boolean;
  setHasCeramicFloor?: (hasCeramicFloor: boolean) => void;
  isFurnished?: boolean;
  setIsFurnished?: (isFurnished: boolean) => void;
  hasOceanView?: boolean;
  setHasOceanView?: (hasOceanView: boolean) => void;
  hasGrill?: boolean;
  setHasGrill?: (hasGrill: boolean) => void;
  hasSolarPanel?: boolean;
  setHasSolarPanel?: (hasSolarPanel: boolean) => void;
}

const InfoBasicasStep: React.FC<InfoBasicasStepProps> = ({
  title,
  setTitle,
  description,
  setDescription,
  residentialType,
  setResidentialType,
  bedrooms,
  setBedrooms,
  bathrooms,
  setBathrooms,
  area,
  setArea,
  rent,
  setRent,
  additionalCosts,
  setAdditionalCosts,
  wantsFeatured,
  hasGarage,
  setHasGarage,
  acceptsPets,
  setAcceptsPets,
  hasPool,
  setHasPool,
  hasCeramicFloor,
  setHasCeramicFloor,
  isFurnished,
  setIsFurnished,
  hasOceanView,
  setHasOceanView,
  hasGrill,
  setHasGrill,
  hasSolarPanel,
  setHasSolarPanel
}) => {
  return (
    <>
      <FormSection>
        <FormSectionTitle>Conte-nos sobre seu imóvel</FormSectionTitle>
        <FormSectionSubtitle>Essas informações são a chave para atrair o interessado ideal para o seu imóvel.</FormSectionSubtitle>
        
        <InputGroup>
          <InputLabel>Em poucas palavras descreva seu imóvel</InputLabel>
          <TextInput 
            type="text" 
            placeholder="Ex: Apartamento 2 quartos no Centro" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </InputGroup>
        
        <InputGroup>
          <InputLabel>Descreva seu imóvel com mais detalhes (opcional)</InputLabel>
          <TextArea 
            placeholder="Fale sobre os cômodos, informações importantes, vizinhança, se tem escolas perto..." 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputGroup>
      </FormSection>
      
      <FormSection>
        <FormSectionTitle>Informações do imóvel</FormSectionTitle>
        <FormSectionSubtitle>Informações ajudarão os interessados a conhecer melhor seu imóvel</FormSectionSubtitle>
        
        <InputGroup>
          <InputLabel>Tipo do imóvel</InputLabel>
          <PropertyTypeOptionsGrid>
            <PropertyTypeOption 
              active={residentialType === 'casa'} 
              onClick={() => setResidentialType('casa')}
            >
              <PropertyOptionIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </PropertyOptionIcon>
              <PropertyOptionText>Casa</PropertyOptionText>
            </PropertyTypeOption>
            
            <PropertyTypeOption 
              active={residentialType === 'apartamento'} 
              onClick={() => setResidentialType('apartamento')}
            >
              <PropertyOptionIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </PropertyOptionIcon>
              <PropertyOptionText>Apartamento/ Sobrado</PropertyOptionText>
            </PropertyTypeOption>
            
            <PropertyTypeOption 
              active={residentialType === 'kitnet'} 
              onClick={() => setResidentialType('kitnet')}
            >
              <PropertyOptionIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  <rect x="9" y="14" width="6" height="2" opacity="0.5"/>
                </svg>
              </PropertyOptionIcon>
              <PropertyOptionText>Kitnet</PropertyOptionText>
            </PropertyTypeOption>
            
            <PropertyTypeOption 
              active={residentialType === 'quarto'} 
              onClick={() => setResidentialType('quarto')}
            >
              <PropertyOptionIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 9.556V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.526 2 13v4a1 1 0 001 1h1v4h2v-4h12v4h2v-4h1a1 1 0 001-1v-4c0-1.474-.811-2.75-2-3.444zM11 9H6V7h5v2zm7 0h-5V7h5v2z"/>
                </svg>
              </PropertyOptionIcon>
              <PropertyOptionText>Quarto</PropertyOptionText>
            </PropertyTypeOption>
            
            <PropertyTypeOption 
              active={residentialType === 'sitio'} 
              onClick={() => setResidentialType('sitio')}
            >
              <PropertyOptionIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-7a1 1 0 011-1h2a1 1 0 011 1v7a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6" />
                </svg>
              </PropertyOptionIcon>
              <PropertyOptionText>Sítio/ Chácara</PropertyOptionText>
            </PropertyTypeOption>
            
            <PropertyTypeOption 
              active={residentialType === 'outros'} 
              onClick={() => setResidentialType('outros')}
            >
              <PropertyOptionIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </PropertyOptionIcon>
              <PropertyOptionText>Outros</PropertyOptionText>
            </PropertyTypeOption>
          </PropertyTypeOptionsGrid>
        </InputGroup>
        
        <InputGrid>
          <InputGroup>
            <InputLabel>Número de quartos</InputLabel>
            <NumberCounter>
              <CounterButton 
                active={bedrooms === 1}
                onClick={() => setBedrooms(1)}
              >
                1
              </CounterButton>
              <CounterButton 
                active={bedrooms === 2}
                onClick={() => setBedrooms(2)}
              >
                2
              </CounterButton>
              <CounterButton 
                active={bedrooms === 3}
                onClick={() => setBedrooms(3)}
              >
                3
              </CounterButton>
              <CounterButton 
                active={bedrooms >= 4}
                onClick={() => setBedrooms(4)}
              >
                4+
              </CounterButton>
            </NumberCounter>
          </InputGroup>
          
          <InputGroup>
            <InputLabel>Número de banheiros</InputLabel>
            <NumberCounter>
              <CounterButton 
                active={bathrooms === 1}
                onClick={() => setBathrooms(1)}
              >
                1
              </CounterButton>
              <CounterButton 
                active={bathrooms === 2}
                onClick={() => setBathrooms(2)}
              >
                2
              </CounterButton>
              <CounterButton 
                active={bathrooms >= 3}
                onClick={() => setBathrooms(3)}
              >
                3+
              </CounterButton>
            </NumberCounter>
          </InputGroup>
        </InputGrid>
        
        <InputGroup>
          <InputLabel>Tamanho do imóvel (opcional)</InputLabel>
          <TextInput 
            type="text"
            placeholder="Área em m²"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </InputGroup>
      </FormSection>
      
      {wantsFeatured && (
        <FormSection>
          <FormSectionTitle>Informações adicionais</FormSectionTitle>
          <FormSectionSubtitle>Ótimo! Você escolheu dar mais destaque para o seu anúncio, selecione as opções</FormSectionSubtitle>
          
          <AmenitiesGrid>
            <AmenityOption 
              active={!hasGarage}
              onClick={() => setHasGarage && setHasGarage(!hasGarage)}
            >
              <AmenityIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </AmenityIcon>
              <AmenityText>Não paga água</AmenityText>
            </AmenityOption>
            
            <AmenityOption 
              active={hasOceanView}
              onClick={() => setHasOceanView && setHasOceanView(!hasOceanView)}
            >
              <AmenityIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </AmenityIcon>
              <AmenityText>Possui garagem</AmenityText>
            </AmenityOption>
            
            <AmenityOption 
              active={acceptsPets}
              onClick={() => setAcceptsPets && setAcceptsPets(!acceptsPets)}
            >
              <AmenityIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </AmenityIcon>
              <AmenityText>Aceita pet</AmenityText>
            </AmenityOption>
            
            <AmenityOption 
              active={hasCeramicFloor}
              onClick={() => setHasCeramicFloor && setHasCeramicFloor(!hasCeramicFloor)}
            >
              <AmenityIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                </svg>
              </AmenityIcon>
              <AmenityText>Piso de cerâmica</AmenityText>
            </AmenityOption>
            
            <AmenityOption 
              active={isFurnished}
              onClick={() => setIsFurnished && setIsFurnished(!isFurnished)}
            >
              <AmenityIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </AmenityIcon>
              <AmenityText>Imóvel fachada</AmenityText>
            </AmenityOption>
            
            <AmenityOption 
              active={hasGrill}
              onClick={() => setHasGrill && setHasGrill(!hasGrill)}
            >
              <AmenityIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </AmenityIcon>
              <AmenityText>Possui churrasqueira</AmenityText>
            </AmenityOption>
            
            <AmenityOption 
              active={hasPool}
              onClick={() => setHasPool && setHasPool(!hasPool)}
            >
              <AmenityIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </AmenityIcon>
              <AmenityText>Possui piscina</AmenityText>
            </AmenityOption>
            
            <AmenityOption 
              active={hasSolarPanel}
              onClick={() => setHasSolarPanel && setHasSolarPanel(!hasSolarPanel)}
            >
              <AmenityIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </AmenityIcon>
              <AmenityText>Painel solar</AmenityText>
            </AmenityOption>
          </AmenitiesGrid>
        </FormSection>
      )}
      
      <FormSection>
        <FormSectionTitle>Aluguel e custos</FormSectionTitle>
        <FormSectionSubtitle>Informe o valor do aluguel e possíveis custos extras</FormSectionSubtitle>
        
        <InputGroup>
          <InputLabel>Valor mensal do aluguel</InputLabel>
          <CurrencyInputWrapper>
            <CurrencyPrefix>R$</CurrencyPrefix>
            <CurrencyInput 
              type="text"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
            />
          </CurrencyInputWrapper>
        </InputGroup>
        
        <AccordionSection>
          <AccordionHeader onClick={() => setAdditionalCosts(!additionalCosts)}>
            <AccordionTitle>Custos adicionais (opcional)</AccordionTitle>
            <AccordionIcon>{additionalCosts ? '↑' : '↓'}</AccordionIcon>
          </AccordionHeader>
          <AccordionContent isOpen={additionalCosts}>
            <InputGroup>
              <FormSectionSubtitle>Informe o valor mensal de custos como condomínio e IPTU que <strong>não</strong> estão inclusos no aluguel</FormSectionSubtitle>
              {/* Aqui você pode adicionar campos para condomínio, IPTU, etc. */}
            </InputGroup>
          </AccordionContent>
        </AccordionSection>
      </FormSection>
    </>
  );
};

export default InfoBasicasStep;