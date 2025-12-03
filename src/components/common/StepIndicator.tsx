import React from 'react';
import { 
  StepsContainer,
  StepConnector,
  Step,
  StepIcon,
  StepLabel,
  StepDescription
} from '../../styles/components/StepStyles';

interface StepIndicatorProps {
  currentStep: 'tipo' | 'info' | 'localizacao' | 'fotos';
  navigateToStep: (step: 'tipo' | 'info' | 'localizacao' | 'fotos') => void;
  canNavigateToStep: (step: 'tipo' | 'info' | 'localizacao' | 'fotos') => boolean;
  isStepCompleted: (step: 'tipo' | 'info' | 'localizacao' | 'fotos') => boolean;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  navigateToStep,
  canNavigateToStep,
  isStepCompleted
}) => {
  return (
    <StepsContainer>
      <StepConnector />
      
      <Step 
        active={currentStep === 'tipo'} 
        completed={isStepCompleted('tipo')}
        clickable={canNavigateToStep('tipo')}
        onClick={() => canNavigateToStep('tipo') && navigateToStep('tipo')}
      >
        <StepIcon 
          active={currentStep === 'tipo'} 
          completed={isStepCompleted('tipo')}
          clickable={canNavigateToStep('tipo')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </StepIcon>
        <StepLabel>Tipo do imóvel</StepLabel>
        <StepDescription>Escolha se é residencial ou comercial</StepDescription>
      </Step>
      
      <Step 
        active={currentStep === 'info'} 
        completed={isStepCompleted('info')}
        clickable={canNavigateToStep('info')}
        onClick={() => canNavigateToStep('info') && navigateToStep('info')}
      >
        <StepIcon 
          active={currentStep === 'info'} 
          completed={isStepCompleted('info')}
          clickable={canNavigateToStep('info')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </StepIcon>
        <StepLabel>Informações básicas</StepLabel>
        <StepDescription>Preencha os detalhes do imóvel</StepDescription>
      </Step>
      
      <Step 
        active={currentStep === 'localizacao'} 
        completed={isStepCompleted('localizacao')}
        clickable={canNavigateToStep('localizacao')}
        onClick={() => canNavigateToStep('localizacao') && navigateToStep('localizacao')}
      >
        <StepIcon 
          active={currentStep === 'localizacao'} 
          completed={isStepCompleted('localizacao')}
          clickable={canNavigateToStep('localizacao')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </StepIcon>
        <StepLabel>Localização</StepLabel>
        <StepDescription>Informe o endereço completo</StepDescription>
      </Step>
      
      <Step 
        active={currentStep === 'fotos'} 
        completed={isStepCompleted('fotos')}
        clickable={canNavigateToStep('fotos')}
        onClick={() => canNavigateToStep('fotos') && navigateToStep('fotos')}
      >
        <StepIcon 
          active={currentStep === 'fotos'} 
          completed={isStepCompleted('fotos')}
          clickable={canNavigateToStep('fotos')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </StepIcon>
        <StepLabel>Fotos</StepLabel>
        <StepDescription>Adicione fotos do imóvel</StepDescription>
      </Step>
    </StepsContainer>
  );
};

export default StepIndicator;