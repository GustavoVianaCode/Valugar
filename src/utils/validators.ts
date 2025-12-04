// Valida Email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Valida CEP
export const isValidCEP = (cep: string): boolean => {
  const cepRegex = /^\d{5}-?\d{3}$/;
  return cepRegex.test(cep);
};

// Valida Telefone
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\(?[1-9]{2}\)?\s?9?\d{4}-?\d{4}$/;
  return phoneRegex.test(phone);
};

// Valida Senha (mínimo 6 caracteres)
export const isValidPassword = (password: string): boolean => {
  return password.length >= 6;
};

// Valida se campo não está vazio
export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0;
};
