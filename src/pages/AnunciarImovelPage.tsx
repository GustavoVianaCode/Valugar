import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
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
import ContatoStep from '../components/anunciar-imovel/ContatoStep';

// Tipos de dados para o formulário
type PropertyType = 'residencial' | 'comercial' | null;
type ResidentialType = 'casa' | 'apartamento' | 'kitnet' | 'quarto' | 'sitio' | 'outros' | null;
type ContactPreference = 'qualquer' | 'telefone' | 'email' | null;

// Etapas do formulário
type FormStep = 'tipo' | 'info' | 'localizacao' | 'fotos' | 'contato';

const AnunciarImovelPage: React.FC = () => {
  // Estados para controlar as etapas e dados do formulário
  const [currentStep, setCurrentStep] = useState<FormStep>('tipo');
  const [propertyType, setPropertyType] = useState<PropertyType>(null);
  const [wantsFeatured, setWantsFeatured] = useState<boolean>(false);
  const [residentialType, setResidentialType] = useState<ResidentialType>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [bathrooms, setBathrooms] = useState<number>(0);
  const [street, setStreet] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [complement, setComplement] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [photos, setPhotos] = useState<File[]>([]);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [contactPreference, setContactPreference] = useState<ContactPreference>('qualquer');

  // Descomentado quando for necessário navegar
  // const navigate = useNavigate();

  // Função para navegar para a próxima etapa
  const nextStep = () => {
    if (currentStep === 'tipo') setCurrentStep('info');
    else if (currentStep === 'info') setCurrentStep('localizacao');
    else if (currentStep === 'localizacao') setCurrentStep('fotos');
    else if (currentStep === 'fotos') setCurrentStep('contato');
    else if (currentStep === 'contato') handleSubmit();
  };

  // Função para voltar para a etapa anterior
  const previousStep = () => {
    if (currentStep === 'info') setCurrentStep('tipo');
    else if (currentStep === 'localizacao') setCurrentStep('info');
    else if (currentStep === 'fotos') setCurrentStep('localizacao');
    else if (currentStep === 'contato') setCurrentStep('fotos');
  };

  // Função para navegar para uma etapa específica
  const navigateToStep = (step: FormStep) => {
    if (canNavigateToStep(step)) {
      setCurrentStep(step);
    }
  };

  // Verifica se pode navegar para uma etapa específica
  const canNavigateToStep = (step: FormStep): boolean => {
    // Lógica para permitir ou não a navegação para uma etapa específica
    // Por exemplo, só permite navegar para a etapa de informações básicas se já tiver escolhido o tipo de imóvel
    if (step === 'tipo') return true;
    if (step === 'info' && propertyType !== null) return true;
    if (step === 'localizacao' && propertyType !== null && validateBasicInfo()) return true;
    if (step === 'fotos' && propertyType !== null && validateBasicInfo() && validateLocation()) return true;
    if (step === 'contato' && propertyType !== null && validateBasicInfo() && validateLocation() && photos.length > 0) return true;
    return false;
  };

  // Verifica se uma etapa está completa
  const isStepCompleted = (step: FormStep): boolean => {
    if (step === 'tipo') return propertyType !== null;
    if (step === 'info') return propertyType !== null && validateBasicInfo();
    if (step === 'localizacao') return propertyType !== null && validateBasicInfo() && validateLocation();
    if (step === 'fotos') return propertyType !== null && validateBasicInfo() && validateLocation() && photos.length > 0;
    if (step === 'contato') return propertyType !== null && validateBasicInfo() && validateLocation() && photos.length > 0 && validateContact();
    return false;
  };

  // Validações de cada etapa
  const validateBasicInfo = (): boolean => {
    // Valida informações básicas
    if (propertyType === 'residencial' && !residentialType) return false;
    if (!title || !description || !rent || !area) return false;
    return true;
  };

  const validateLocation = (): boolean => {
    // Valida informações de localização
    if (!street || !number || !neighborhood || !city || !state) return false;
    return true;
  };

  const validateContact = (): boolean => {
    // Valida informações de contato
    if (!name || !email || !phone || !contactPreference) return false;
    return true;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = () => {
    // Aqui você pode enviar os dados para um backend, por exemplo
    console.log({
      propertyType,
      residentialType,
      title,
      description,
      area,
      bedrooms,
      bathrooms,
      rent,
      location: {
        street,
        number,
        complement,
        neighborhood,
        city,
        state
      },
      photos,
      video,
      contact: {
        name,
        email,
        phone,
        contactPreference
      },
      wantsFeatured
    });
    
    // Redirecionar para outra página após o envio bem-sucedido
    // navigate('/success');
    
    // Por enquanto, apenas mostramos um alerta
    alert('Imóvel anunciado com sucesso!');
  };

  // Renderiza o contador de etapas
  const renderStepCounter = () => {
    if (currentStep === 'tipo') return '1/5';
    if (currentStep === 'info') return '2/5';
    if (currentStep === 'localizacao') return '3/5';
    if (currentStep === 'fotos') return '4/5';
    if (currentStep === 'contato') return '5/5';
    return '';
  };

  // Renderiza o botão de ação (continuar ou finalizar)
  const renderActionButton = () => {
    if (currentStep === 'contato') {
      return (
        <FinalizeButton 
          onClick={handleSubmit}
          disabled={!validateContact()}
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
    if (currentStep === 'tipo') return propertyType !== null;
    if (currentStep === 'info') return validateBasicInfo();
    if (currentStep === 'localizacao') return validateLocation();
    if (currentStep === 'fotos') return photos.length > 0;
    if (currentStep === 'contato') return validateContact();
    return false;
  };

  // Adiciona propriedades que faltam
  const [rent, setRent] = useState<string>('');
  const [additionalCosts, setAdditionalCosts] = useState<boolean>(false);
  const [hasGarage, setHasGarage] = useState<boolean>(false);
  const [acceptsPets, setAcceptsPets] = useState<boolean>(false);
  const [hasPool, setHasPool] = useState<boolean>(false);
  const [hasCeramicFloor, setHasCeramicFloor] = useState<boolean>(false);
  const [isFurnished, setIsFurnished] = useState<boolean>(false);
  const [hasOceanView, setHasOceanView] = useState<boolean>(false);
  const [hasGrill, setHasGrill] = useState<boolean>(false);
  const [hasSolarPanel, setHasSolarPanel] = useState<boolean>(false);
  const [video, setVideo] = useState<File | null>(null);

  // Renderiza o conteúdo da etapa atual
  const renderStep = () => {
    switch (currentStep) {
      case 'tipo':
        return (
          <TipoImovelStep 
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            wantsFeatured={wantsFeatured}
            setWantsFeatured={setWantsFeatured}
          />
        );
        
      case 'info':
        return (
          <InfoBasicasStep 
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
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
            hasGarage={hasGarage}
            setHasGarage={setHasGarage}
            acceptsPets={acceptsPets}
            setAcceptsPets={setAcceptsPets}
            hasPool={hasPool}
            setHasPool={setHasPool}
            hasCeramicFloor={hasCeramicFloor}
            setHasCeramicFloor={setHasCeramicFloor}
            isFurnished={isFurnished}
            setIsFurnished={setIsFurnished}
            hasOceanView={hasOceanView}
            setHasOceanView={setHasOceanView}
            hasGrill={hasGrill}
            setHasGrill={setHasGrill}
            hasSolarPanel={hasSolarPanel}
            setHasSolarPanel={setHasSolarPanel}
          />
        );
        
      case 'localizacao':
        return (
          <LocalizacaoStep 
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
            photos={photos}
            setPhotos={setPhotos}
            wantsFeatured={wantsFeatured}
            video={video}
            setVideo={setVideo}
          />
        );
        
      case 'contato':
        return (
          <ContatoStep 
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            contactPreference={contactPreference}
            setContactPreference={setContactPreference}
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