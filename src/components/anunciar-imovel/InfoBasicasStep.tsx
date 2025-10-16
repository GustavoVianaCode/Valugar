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
              <PropertyOptionIcon>🏠</PropertyOptionIcon>
              <PropertyOptionText>Casa</PropertyOptionText>
            </PropertyTypeOption>
            
            <PropertyTypeOption 
              active={residentialType === 'apartamento'} 
              onClick={() => setResidentialType('apartamento')}
            >
              <PropertyOptionIcon>🏢</PropertyOptionIcon>
              <PropertyOptionText>Apartamento/ Sobrado</PropertyOptionText>
            </PropertyTypeOption>
            
            <PropertyTypeOption 
              active={residentialType === 'kitnet'} 
              onClick={() => setResidentialType('kitnet')}
            >
              <PropertyOptionIcon>🏠</PropertyOptionIcon>
              <PropertyOptionText>Kitnet</PropertyOptionText>
            </PropertyTypeOption>
            
            <PropertyTypeOption 
              active={residentialType === 'quarto'} 
              onClick={() => setResidentialType('quarto')}
            >
              <PropertyOptionIcon>🛏️</PropertyOptionIcon>
              <PropertyOptionText>Quarto</PropertyOptionText>
            </PropertyTypeOption>
            
            <PropertyTypeOption 
              active={residentialType === 'sitio'} 
              onClick={() => setResidentialType('sitio')}
            >
              <PropertyOptionIcon>🏕️</PropertyOptionIcon>
              <PropertyOptionText>Sítio/ Chácara</PropertyOptionText>
            </PropertyTypeOption>
            
            <PropertyTypeOption 
              active={residentialType === 'outros'} 
              onClick={() => setResidentialType('outros')}
            >
              <PropertyOptionIcon>📦</PropertyOptionIcon>
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
      
      {wantsFeatured && setHasGarage && setAcceptsPets && setHasPool && 
       setHasCeramicFloor && setIsFurnished && setHasOceanView && 
       setHasGrill && setHasSolarPanel && (
        <FormSection>
          <FormSectionTitle>Informações adicionais</FormSectionTitle>
          <FormSectionSubtitle>Ótimo! Você escolheu dar mais destaque para o seu anúncio, selecione as opções</FormSectionSubtitle>
          
          <AmenitiesGrid>
            <AmenityOption 
              active={!hasGarage}
              onClick={() => setHasGarage(!hasGarage)}
            >
              <AmenityIcon>🚫</AmenityIcon>
              <AmenityText>Não paga água</AmenityText>
            </AmenityOption>
            
            <AmenityOption 
              active={hasOceanView}
              onClick={() => setHasOceanView(!hasOceanView)}
            >
              <AmenityIcon>🌊</AmenityIcon>
              <AmenityText>Possui garagem</AmenityText>
            </AmenityOption>
            
            <AmenityOption 
              active={acceptsPets}
              onClick={() => setAcceptsPets(!acceptsPets)}
            >
              <AmenityIcon>🐶</AmenityIcon>
              <AmenityText>Aceita pet</AmenityText>
            </AmenityOption>
            
            <AmenityOption 
              active={hasCeramicFloor}
              onClick={() => setHasCeramicFloor(!hasCeramicFloor)}
            >
              <AmenityIcon>🧱</AmenityIcon>
              <AmenityText>Piso de cerâmica</AmenityText>
            </AmenityOption>
            
            <AmenityOption 
              active={isFurnished}
              onClick={() => setIsFurnished(!isFurnished)}
            >
              <AmenityIcon>🏠</AmenityIcon>
              <AmenityText>Imóvel fachada</AmenityText>
            </AmenityOption>
            
            <AmenityOption 
              active={hasGrill}
              onClick={() => setHasGrill(!hasGrill)}
            >
              <AmenityIcon>🍖</AmenityIcon>
              <AmenityText>Possui churrasqueira</AmenityText>
            </AmenityOption>
            
            <AmenityOption 
              active={hasPool}
              onClick={() => setHasPool(!hasPool)}
            >
              <AmenityIcon>🏊</AmenityIcon>
              <AmenityText>Possui piscina</AmenityText>
            </AmenityOption>
            
            <AmenityOption 
              active={hasSolarPanel}
              onClick={() => setHasSolarPanel(!hasSolarPanel)}
            >
              <AmenityIcon>☀️</AmenityIcon>
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