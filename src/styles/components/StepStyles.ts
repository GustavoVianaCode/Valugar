import styled from 'styled-components';

// ========== COMPONENTES DE ETAPAS ==========
export const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
  padding: 0 20px;
`;

export const StepConnector = styled.div`
  position: absolute;
  top: 30px;
  left: 10%;
  right: 10%;
  height: 2px;
  background-color: ${props => props.theme.colors.border};
  z-index: 0;
`;

export const Step = styled.div<{ active?: boolean; completed?: boolean; clickable?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  position: relative;
  z-index: 1;
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
`;

export const StepIcon = styled.div<{ active?: boolean; completed?: boolean; clickable?: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: ${props => props.theme.borderRadius.large};
  background-color: ${props => {
    if (props.active) return props.theme.colors.primary;
    if (props.completed) return props.theme.colors.primaryLight;
    return props.theme.colors.backgroundLight;
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  color: ${props => props.active ? props.theme.colors.white : props.completed ? props.theme.colors.primary : props.theme.colors.textLight};
  border: 1px solid ${props => props.active || props.completed ? props.theme.colors.primary : props.theme.colors.border};
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  transition: all 0.2s ease;
  
  svg {
    width: 24px;
    height: 24px;
    stroke: ${props => props.active ? props.theme.colors.white : props.completed ? props.theme.colors.primary : props.theme.colors.textLight};
  }
  
  &:hover {
    background-color: ${props => props.clickable ? props.theme.colors.primaryLight : props.active ? props.theme.colors.primary : props.completed ? props.theme.colors.primaryLight : props.theme.colors.backgroundLight};
    border-color: ${props => props.clickable ? props.theme.colors.primary : props.active || props.completed ? props.theme.colors.primary : props.theme.colors.border};
  }
`;

export const StepLabel = styled.div`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  text-align: center;
  margin-bottom: 4px;
`;

export const StepDescription = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  max-width: 120px;
`;