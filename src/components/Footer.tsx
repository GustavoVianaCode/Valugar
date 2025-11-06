import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: #f8f9fa;
  padding: 60px 0 30px;
  margin-top: 80px;
  border-top: 1px solid #e5e7eb;
`;

const FooterContainer = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #0090C1;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10px;
  
  svg {
    width: 32px;
    height: 32px;
  }
`;

const FooterText = styled.p`
  color: #6b7280;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
`;

const FooterTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 20px 0;
  font-family: 'Poppins', sans-serif;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterLink = styled(Link)`
  color: #6b7280;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
  
  &:hover {
    color: #0090C1;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #6b7280;
  font-size: 14px;
  
  p {
    margin: 0;
    line-height: 1.6;
  }
`;

const Copyright = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  color: #9ca3af;
  font-size: 13px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterContent>
          <FooterColumn>
            <FooterLogo>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              Valugar
            </FooterLogo>
            <FooterText>
              Sua plataforma completa para locação de imóveis no Vale do Jaguaribe.
            </FooterText>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Acesso Rápido</FooterTitle>
            <FooterLinks>
              <FooterLink to="/buscar">Alugar Imóvel</FooterLink>
              <FooterLink to="/anunciar">Anunciar Imóvel</FooterLink>
              <FooterLink to="/sobre">Sobre nós</FooterLink>
              <FooterLink to="/contato">Entre em contato</FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Categorias</FooterTitle>
            <FooterLinks>
              <FooterLink to="/buscar?tipo=casa">Imóveis residenciais</FooterLink>
              <FooterLink to="/buscar?tipo=comercial">Imóveis comerciais</FooterLink>
              <FooterLink to="/buscar?destaque=true">Destaques</FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Contato</FooterTitle>
            <ContactInfo>
              <p>Rua ABC, 123</p>
              <p>Tabuleiro do Norte, CE</p>
              <p>email@valugar.com</p>
            </ContactInfo>
          </FooterColumn>
        </FooterContent>
        
        <Copyright>
          © 2025 Valugar. Todos os direitos reservados.
        </Copyright>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;