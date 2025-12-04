import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header<{ isTransparent: boolean }>`
  position: ${props => props.isTransparent ? 'absolute' : 'sticky'};
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.isTransparent ? 'transparent' : 'white'};
  box-shadow: ${props => props.isTransparent ? 'none' : '0 2px 8px rgba(0,0,0,0.08)'};
  padding: 20px 0;
  z-index: 1000;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled(Link)<{ isTransparent: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.isTransparent ? 'white' : '#0090C1'};
  font-family: 'Poppins', sans-serif;
  
  svg {
    width: 32px;
    height: 32px;
  }
  
  &:hover {
    opacity: 0.8;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button<{ isTransparent: boolean }>`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  
  span {
    width: 25px;
    height: 3px;
    background: ${props => props.isTransparent ? 'white' : '#0090C1'};
    border-radius: 2px;
    transition: all 0.3s;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNav = styled.div<{ isOpen: boolean; isTransparent: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: white;
  box-shadow: -4px 0 20px rgba(0,0,0,0.1);
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease;
  z-index: 2000;
  padding: 80px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s;
  z-index: 1999;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    color: #0090C1;
  }
`;

const MobileButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`;

const MobileButton = styled(Link)<{ primary?: boolean }>`
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.2s;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  border: ${props => props.primary ? 'none' : '2px solid #0090C1'};
  background: ${props => props.primary ? '#0090C1' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#0090C1'};
  
  &:hover {
    background: ${props => props.primary ? '#00b8e6' : 'rgba(0,144,193,0.1)'};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 32px;
  color: #333;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #0090C1;
  }
`;

const NavLink = styled(Link)<{ isTransparent: boolean }>`
  color: ${props => props.isTransparent ? 'white' : '#333'};
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.2s;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    color: ${props => props.isTransparent ? '#FFD700' : '#0090C1'};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const EntrarButton = styled(Link)<{ primary?: boolean; isTransparent: boolean }>`
  padding: 10px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s;
  font-family: 'Poppins', sans-serif;
  border: ${props => props.primary ? 'none' : `2px solid ${props.isTransparent ? 'white' : '#0090C1'}`};
  background: ${props => {
    if (props.primary) return '#0090C1';
    return 'transparent';
  }};
  color: ${props => {
    if (props.primary) return 'white';
    return props.isTransparent ? 'white' : '#0090C1';
  }};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 144, 193, 0.25);
    background: ${props => props.primary ? '#00b8e6' : (props.isTransparent ? 'rgba(255,255,255,0.1)' : 'rgba(0,144,193,0.1)')};
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 13px;
  }
`;

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <MobileOverlay isOpen={mobileMenuOpen} onClick={closeMobileMenu} />
      <StyledHeader isTransparent={isHomePage}>
        <HeaderContainer>
          <Logo to="/" isTransparent={isHomePage}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span>Valugar</span>
          </Logo>
          
          <Nav>
            <NavLink to="/buscar" isTransparent={isHomePage}>Buscar imóvel</NavLink>
            <NavLink to="/anunciar" isTransparent={isHomePage}>Anunciar imóvel</NavLink>
            <NavLink to="/sobre" isTransparent={isHomePage}>Sobre nós</NavLink>
            <NavLink to="/contato" isTransparent={isHomePage}>Contato</NavLink>
            <ButtonGroup>
              <EntrarButton to="/cadastrar" isTransparent={isHomePage}>Cadastrar</EntrarButton>
              <EntrarButton to="/entrar" primary isTransparent={isHomePage}>Entrar</EntrarButton>
            </ButtonGroup>
          </Nav>

          <MobileMenuButton 
            isTransparent={isHomePage}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </HeaderContainer>
      </StyledHeader>

      <MobileNav isOpen={mobileMenuOpen} isTransparent={isHomePage}>
        <CloseButton onClick={closeMobileMenu}>×</CloseButton>
        <MobileNavLink to="/buscar" onClick={closeMobileMenu}>Buscar imóvel</MobileNavLink>
        <MobileNavLink to="/anunciar" onClick={closeMobileMenu}>Anunciar imóvel</MobileNavLink>
        <MobileNavLink to="/sobre" onClick={closeMobileMenu}>Sobre nós</MobileNavLink>
        <MobileNavLink to="/contato" onClick={closeMobileMenu}>Contato</MobileNavLink>
        <MobileButtonGroup>
          <MobileButton to="/cadastrar" onClick={closeMobileMenu}>Cadastrar</MobileButton>
          <MobileButton to="/entrar" primary onClick={closeMobileMenu}>Entrar</MobileButton>
        </MobileButtonGroup>
      </MobileNav>
    </>
  );
};

export default Header;