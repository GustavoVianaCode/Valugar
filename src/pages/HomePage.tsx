import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FeaturedProperties from '../components/FeaturedProperties';

const HeroSection = styled.section`
  background-color: #0090C1;
  padding: 0; // Removido o padding para controlar altura exata
  height: 592px; // Altura exata de 592px conforme a resolução que você precisa
  width: 100%; // Garante que ocupe toda a largura
  display: flex;
  align-items: center;
`;

const HeroContainer = styled.div`
  max-width: 1200px; // Largura exata de 1440px conforme sua necessidade
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between; // Mudado de center para space-between
  gap: 40px; // Reduzido de 300px para 40px
  align-items: center;
  height: 100%; // Garante que ocupe toda a altura do HeroSection
`;

// Para o conteúdo (texto e busca)
const HeroContent = styled.div`
  color: white;
  max-width: 500px; // Voltando ao valor original para manter o alinhamento
  padding: 20px 0; // Adicionado padding vertical para espaçamento interno
`;

const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const HeroSubtitle = styled.h2`
  font-size: 36px;
  color: #FFD700;
  font-weight: 700;
  margin-bottom: 30px;
`;

const HeroImage = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  img {
    max-height: 580px; // Quase altura total do hero (592px)
    width: auto;
    object-fit: contain;
  }
`;

const SearchBox = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 500px; // Definindo uma largura fixa maior que antes
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  width: 100%; /* Garante que ocupe toda a largura */
`;

const Tab = styled.button<{ active?: boolean }>`
  flex: 1; /* Faz cada botão ocupar o mesmo espaço */
  background: ${props => props.active ? '#0090C1' : 'transparent'};
  color: ${props => props.active ? 'white' : '#555'};
  border: none;
  border-radius: 20px;
  padding: 8px 14px;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza o conteúdo */
  
  &:hover {
    background: ${props => props.active ? '#0090C1' : '#f0f0f0'};
  }
`;

const SearchInput = styled.div`
  position: relative;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 100%; /* Garante que ocupe toda a largura */
`;

const Input = styled.input`
  flex: 1;
  border: none;
  padding: 14px 18px;
  font-size: 16px;
  outline: none;
`;

const SearchButton = styled.button`
  width: 60px;
  border: none;
  background: #0090C1;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  
  &:hover {
    background: #007aa9;
  }
`;

const FeaturedSection = styled.section`
  padding: 40px 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const CategoriesSection = styled.section`
  padding: 40px 0 60px;
  background: #f5f5f5;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CategoryCard = styled(Link)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 180px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  text-decoration: none;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.3);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CategoryTitle = styled.span`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-weight: 600;
  z-index: 2;
`;

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('residencial');
  
  return (
    <>
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle>Encontre o imóvel</HeroTitle>
            <HeroSubtitle>ideal para você</HeroSubtitle>
            
            <SearchBox>
              <TabsContainer>
                <Tab active={activeTab === 'residencial'} onClick={() => setActiveTab('residencial')}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    </svg>
                    <span style={{marginLeft: '8px'}}>Residencial</span>
                  </div>
                </Tab>
                <Tab active={activeTab === 'comercial'} onClick={() => setActiveTab('comercial')}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 10h.01"/>
                      <path d="M12 14h.01"/>
                      <path d="M12 6h.01"/>
                      <path d="M16 10h.01"/>
                      <path d="M16 14h.01"/>
                      <path d="M16 6h.01"/>
                      <path d="M8 10h.01"/>
                      <path d="M8 14h.01"/>
                      <path d="M8 6h.01"/>
                      <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>
                      <rect x="4" y="2" width="16" height="20" rx="2"/>
                    </svg>
                    <span style={{marginLeft: '8px'}}>Comercial</span>
                  </div>
                </Tab>
              </TabsContainer>
              
              <SearchInput>
                <Input placeholder="Cidade, bairro ou região" />
                <SearchButton>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </SearchButton>
              </SearchInput>
            </SearchBox>
          </HeroContent>
          
          <HeroImage>
            <img src="/imagens/house-3d.png" alt="Casa 3D" />
          </HeroImage>
        </HeroContainer>
      </HeroSection>

      <FeaturedSection>
        <SectionTitle>Imóveis em destaque</SectionTitle>
        <FeaturedProperties />
      </FeaturedSection>
      
      <CategoriesSection>
        <SectionTitle>Categorias</SectionTitle>
        <CategoryGrid>
          <CategoryCard to="/contato">
            <img src="/imagens/contato.jpg" alt="Entre em Contato" />
            <CategoryTitle>Entre em Contato</CategoryTitle>
          </CategoryCard>
          <CategoryCard to="/sobre">
            <img src="/imagens/sobre.jpg" alt="Sobre nós" />
            <CategoryTitle>Sobre nós</CategoryTitle>
          </CategoryCard>
          <CategoryCard to="/imoveis-destaque">
            <img src="/imagens/destaque.jpg" alt="Imóveis em Destaque" />
            <CategoryTitle>Imóveis em Destaque</CategoryTitle>
          </CategoryCard>
          <CategoryCard to="/anunciar">
            <img src="/imagens/anuncio.jpg" alt="Anunciar Imóvel" />
            <CategoryTitle>Anunciar Imóvel</CategoryTitle>
          </CategoryCard>
        </CategoryGrid>
      </CategoriesSection>
    </>
  );
};

export default HomePage;