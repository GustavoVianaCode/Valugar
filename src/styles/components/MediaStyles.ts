import styled from 'styled-components';

// ========== COMPONENTES DE UPLOAD DE FOTOS ==========
export const PhotoUploadArea = styled.div`
  border: 2px dashed ${props => props.theme.colors.borderDark || props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium || props.theme.borderRadius.md || '8px'};
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    padding: 30px 16px;
  }
  
  @media (max-width: 480px) {
    padding: 24px 12px;
  }
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const PhotoUploadIcon = styled.div`
  font-size: 40px;
  color: #aaa;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 12px;
  }
  
  svg {
    width: 48px;
    height: 48px;
    color: #aaa;
    stroke: #aaa;
    
    @media (max-width: 480px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const PhotoUploadText = styled.p`
  font-size: ${props => props.theme.fontSize?.regular || '16px'};
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 5px;
`;

export const PhotoUploadSubtext = styled.p`
  font-size: ${props => props.theme.fontSize?.medium || '14px'};
  color: ${props => props.theme.colors.textLighter || '#999'};
`;

export const SelectPhotoButton = styled.button`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.small || props.theme.borderRadius.sm || '4px'};
  padding: 10px 20px;
  font-size: ${props => props.theme.fontSize?.medium || '14px'};
  margin-top: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  
  svg {
    width: 18px;
    height: 18px;
    color: ${props => props.theme.colors.primary};
    stroke: ${props => props.theme.colors.primary};
  }
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }
`;

export const PhotoTipsSection = styled.div`
  background-color: ${props => props.theme.colors.backgroundAlt || props.theme.colors.backgroundLight || '#f9f9f9'};
  border-radius: ${props => props.theme.borderRadius.medium || props.theme.borderRadius.md || '8px'};
  padding: 20px;
`;

export const PhotoTipsTitle = styled.h3`
  font-size: ${props => props.theme.fontSize?.large || '18px'};
  margin-bottom: 10px;
  color: ${props => props.theme.colors.text};
`;

export const PhotoTipsSubtitle = styled.p`
  font-size: ${props => props.theme.fontSize?.medium || '14px'};
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 15px;
`;

export const TipsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TipItem = styled.li`
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  font-size: ${props => props.theme.fontSize?.medium || '14px'};
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.primary};
  }
`;

// ========== COMPONENTES DE CONTATO ==========
export const ContactOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 30px 0;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
    margin: 20px 0;
  }
`;

export const ContactOption = styled.div<{ active?: boolean }>`
  border: 1px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small || props.theme.borderRadius.sm || '4px'};
  padding: 20px 15px;
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

export const ContactOptionIcon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primary};
`;

export const ContactOptionText = styled.span`
  font-size: ${props => props.theme.fontSize?.medium || '14px'};
  text-align: center;
`;