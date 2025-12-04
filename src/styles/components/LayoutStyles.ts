import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ========== LAYOUT PRINCIPAL ==========
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  background-color: ${props => props.theme.colors.background};
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 30px 16px;
  }
  
  @media (max-width: 480px) {
    padding: 20px 12px;
  }
`;

export const PageTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.xxl};
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: 5px;
  
  @media (max-width: 768px) {
    font-size: 26px;
  }
  
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const PageSubtitle = styled.p`
  font-size: ${props => props.theme.fontSize.regular};
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

// ========== COMPONENTES DE NAVEGAÇÃO ==========
export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  gap: 12px;
  
  @media (max-width: 768px) {
    margin-top: 30px;
    flex-wrap: wrap;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    
    button {
      width: 100%;
    }
  }
`;

export const BackButtonPlain = styled.button`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.textLight};
  background: none;
  border: none;
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;
  gap: 4px;
  
  @media (max-width: 480px) {
    font-size: 14px;
    width: 100%;
    justify-content: center;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const ContinueButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: ${props => props.theme.borderRadius.small};
  padding: 12px 25px;
  font-size: ${props => props.theme.fontSize.regular};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 20px;
  }
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  span {
    margin-right: 8px;
  }
`;

export const FinalizeButton = styled(ContinueButton)`
  background-color: ${props => props.theme.colors.success};
  
  &:hover {
    background-color: ${props => props.theme.colors.successDark};
  }
`;

export const StepCounter = styled.div`
  flex: 1;
  text-align: center;
  font-size: ${props => props.theme.fontSize.regular};
  color: ${props => props.theme.colors.textLight};
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    order: -1;
    margin-bottom: 10px;
    font-size: 12px;
  }
`;

export const BackButtonWithAvatar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: ${props => props.theme.borderRadius.large};
  background-color: #ccc;
  margin-right: 10px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.textLight};
  text-decoration: none;
  font-size: 15px;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;