import styled from 'styled-components';
import FeaturedProperties from '../components/FeaturedProperties';

const HeroSection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                    url('/imagens/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 0;
  min-height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 60px 0;
    min-height: 400px;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const HeroContent = styled.div`
  color: white;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 48px;
  color: #FFD700;
  font-weight: 700;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

const SearchBox = styled.div`
  background: white;
  border-radius: 10px;
  padding: 25px 30px;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: 2.5fr 1.5fr 1.2fr auto;
  gap: 20px;
  align-items: end;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: #333;
  text-align: left;
`;

const StyledInput = styled.input`
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 15px;
  outline: none;
  width: 100%;
  
  &:focus {
    border-color: #0090C1;
    box-shadow: 0 0 0 3px rgba(0, 144, 193, 0.1);
  }
  
  &::placeholder {
    color: #999;
    font-size: 14px;
  }
`;

const StyledSelect = styled.select`
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 15px;
  outline: none;
  width: 100%;
  background: white;
  cursor: pointer;
  
  &:focus {
    border-color: #0090C1;
    box-shadow: 0 0 0 3px rgba(0, 144, 193, 0.1);
  }
`;

const SearchButton = styled.button`
  background: #0090C1;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  transition: all 0.2s;
  min-height: 48px;
  
  &:hover {
    background: #007aa9;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 144, 193, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FeaturedSection = styled.section`
  padding: 60px 0;
  background: white;
  
  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 35px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 25px;
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

const CategoryCard = styled.button`
  background: white;
  border: 2px solid #f0f0f0;
  border-radius: 12px;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  
  &:hover {
    background: #e6f7fc;
    border-color: #0090C1;
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 144, 193, 0.15);
  }
  
  span {
    font-size: 15px;
    font-weight: 600;
    color: #333;
  }
`;

const CategoryIcon = styled.div`
  font-size: 36px;
  color: #0090C1;
  transition: transform 0.3s;
  
  ${CategoryCard}:hover & {
    transform: scale(1.1);
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
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div<{ featured?: boolean }>`
  background: ${props => props.featured ? '#0090C1' : 'white'};
  color: ${props => props.featured ? 'white' : '#333'};
  border: ${props => props.featured ? 'none' : '2px solid #f0f0f0'};
  border-radius: 16px;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: ${props => props.featured 
    ? '0 8px 24px rgba(0, 144, 193, 0.25)' 
    : '0 2px 8px rgba(0,0,0,0.08)'};
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.featured 
      ? '0 12px 32px rgba(0, 144, 193, 0.35)' 
      : '0 8px 16px rgba(0,0,0,0.12)'};
  }
  
  ${props => props.featured && `
    grid-row: span 2;
    
    @media (max-width: 1024px) {
      grid-row: span 1;
    }
  `}
  
  h3 {
    font-size: 19px;
    font-weight: 700;
    margin: 0;
    line-height: 1.4;
  }
  
  p {
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
    opacity: ${props => props.featured ? '0.95' : '0.8'};
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

const ServiceIcon = styled.div`
  font-size: 40px;
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
            <CategoryIcon>🏠</CategoryIcon>
            <span>Casa</span>
          </CategoryCard>
          <CategoryCard>
            <CategoryIcon>🏢</CategoryIcon>
            <span>Apartamento</span>
          </CategoryCard>
          <CategoryCard>
            <CategoryIcon>🚪</CategoryIcon>
            <span>Kitnet</span>
          </CategoryCard>
          <CategoryCard>
            <CategoryIcon>🛏️</CategoryIcon>
            <span>Quarto</span>
          </CategoryCard>
          <CategoryCard>
            <CategoryIcon>🏡</CategoryIcon>
            <span>Sítio / Chácara</span>
          </CategoryCard>
          <CategoryCard>
            <CategoryIcon>🏪</CategoryIcon>
            <span>Comercial</span>
          </CategoryCard>
        </CategoryGrid>
      </CategoriesSection>

      <ServicesSection>
        <ServicesGrid>
          <ServiceCard featured>
            <ServiceIcon>🏠</ServiceIcon>
            <h3>Anuncie rápido, anuncie sem complicação</h3>
            <p>
              Queremos facilitar para anunciar imóveis nossos serviços básicos 
              facilitam acesso a compradores
            </p>
            <button>Anunciar meu imóvel</button>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>🚀</ServiceIcon>
            <h3>Novo negócio?</h3>
            <p>
              Encontre o lugar ideal para o seu negócio na sua região
            </p>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>👨‍👩‍👧‍👦</ServiceIcon>
            <h3>A família cresceu?</h3>
            <p>
              Busque imóveis residenciais que possam abrigar sua família
            </p>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>💬</ServiceIcon>
            <h3>Entre em contato</h3>
            <p>
              Nossa equipe está disponível para te ajudar 24h por dia!
            </p>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>👥</ServiceIcon>
            <h3>Quem somos</h3>
            <p>
              Somos especialistas em imóveis na região do Vale do Jaguaribe
            </p>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>
    </>
  );
};

export default HomePage;