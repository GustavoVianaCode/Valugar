import React, { useState } from 'react';
import { 
  PageWrapper, 
  PageTitle, 
  PageSubtitle, 
  NavigationButtons, 
  StepCounter,
  BackButtonPlain,
  ContinueButton,
  FinalizeButton
} from '../styles/components/LayoutStyles';
import StepIndicator from '../components/common/StepIndicator';
import TipoImovelStep from '../components/anunciar-imovel/TipoImovelStep';
import InfoBasicasStep from '../components/anunciar-imovel/InfoBasicasStep';
import LocalizacaoStep from '../components/anunciar-imovel/LocalizacaoStep';
import FotosStep from '../components/anunciar-imovel/FotosStep';

// Tipos de dados para o formulário
type PropertyType = 'residencial' | 'comercial' | null;
type AdFormat = 'completo' | 'simples' | null;
type ResidentialType = 'casa' | 'apartamento' | 'kitnet' | 'quarto' | 'sitio' | 'outros' | null;
type CommercialType = 'loja' | 'box' | 'armazem' | 'sala' | 'predio' | 'outros' | null;

// Etapas do formulário
type FormStep = 'tipo' | 'info' | 'localizacao' | 'fotos';

const AnunciarImovelPage: React.FC = () => {
  // Estados para controlar as etapas e dados do formulário
  const [currentStep, setCurrentStep] = useState<FormStep>('tipo');
  
  // Etapa 1 - Tipo
  const [propertyType, setPropertyType] = useState<PropertyType>(null);
  const [adFormat, setAdFormat] = useState<AdFormat>(null);
  
  // Etapa 2 - Informações Básicas
  const [shortTitle, setShortTitle] = useState<string>('');
  const [detailedDescription, setDetailedDescription] = useState<string>('');
  const [residentialType, setResidentialType] = useState<ResidentialType>(null);
  const [commercialType, setCommercialType] = useState<CommercialType>(null);
  const [bedrooms, setBedrooms] = useState<number>(1);
  const [bathrooms, setBathrooms] = useState<number>(1);
  const [rooms, setRooms] = useState<number>(1);
  const [area, setArea] = useState<string>('');
  const [rent, setRent] = useState<string>('');
  const [additionalCosts, setAdditionalCosts] = useState<boolean>(false);
  
  // Informações adicionais (apenas anúncio completo)
  const [doesNotPayWater, setDoesNotPayWater] = useState<boolean>(false);
  const [hasGarage, setHasGarage] = useState<boolean>(false);
  const [acceptsPets, setAcceptsPets] = useState<boolean>(false);
  const [isFurnished, setIsFurnished] = useState<boolean>(false);
  const [hasCeramicFloor, setHasCeramicFloor] = useState<boolean>(false);
  const [hasPool, setHasPool] = useState<boolean>(false);
  const [hasOceanView, setHasOceanView] = useState<boolean>(false);
  const [hasGrill, setHasGrill] = useState<boolean>(false);
  const [hasYard, setHasYard] = useState<boolean>(false);
  const [hasSolarPanel, setHasSolarPanel] = useState<boolean>(false);
  
  // Informações adicionais comerciais
  const [hasOwnParking, setHasOwnParking] = useState<boolean>(false);
  const [isAccessible, setIsAccessible] = useState<boolean>(false);
  const [hasAirConditioning, setHasAirConditioning] = useState<boolean>(false);
  const [hasChildArea, setHasChildArea] = useState<boolean>(false);
  const [hasKitchen, setHasKitchen] = useState<boolean>(false);
  const [hasWarehouse, setHasWarehouse] = useState<boolean>(false);
  
  // Etapa 3 - Localização
  const [cep, setCep] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [complement, setComplement] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  
  // Etapa 4 - Fotos
  const [photos, setPhotos] = useState<File[]>([]);
  const [video, setVideo] = useState<File | null>(null);
  const [wantsFeatured, setWantsFeatured] = useState<boolean>(false);

  // Função para navegar para a próxima etapa
  const nextStep = () => {
    if (currentStep === 'tipo') setCurrentStep('info');
    else if (currentStep === 'info') setCurrentStep('localizacao');
    else if (currentStep === 'localizacao') setCurrentStep('fotos');
    else if (currentStep === 'fotos') handleSubmit();
  };

  // Função para voltar para a etapa anterior
  const previousStep = () => {
    if (currentStep === 'info') setCurrentStep('tipo');
    else if (currentStep === 'localizacao') setCurrentStep('info');
    else if (currentStep === 'fotos') setCurrentStep('localizacao');
  };

  // Função para navegar para uma etapa específica
  const navigateToStep = (step: FormStep) => {
    if (canNavigateToStep(step)) {
      setCurrentStep(step);
    }
  };

  // Verifica se pode navegar para uma etapa específica
  const canNavigateToStep = (step: FormStep): boolean => {
    if (step === 'tipo') return true;
    if (step === 'info' && propertyType !== null && adFormat !== null) return true;
    if (step === 'localizacao' && propertyType !== null && adFormat !== null && validateBasicInfo()) return true;
    if (step === 'fotos' && propertyType !== null && adFormat !== null && validateBasicInfo() && validateLocation()) return true;
    return false;
  };

  // Verifica se uma etapa está completa
  const isStepCompleted = (step: FormStep): boolean => {
    if (step === 'tipo') return propertyType !== null && adFormat !== null;
    if (step === 'info') return propertyType !== null && adFormat !== null && validateBasicInfo();
    if (step === 'localizacao') return propertyType !== null && adFormat !== null && validateBasicInfo() && validateLocation();
    if (step === 'fotos') return propertyType !== null && adFormat !== null && validateBasicInfo() && validateLocation() && photos.length > 0;
    return false;
  };

  // Validações de cada etapa
  const validateBasicInfo = (): boolean => {
    if (!shortTitle || !detailedDescription || !rent || !area) return false;
    if (propertyType === 'residencial' && !residentialType) return false;
    if (propertyType === 'comercial' && !commercialType) return false;
    return true;
  };

  const validateLocation = (): boolean => {
    if (!cep || !state || !city || !street || !number || !neighborhood) return false;
    return true;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = () => {
    console.log({
      propertyType,
      adFormat,
      shortTitle,
      detailedDescription,
      residentialType,
      commercialType,
      bedrooms,
      bathrooms,
      rooms,
      area,
      rent,
      additionalCosts,
      location: {
        cep,
        street,
        number,
        complement,
        neighborhood,
        city
      },
      photos,
      video,
      additionalInfo: adFormat === 'completo' ? {
        residencial: propertyType === 'residencial' ? {
          doesNotPayWater,
          hasGarage,
          acceptsPets,
          isFurnished,
          hasCeramicFloor,
          hasPool,
          hasYard,
          hasSolarPanel
        } : null,
        comercial: propertyType === 'comercial' ? {
          hasOwnParking,
          isAccessible,
          hasAirConditioning,
          hasChildArea,
          hasKitchen,
          hasWarehouse
        } : null
      } : null
    });
    
    alert('Imóvel anunciado com sucesso!');
  };

  // Renderiza o contador de etapas
  const renderStepCounter = () => {
    if (currentStep === 'tipo') return '1/4';
    if (currentStep === 'info') return '2/4';
    if (currentStep === 'localizacao') return '3/4';
    if (currentStep === 'fotos') return '4/4';
    return '';
  };

  // Renderiza o botão de ação (continuar ou finalizar)
  const renderActionButton = () => {
    if (currentStep === 'fotos') {
      return (
        <FinalizeButton 
          onClick={handleSubmit}
          disabled={photos.length === 0}
        >
          Finalizar
        </FinalizeButton>
      );
    }
    
    return (
      <ContinueButton 
        onClick={nextStep}
        disabled={!canProceedToNextStep()}
      >
        Continuar
      </ContinueButton>
    );
  };

  // Verifica se pode avançar para a próxima etapa
  const canProceedToNextStep = (): boolean => {
    if (currentStep === 'tipo') return propertyType !== null && adFormat !== null;
    if (currentStep === 'info') return validateBasicInfo();
    if (currentStep === 'localizacao') return validateLocation();
    if (currentStep === 'fotos') return photos.length > 0;
    return false;
  };

  // Renderiza o conteúdo da etapa atual
  const renderStep = () => {
    switch (currentStep) {
      case 'tipo':
        return (
          <TipoImovelStep 
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            adFormat={adFormat}
            setAdFormat={setAdFormat}
          />
        );
        
      case 'info':
        return (
          <InfoBasicasStep 
            title={shortTitle}
            setTitle={setShortTitle}
            description={detailedDescription}
            setDescription={setDetailedDescription}
            residentialType={residentialType}
            setResidentialType={setResidentialType}
            bedrooms={bedrooms}
            setBedrooms={setBedrooms}
            bathrooms={bathrooms}
            setBathrooms={setBathrooms}
            area={area}
            setArea={setArea}
            rent={rent}
            setRent={setRent}
            additionalCosts={additionalCosts}
            setAdditionalCosts={setAdditionalCosts}
            wantsFeatured={wantsFeatured}
            hasGarage={hasOceanView}
            setHasGarage={setHasOceanView}
            acceptsPets={acceptsPets}
            setAcceptsPets={setAcceptsPets}
            hasPool={hasPool}
            setHasPool={setHasPool}
            hasCeramicFloor={hasCeramicFloor}
            setHasCeramicFloor={setHasCeramicFloor}
            isFurnished={isFurnished}
            setIsFurnished={setIsFurnished}
            hasOceanView={hasGarage}
            setHasOceanView={setHasGarage}
            hasGrill={hasGrill}
            setHasGrill={setHasGrill}
            hasSolarPanel={hasSolarPanel}
            setHasSolarPanel={setHasSolarPanel}
          />
        );
        
      case 'localizacao':
        return (
          <LocalizacaoStep 
            cep={cep}
            setCep={setCep}
            state={state}
            setState={setState}
            city={city}
            setCity={setCity}
            street={street}
            setStreet={setStreet}
            number={number}
            setNumber={setNumber}
            complement={complement}
            setComplement={setComplement}
            neighborhood={neighborhood}
            setNeighborhood={setNeighborhood}
          />
        );
        
      case 'fotos':
        return (
          <FotosStep
            wantsFeatured={wantsFeatured}
            photos={photos}
            setPhotos={setPhotos}
            video={video}
            setVideo={setVideo}
          />
        );
        
      default:
        return null;
    }
  };

  return (
    <PageWrapper>
      <PageTitle>Anunciar Imóvel</PageTitle>
      <PageSubtitle>Preencha os dados para anunciar seu imóvel de forma rápida e simples</PageSubtitle>
      
      <StepIndicator 
        currentStep={currentStep}
        navigateToStep={navigateToStep}
        canNavigateToStep={canNavigateToStep}
        isStepCompleted={isStepCompleted}
      />
      
      {renderStep()}
      
      <NavigationButtons>
        {currentStep !== 'tipo' ? (
          <BackButtonPlain onClick={previousStep}>
            ← Voltar
          </BackButtonPlain>
        ) : (
          <div></div> // Espaçador para manter o layout
        )}
        
        <StepCounter>{renderStepCounter()}</StepCounter>
        
        {renderActionButton()}
      </NavigationButtons>
    </PageWrapper>
  );
};

export default AnunciarImovelPage;