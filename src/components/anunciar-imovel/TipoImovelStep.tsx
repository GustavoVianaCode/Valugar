import React from 'react';
import { 
  ContentSection,
  SectionTitle,
  SectionSubtitle
} from '../../styles/components/FormStyles';
import {
  PropertyTypeContainer,
  PropertyTypeCard,
  PropertyTypeIcon,
  PropertyTypeTitle,
  PropertyTypeDescription,
  FeaturedOptionSection,
  FeaturedOptionTitle,
  FeaturedOptionSubtitle,
  FeaturedChoicesContainer,
  FeaturedChoice,
  ChoiceIcon,
  ChoiceText
} from '../../styles/components/CardStyles';
import { Avatar } from '../../styles/components/LayoutStyles';

interface TipoImovelStepProps {
  propertyType: 'residencial' | 'comercial' | null;
  setPropertyType: (type: 'residencial' | 'comercial') => void;
  wantsFeatured: boolean;
  setWantsFeatured: (featured: boolean) => void;
}

const TipoImovelStep: React.FC<TipoImovelStepProps> = ({
  propertyType,
  setPropertyType,
  wantsFeatured,
  setWantsFeatured
}) => {
  return (
    <>
      <ContentSection>
        <SectionTitle>Que tipo de imóvel você quer anunciar?</SectionTitle>
        <SectionSubtitle>Escolha a categoria que melhor descreve seu imóvel</SectionSubtitle>
        
        <PropertyTypeContainer>
          <PropertyTypeCard 
            active={propertyType === 'residencial'}
            onClick={() => setPropertyType('residencial')}
          >
            <PropertyTypeIcon>🏠</PropertyTypeIcon>
            <PropertyTypeTitle>Residencial</PropertyTypeTitle>
            <PropertyTypeDescription>Ex: Casa, apartamento, kitnet...</PropertyTypeDescription>
          </PropertyTypeCard>
          
          <PropertyTypeCard 
            active={propertyType === 'comercial'}
            onClick={() => setPropertyType('comercial')}
          >
            <PropertyTypeIcon>🏢</PropertyTypeIcon>
            <PropertyTypeTitle>Comercial</PropertyTypeTitle>
            <PropertyTypeDescription>Ex: Loja, escritório, galpão...</PropertyTypeDescription>
          </PropertyTypeCard>
        </PropertyTypeContainer>
      </ContentSection>
      
      <FeaturedOptionSection>
        <FeaturedOptionTitle>
          Deseja fazer um anúncio mais completo? <span>ⓘ</span>
        </FeaturedOptionTitle>
        <FeaturedOptionSubtitle>
          Adicione mais informações no seu anúncio e dê mais destaque a ele
        </FeaturedOptionSubtitle>
        
        <FeaturedChoicesContainer>
          <FeaturedChoice 
            active={wantsFeatured} 
            onClick={() => setWantsFeatured(true)}
          >
            <Avatar>
              <img src="https://via.placeholder.com/35" alt="Avatar" />
            </Avatar>
            <ChoiceIcon isChecked={wantsFeatured}>
              {wantsFeatured ? '✓' : ''}
            </ChoiceIcon>
            <ChoiceText>Sim, quero mais destaque pro meu anúncio</ChoiceText>
          </FeaturedChoice>
          
          <FeaturedChoice 
            active={!wantsFeatured}
            onClick={() => setWantsFeatured(false)}
          >
            <ChoiceIcon isChecked={!wantsFeatured}>
              {!wantsFeatured ? '✕' : ''}
            </ChoiceIcon>
            <ChoiceText>Não quero destaque</ChoiceText>
          </FeaturedChoice>
        </FeaturedChoicesContainer>
      </FeaturedOptionSection>
    </>
  );
};

export default TipoImovelStep;