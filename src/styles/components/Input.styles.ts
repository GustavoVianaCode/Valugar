import styled from 'styled-components';

// ========== INPUTS BASE ==========
export const BaseInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${props => props.theme.colors.borderDark || props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small || props.theme.borderRadius.sm || '4px'};
  font-size: ${props => props.theme.fontSize?.regular || '16px'};
  font-family: 'Poppins', sans-serif;
  transition: all 0.2s;
  
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
    box-shadow: 0 0 0 3px rgba(0, 144, 193, 0.1);
  }
  
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

export const TextInput = styled(BaseInput)``;

export const EmailInput = styled(BaseInput).attrs({ type: 'email' })``;

export const PasswordInput = styled(BaseInput).attrs({ type: 'password' })``;

export const NumberInput = styled(BaseInput).attrs({ type: 'number' })``;

// ========== TEXT AREA ==========
export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${props => props.theme.colors.borderDark || props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small || props.theme.borderRadius.sm || '4px'};
  font-size: ${props => props.theme.fontSize?.regular || '16px'};
  font-family: 'Poppins', sans-serif;
  min-height: 100px;
  resize: vertical;
  transition: all 0.2s;
  
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
    box-shadow: 0 0 0 3px rgba(0, 144, 193, 0.1);
  }
`;

// ========== SELECT INPUT ==========
export const SelectInput = styled.select`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${props => props.theme.colors.borderDark || props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.small || props.theme.borderRadius.sm || '4px'};
  font-size: ${props => props.theme.fontSize?.regular || '16px'};
  font-family: 'Poppins', sans-serif;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23666' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 20px;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;
  
  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 15px;
  }
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 144, 193, 0.1);
  }
`;

// ========== CHECKBOX E RADIO ==========
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  user-select: none;
  
  input[type="checkbox"],
  input[type="radio"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: ${props => props.theme.colors.primary};
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

// ========== CURRENCY INPUT ==========
export const CurrencyInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const CurrencyPrefix = styled.span`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSize?.regular || '16px'};
  pointer-events: none;
  
  @media (max-width: 480px) {
    font-size: 15px;
    left: 12px;
  }
`;

export const CurrencyInput = styled(BaseInput)`
  padding-left: 45px;
  
  @media (max-width: 480px) {
    padding-left: 40px;
  }
`;

// ========== INPUT GROUP ==========
export const InputGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const InputLabel = styled.label`
  display: block;
  font-size: ${props => props.theme.fontSize?.medium || '14px'};
  font-weight: 500;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.text};
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 6px;
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

// ========== FORM ERROR ==========
export const FormError = styled.span`
  display: block;
  color: #dc3545;
  font-size: 13px;
  margin-top: 4px;
  font-family: 'Poppins', sans-serif;
`;

// ========== FORM HELPER ==========
export const FormHelper = styled.span`
  display: block;
  color: #6c757d;
  font-size: 12px;
  margin-top: 4px;
  font-family: 'Poppins', sans-serif;
`;
