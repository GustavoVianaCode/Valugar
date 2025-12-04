import styled from 'styled-components';

// ========== COMPONENTES DE FORMULÁRIO ==========
export const ContentSection = styled.section`
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSize?.xl || '22px'};
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: ${props => props.theme.fontSize?.medium || '14px'};
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 20px;
  }
`;

export const FormSection = styled.div`
  margin-bottom: 30px;
`;

export const FormSectionTitle = styled.h3`
  font-size: ${props => props.theme.fontSize?.large || '20px'};
  margin-bottom: 5px;
  color: ${props => props.theme.colors.text};
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const FormSectionSubtitle = styled.p`
  font-size: ${props => props.theme.fontSize?.medium || '14px'};
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 15px;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: ${props => props.theme.fontSize?.medium || '14px'};
  font-weight: 500;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.text};
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${props => props.theme.colors.borderDark || props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small || props.theme.borderRadius.sm || '4px'};
  font-size: ${props => props.theme.fontSize?.regular || '16px'};
  
  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 15px;
  }
  
  &::placeholder {
    color: #aaa;
  }
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${props => props.theme.colors.borderDark || props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small || props.theme.borderRadius.sm || '4px'};
  font-size: ${props => props.theme.fontSize?.regular || '16px'};
  min-height: 100px;
  resize: vertical;
  
  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 15px;
    min-height: 80px;
  }
  
  &::placeholder {
    color: #aaa;
  }
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
  }
`;

export const SelectInput = styled.select`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${props => props.theme.colors.borderDark || props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small || props.theme.borderRadius.sm || '4px'};
  font-size: ${props => props.theme.fontSize?.regular || '16px'};
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23666' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 20px;
  
  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 15px;
  }
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
  }
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

// Formatação monetária
export const CurrencyInputWrapper = styled.div`
  position: relative;
`;

export const CurrencyPrefix = styled.span`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSize?.regular || '16px'};
`;

export const CurrencyInput = styled.input`
  width: 100%;
  padding: 10px 15px 10px 45px;
  border: 1px solid ${props => props.theme.colors.borderDark || props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small || props.theme.borderRadius.sm || '4px'};
  font-size: ${props => props.theme.fontSize?.regular || '16px'};
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
  }
`;

// Acordeão
export const AccordionSection = styled.div`
  border: 1px solid ${props => props.theme.colors.borderDark || props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small || props.theme.borderRadius.sm || '4px'};
  margin-bottom: 20px;
`;

export const AccordionHeader = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.theme.colors.backgroundAlt || props.theme.colors.backgroundLight || '#f9f9f9'};
  
  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const AccordionTitle = styled.div`
  font-size: ${props => props.theme.fontSize?.regular || '16px'};
  font-weight: 500;
`;

export const AccordionIcon = styled.div`
  font-size: ${props => props.theme.fontSize?.regular || '16px'};
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: ${props => props.isOpen ? '15px' : '0'};
  border-top: ${props => props.isOpen ? `1px solid ${props.theme.colors.borderDark || props.theme.colors.border}` : 'none'};
  display: ${props => props.isOpen ? 'block' : 'none'};
`;