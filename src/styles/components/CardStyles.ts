import styled from 'styled-components';

// ========== COMPONENTES DE CARTÕES ==========
export const PropertyTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PropertyTypeCard = styled.div<{ active?: boolean }>`
  border: 2px solid ${props => props.active ? '#0090C1' : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium || props.theme.borderRadius.md || '8px'};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.active ? '#0090C1' : props.theme.colors.background};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  transition: all 0.3s ease;
  
  &:hover {
    border-color: '#0090C1';
  }
`;

export const PropertyTypeIcon = styled.div<{ active?: boolean }>`
  font-size: 32px;
  color: ${props => props.active ? 'white' : '#0090C1'};
  margin-bottom: 15px;
`;

export const PropertyTypeTitle = styled.h3<{ active?: boolean }>`
  font-size: ${props => props.theme.fontSize?.large || '18px'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  margin-bottom: 5px;
`;

export const PropertyTypeDescription = styled.p<{ active?: boolean }>`
  font-size: ${props => props.theme.fontSize?.medium || '14px'};
  color: ${props => props.active ? 'white' : props.theme.colors.textLight};
  text-align: center;
`;

export const PropertyTypeOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const PropertyTypeOption = styled.div<{ active?: boolean }>`
  border: 1px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small || props.theme.borderRadius.sm || '4px'};
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.active ? props.theme.colors.primaryLight : props.theme.colors.background};
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const PropertyOptionIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const PropertyOptionText = styled.span`
  font-size: ${props => props.theme.fontSize?.medium || '14px'};
  text-align: center;
`;

// Contadores numéricos
export const NumberCounter = styled.div`
  display: flex;
  gap: 10px;
`;

export const CounterButton = styled.button<{ active?: boolean }>`
  width: 40px;
  height: 40px;
  border: 1px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small || props.theme.borderRadius.sm || '4px'};
  background-color: ${props => props.active ? props.theme.colors.primaryLight : props.theme.colors.background};
  font-size: ${props => props.theme.fontSize?.medium || '14px'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;

// Amenidades
export const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 20px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const AmenityOption = styled.div<{ active?: boolean }>`
  border: 1px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small || props.theme.borderRadius.sm || '4px'};
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.active ? props.theme.colors.primaryLight : props.theme.colors.background};
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const AmenityIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const AmenityText = styled.span`
  font-size: ${props => props.theme.fontSize?.small || '12px'};
  text-align: center;
`;

// Opções destacadas
export const FeaturedOptionSection = styled.section`
  margin: 40px 0;
`;

export const FeaturedOptionTitle = styled.h3`
  font-size: ${props => props.theme.fontSize?.large || '18px'};
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-left: 5px;
    color: ${props => props.theme.colors.textLight};
  }
`;

export const FeaturedOptionSubtitle = styled.p`
  font-size: ${props => props.theme.fontSize?.medium || '14px'};
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  margin-bottom: 20px;
`;

export const FeaturedChoicesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FeaturedChoice = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: ${props => props.theme.borderRadius.small || props.theme.borderRadius.sm || '8px'};
  border: 1px solid ${props => props.active ? '#0090C1' : props.theme.colors.border};
  background-color: ${props => props.active ? '#0090C1' : props.theme.colors.background};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  cursor: pointer;
  width: 375px;
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  &:hover {
    border-color: '#0090C1';
  }
`;

export const ChoiceIcon = styled.div<{ isChecked?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: ${props => props.isChecked ? 'white' : props.theme.colors.textLight};
  font-size: 18px;
  width: 20px;
`;

export const ChoiceText = styled.span`
  flex: 1;
`;