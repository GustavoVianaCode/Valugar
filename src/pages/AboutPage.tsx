import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background-color: white;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 40px;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 60px 20px;
    gap: 40px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const HeroTitle = styled.h1`
  color: #0090C1;
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroDescription = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.8;
  margin: 0;
`;

const CTAButton = styled(Link)`
  background-color: #0090C1;
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  transition: all 0.2s;
  
  &:hover {
    background-color: #007aa3;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 144, 193, 0.3);
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StatNumber = styled.div`
  font-size: 42px;
  font-weight: 700;
  color: #FFB800;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const HeroImageContainer = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  background-color: #2F96CA;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ValuesSection = styled.section`
  background-color: #f8f9fa;
  padding: 80px 40px;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ValuesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  color: #0090C1;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const ValueCard = styled.div`
  background: white;
  padding: 40px 32px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  }
`;

const ValueIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  background-color: #e8f4f8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 32px;
    height: 32px;
    color: #0090C1;
  }
`;

const ValueTitle = styled.h3`
  color: #0090C1;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px 0;
`;

const ValueDescription = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
`;

const SolutionSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 40px;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 60px 20px;
    gap: 40px;
  }
`;

const SolutionImageContainer = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  background-color: #2F96CA;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const SolutionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SolutionTitle = styled.h2`
  color: #333;
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const SolutionDescription = styled.p`
  color: #666;
  font-size: 15px;
  line-height: 1.8;
  margin: 0;
`;

const SolutionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SolutionListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #333;
  font-size: 15px;
  
  svg {
    width: 20px;
    height: 20px;
    color: #0090C1;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #0090C1 0%, #007aa3 100%);
  padding: 80px 40px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  color: white;
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 16px 0;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const CTADescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  margin: 0 0 32px 0;
  line-height: 1.6;
`;

const CTAButtonYellow = styled(Link)`
  background-color: #FFD700;
  color: #333;
  border: none;
  padding: 16px 40px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    background-color: #FFC700;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 215, 0, 0.4);
  }
`;

const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Sobre nós</HeroTitle>
          <HeroDescription>
            Facilitar o processo de busca e locação de imóveis, conectando proprietários
            e inquilinos de forma simples, segura e eficiente. Acreditamos que encontrar
            o lar perfeito não precisa ser complicado.
          </HeroDescription>
          <CTAButton to="/anunciar">Começar agora</CTAButton>
          
          <StatsContainer>
            <StatItem>
              <StatNumber>1000+</StatNumber>
              <StatLabel>Imóveis Cadastrados</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>500+</StatNumber>
              <StatLabel>Contratos realizados</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>95%</StatNumber>
              <StatLabel>Satisfação dos clientes</StatLabel>
            </StatItem>
          </StatsContainer>
        </HeroContent>
        
        <HeroImageContainer>
          <img src="/imagens/couple-keys.jpg" alt="Casal feliz com chaves do imóvel" />
        </HeroImageContainer>
      </HeroSection>

      <ValuesSection>
        <ValuesContainer>
          <SectionTitle>Nosso valores</SectionTitle>
          
          <ValuesGrid>
            <ValueCard>
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </ValueIcon>
              <ValueTitle>Simplicidade</ValueTitle>
              <ValueDescription>
                Tornamos o processo de locação intuitivo e descomplicado para todos
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </ValueIcon>
              <ValueTitle>Confiança</ValueTitle>
              <ValueDescription>
                Priorizamos a segurança e transparência em todas as transações
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </ValueIcon>
              <ValueTitle>Excelência</ValueTitle>
              <ValueDescription>
                Buscamos sempre superar expectativas e entregar o melhor serviço
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </ValuesContainer>
      </ValuesSection>

      <SolutionSection>
        <SolutionImageContainer>
          <img src="/imagens/couple-keys.jpg" alt="Solução Valugar" />
        </SolutionImageContainer>
        
        <SolutionContent>
          <SolutionTitle>A solução simples de um problema complexo.</SolutionTitle>
          <SolutionDescription>
            Nascemos da necessidade de simplificar o mercado imobiliário. Percebemos
            que encontrar um imóvel ideal era um processo demorado, confuso e muitas
            vezes frustrante.
          </SolutionDescription>
          
          <SolutionList>
            <SolutionListItem>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Facilitando a conexão
            </SolutionListItem>
            <SolutionListItem>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Mais conforto, privacidade e segurança
            </SolutionListItem>
            <SolutionListItem>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              A tecnologia do seu favor
            </SolutionListItem>
            <SolutionListItem>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Busque e anuncie, tudo no mesmo lugar
            </SolutionListItem>
          </SolutionList>
        </SolutionContent>
      </SolutionSection>

      <CTASection>
        <CTAContainer>
          <CTATitle>Pronto para começar?</CTATitle>
          <CTADescription>
            Venha fazer parte dessa inovação! Anuncie agora GRÁTIS e receba propostas imediatas.
          </CTADescription>
          <CTAButtonYellow to="/anunciar">Anunciar meu imóvel</CTAButtonYellow>
        </CTAContainer>
      </CTASection>
    </PageContainer>
  );
};

export default AboutPage;