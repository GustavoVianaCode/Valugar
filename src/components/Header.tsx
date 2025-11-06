import { Link, useLocation } from 'react-router-dom';
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
    background: ${props => props.primary ? '#007aa3' : (props.isTransparent ? 'rgba(255,255,255,0.1)' : 'rgba(0,144,193,0.1)')};
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 13px;
  }
`;

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
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
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;