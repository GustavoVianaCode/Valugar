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
          <i className="fas fa-home">🏠</i>
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
          <i className="fas fa-info-circle">ℹ️</i>
        </StepIcon>
        <StepLabel>Informações básicas</StepLabel>
        <StepDescription>Escolha se é residencial ou comercial</StepDescription>
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
          <i className="fas fa-map-marker-alt">📍</i>
        </StepIcon>
        <StepLabel>Localização</StepLabel>
        <StepDescription>Escolha se é residencial ou comercial</StepDescription>
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
          <i className="fas fa-camera">📷</i>
        </StepIcon>
        <StepLabel>Fotos</StepLabel>
        <StepDescription>Adicione fotos do imóvel</StepDescription>
      </Step>
    </StepsContainer>
  );
};

export default StepIndicator;