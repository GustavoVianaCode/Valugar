import styled from 'styled-components';
import FeaturedProperties from '../components/FeaturedProperties';

const HeroSection = styled.section`
  position: relative;
  padding: 180px 0 140px;
  min-height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -80px;
  background: white;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1350px;
    height: 100%;
    background-image:
      linear-gradient(90deg, rgba(5, 32, 46, 0.6) 0%, rgba(5, 32, 46, 0.6) 100%),
      url('/imagens/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    padding: 120px 0 100px;
    min-height: 500px;
    margin-top: -70px;
  }
`;

const HeroContainer = styled.div`
  max-width: 1350px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const HeroContent = styled.div`
  color: white;
  text-align: left;
  max-width: 700px;
  margin: 0;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
  margin: 0 0 8px 0;
  line-height: 1.1;
  color: white;
  text-shadow: 0 4px 12px rgba(0,0,0,0.3);
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 1024px) {
    font-size: 44px;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 56px;
  color: #FFD700;
  font-weight: 700;
  margin: 0 0 30px 0;
  line-height: 1.1;
  text-shadow: 0 4px 12px rgba(0,0,0,0.3);
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 1024px) {
    font-size: 44px;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

const SearchBox = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px 28px;
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  
  @media (max-width: 768px) {
    border-radius: 12px;
    padding: 20px;
  }
`;

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 16px;
  align-items: end;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #333;
  font-family: 'Poppins', sans-serif;
`;

const StyledInput = styled.input`
  height: 46px;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background: #f8f9fa;
  font-size: 14px;
  outline: none;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  transition: all 0.2s;
  
  &:focus {
    border-color: #0090C1;
    background: white;
    box-shadow: 0 0 0 3px rgba(0, 144, 193, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;

const StyledSelect = styled.select`
  height: 46px;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background: #f8f9fa;
  font-size: 14px;
  outline: none;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: all 0.2s;
  
  &:focus {
    border-color: #0090C1;
    background: white;
    box-shadow: 0 0 0 3px rgba(0, 144, 193, 0.1);
  }
`;

const SearchButton = styled.button`
  background: #0090C1;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0 28px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 46px;
  transition: all 0.2s ease;
  white-space: nowrap;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background: #007aa3;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 144, 193, 0.3);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const FeaturedSection = styled.section`
  padding: 100px 0 60px;
  background: white;
  
  @media (max-width: 768px) {
    padding: 60px 0 40px;
  }
`;

const SectionTitle = styled.h2`
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 35px;
  max-width: 1350px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 25px;
    padding: 0 20px;
  }
`;

const CategoriesSection = styled.section`
  padding: 60px 0 40px;
  background: white;
  
  @media (max-width: 768px) {
    padding: 40px 0 30px;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 0 20px;
  }
`;

const CategoryCard = styled.button`
  background: white;
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  min-height: 110px;
  
  &:hover {
    transform: translateY(-6px);
    border-color: var(--primary);
    background: #f9feff;
  }
  
  span {
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
  }
`;

const IconCircle = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #eaf7fb;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);
  
  svg {
    width: 28px;
    height: 28px;
    color: var(--primary);
  }
`;

const ServicesSection = styled.section`
  padding: 40px 0 60px;
  background: white;
  
  @media (max-width: 768px) {
    padding: 30px 0 40px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  
  @media (max-width: 640px) {
    padding: 0 20px;
  }
`;

const InfoCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div<{ featured?: boolean }>`
  background: ${props => props.featured ? '#0090C1' : 'white'};
  color: ${props => props.featured ? 'white' : '#333'};
  border: ${props => props.featured ? 'none' : '2px solid #f0f0f0'};
  border-radius: 16px;
  padding: ${props => props.featured ? '40px 32px' : '24px 20px'};
  display: flex;
  flex-direction: column;
  gap: ${props => props.featured ? '20px' : '12px'};
  box-shadow: ${props => props.featured 
    ? '0 8px 24px rgba(0, 144, 193, 0.25)' 
    : '0 2px 8px rgba(0,0,0,0.08)'};
  transition: all 0.3s;
  min-height: ${props => props.featured ? '100%' : 'auto'};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.featured 
      ? '0 12px 32px rgba(0, 144, 193, 0.35)' 
      : '0 8px 16px rgba(0,0,0,0.12)'};
  }
  
  h3 {
    font-size: ${props => props.featured ? '22px' : '16px'};
    font-weight: 700;
    margin: 0;
    line-height: 1.4;
    color: ${props => props.featured ? 'white' : '#0090C1'};
  }
  
  p {
    font-size: ${props => props.featured ? '15px' : '14px'};
    line-height: 1.6;
    margin: 0;
    opacity: ${props => props.featured ? '0.95' : '0.8'};
    flex: 1;
  }
  
  button {
    background: ${props => props.featured ? '#FFD700' : '#0090C1'};
    color: ${props => props.featured ? '#333' : 'white'};
    border: none;
    border-radius: 8px;
    padding: 14px 24px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    margin-top: auto;
    transition: all 0.2s;
    
    &:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }
  }
`;

const ServiceIcon = styled.div<{ featured?: boolean }>`
  width: ${props => props.featured ? '72px' : '56px'};
  height: ${props => props.featured ? '72px' : '56px'};
  background-color: ${props => props.featured ? 'rgba(255, 255, 255, 0.2)' : '#e8f4f8'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: ${props => props.featured ? '36px' : '28px'};
    height: ${props => props.featured ? '36px' : '28px'};
    color: ${props => props.featured ? 'white' : '#0090C1'};
  }
`;

const HomePage = () => {
  return (
    <>
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle>Encontre o imóvel</HeroTitle>
            <HeroSubtitle>ideal para você!</HeroSubtitle>
            
            <SearchBox>
              <SearchForm onSubmit={(e) => e.preventDefault()}>
                <FormGroup>
                  <Label>Localização</Label>
                  <StyledInput 
                    type="text"
                    placeholder="Procure por endereço, bairro, cidade ou CEP"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label>Preço</Label>
                  <StyledSelect>
                    <option value="">R$ preço min - R$ preço max</option>
                    <option value="0-500">Até R$ 500</option>
                    <option value="500-1000">R$ 500 - R$ 1.000</option>
                    <option value="1000-2000">R$ 1.000 - R$ 2.000</option>
                    <option value="2000+">Acima de R$ 2.000</option>
                  </StyledSelect>
                </FormGroup>
                
                <FormGroup>
                  <Label>Tipo</Label>
                  <StyledSelect>
                    <option value="">Casa</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="kitnet">Kitnet</option>
                    <option value="quarto">Quarto</option>
                    <option value="sitio">Sítio/Chácara</option>
                    <option value="comercial">Comercial</option>
                  </StyledSelect>
                </FormGroup>
                
                <SearchButton type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  BUSCAR
                </SearchButton>
              </SearchForm>
            </SearchBox>
          </HeroContent>
        </HeroContainer>
      </HeroSection>

      <FeaturedSection>
        <SectionTitle>Imóveis em destaque</SectionTitle>
        <FeaturedProperties />
      </FeaturedSection>

      <CategoriesSection>
        <SectionTitle>Busque por categorias</SectionTitle>
        <CategoryGrid>
          <CategoryCard>
            <IconCircle>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </IconCircle>
            <span>Casa</span>
          </CategoryCard>
          
          <CategoryCard>
            <IconCircle>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
              </svg>
            </IconCircle>
            <span>Apartamento</span>
          </CategoryCard>
          
          <CategoryCard>
            <IconCircle>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                <rect x="9" y="14" width="6" height="2" opacity="0.5"/>
              </svg>
            </IconCircle>
            <span>Kitnet</span>
          </CategoryCard>
          
          <CategoryCard>
            <IconCircle>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 9.556V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.526 2 13v4a1 1 0 001 1h1v4h2v-4h12v4h2v-4h1a1 1 0 001-1v-4c0-1.474-.811-2.75-2-3.444zM11 9H6V7h5v2zm7 0h-5V7h5v2z"/>
              </svg>
            </IconCircle>
            <span>Quarto</span>
          </CategoryCard>
          
          <CategoryCard>
            <IconCircle>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zM10 10c0-1.1.9-2 2-2s2 .9 2 2h-4z"/>
              </svg>
            </IconCircle>
            <span>Sítio / Chácara</span>
          </CategoryCard>
          
          <CategoryCard>
            <IconCircle>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.9 8.89l-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89zM18.91 4.99l1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31V5zM8.49 9.52L9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41-.25-.29-.37-.68-.33-1.07zm-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17zM5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19H5z"/>
              </svg>
            </IconCircle>
            <span>Comercial</span>
          </CategoryCard>
        </CategoryGrid>
      </CategoriesSection>

      <ServicesSection>
        <ServicesGrid>
          {/* Card azul grande */}
          <ServiceCard featured>
            <ServiceIcon featured>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </ServiceIcon>
            <h3>Anuncie rápido, anuncie sem complicação.</h3>
            <p>
              Encontre o inquilino perfeito em tempo recorde! Anuncie agora GRÁTIS e receba propostas imediatas.
            </p>
            <button>Anunciar meu imóvel</button>
          </ServiceCard>
          
          {/* Grid 2x2 de cards informativos */}
          <InfoCardsGrid>
            <ServiceCard>
              <ServiceIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </ServiceIcon>
              <h3>Novo negócio?</h3>
              <p>Encontre o aluguel ideal para essa nova etapa da sua vida</p>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </ServiceIcon>
              <h3>A família cresceu?</h3>
              <p>Busque a residência ideal para sua família no Valugar</p>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </ServiceIcon>
              <h3>Entre em contato</h3>
              <p>Nossa equipe está disponível para te atender 24h por dia!</p>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </ServiceIcon>
              <h3>Quem somos</h3>
              <p>A Valugar surge como uma forma de facilitar a vida daqueles que buscam im...</p>
            </ServiceCard>
          </InfoCardsGrid>
        </ServicesGrid>
      </ServicesSection>
    </>
  );
};

export default HomePage;