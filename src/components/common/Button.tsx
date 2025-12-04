import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
}

const getVariantStyles = (variant: string = 'primary') => {
  const variants = {
    primary: css`
      background: linear-gradient(135deg, #0090C1 0%, #00b8e6 100%);
      color: white;
      border: none;
      
      &:hover:not(:disabled) {
        background: linear-gradient(135deg, #007aa3 0%, #0090C1 100%);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 144, 193, 0.3);
      }
    `,
    secondary: css`
      background: #6c757d;
      color: white;
      border: none;
      
      &:hover:not(:disabled) {
        background: #5a6268;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);
      }
    `,
    outline: css`
      background: transparent;
      color: #0090C1;
      border: 2px solid #0090C1;
      
      &:hover:not(:disabled) {
        background: rgba(0, 144, 193, 0.1);
        border-color: #007aa3;
        color: #007aa3;
      }
    `,
    ghost: css`
      background: transparent;
      color: #666;
      border: 1px solid #ddd;
      
      &:hover:not(:disabled) {
        background: #f5f5f5;
        border-color: #999;
      }
    `,
    danger: css`
      background: #dc3545;
      color: white;
      border: none;
      
      &:hover:not(:disabled) {
        background: #c82333;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
      }
    `
  };
  
  return variants[variant as keyof typeof variants] || variants.primary;
};

const getSizeStyles = (size: string = 'medium') => {
  const sizes = {
    small: css`
      padding: 8px 16px;
      font-size: 13px;
      min-height: 36px;
      
      @media (max-width: 480px) {
        padding: 6px 12px;
        font-size: 12px;
        min-height: 32px;
      }
    `,
    medium: css`
      padding: 12px 24px;
      font-size: 15px;
      min-height: 44px;
      
      @media (max-width: 480px) {
        padding: 10px 20px;
        font-size: 14px;
      }
    `,
    large: css`
      padding: 14px 32px;
      font-size: 16px;
      min-height: 52px;
      
      @media (max-width: 480px) {
        padding: 12px 24px;
        font-size: 15px;
        min-height: 48px;
      }
    `
  };
  
  return sizes[size as keyof typeof sizes] || sizes.medium;
};

export const Button = styled.button<ButtonProps>`
  ${props => getVariantStyles(props.variant)}
  ${props => getSizeStyles(props.size)}
  
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  border-radius: 6px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
  
  @media (max-width: 768px) {
    ${props => props.fullWidth && css`
      width: 100%;
    `}
  }
`;

export default Button;
