import React, { useState } from 'react';
import styled from 'styled-components';
import { useProperties } from '../context/PropertyContext';

const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f5f5f5;
  min-height: calc(100vh - 80px);
  
  @media (max-width: 768px) {
    padding: 30px 16px;
  }
  
  @media (max-width: 480px) {
    padding: 20px 12px;
  }
`;

const AvatarSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  padding-top: 20px;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #2c3e50;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    border: 3px solid white;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  svg {
    width: 60px;
    height: 60px;
    color: white;
  }
`;

const InfoCard = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  
  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 6px;
  }
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const EditButton = styled.button`
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background: #f5f5f5;
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoField = styled.div`
  label {
    font-size: 12px;
    color: #999;
    font-weight: 500;
    display: block;
    margin-bottom: 4px;
  }
  
  p {
    font-size: 14px;
    color: #333;
    margin: 0;
    font-weight: 500;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 24px;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    gap: 12px;
    overflow-x: auto;
  }
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 12px 4px;
  background: none;
  border: none;
  border-bottom: 2px solid ${props => props.active ? '#0090C1' : 'transparent'};
  color: ${props => props.active ? '#0090C1' : '#666'};
  font-weight: ${props => props.active ? '600' : '400'};
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  margin-bottom: -2px;
  transition: all 0.2s;
  
  &:hover {
    color: #0090C1;
  }
`;

const AnnouncementsSection = styled.div`
  margin-top: 20px;
`;

const PropertyCard = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 20px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PropertyImage = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 6px;
  overflow: hidden;
  background: #f0f0f0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PropertyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PropertyTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 4px 0;
`;

const PropertyAddress = styled.p`
  font-size: 13px;
  color: #666;
  margin: 0 0 8px 0;
`;

const PropertyPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #0090C1;
  margin: 8px 0;
`;

const PropertyDetails = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 8px 0;
  flex-wrap: wrap;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #666;
  
  svg {
    width: 16px;
    height: 16px;
    color: #999;
  }
`;

const PropertyBadge = styled.span`
  background: #e3f2fd;
  color: #0090C1;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const PropertyActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
  padding-top: 12px;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    
    button {
      width: 100%;
    }
  }
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 10px 18px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid;
  transition: all 0.2s;
  
  ${props => props.variant === 'primary' && `
    background: #0090C1;
    color: white;
    border-color: #0090C1;
    
    &:hover {
      background: #007aa3;
    }
  `}
  
  ${props => props.variant === 'secondary' && `
    background: white;
    color: #333;
    border-color: #ddd;
    
    &:hover {
      background: #f5f5f5;
    }
  `}
  
  ${props => props.variant === 'danger' && `
    background: white;
    color: #dc3545;
    border-color: #dc3545;
    
    &:hover {
      background: #dc3545;
      color: white;
    }
  `}
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #666;
  margin-top: 8px;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #999;
  
  p {
    font-size: 16px;
    margin: 0;
  }
`;

const ProfilePage: React.FC = () => {
  const { properties } = useProperties();
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'inactive' | 'suspended'>('all');

  // Mock user data - substituir com dados reais do contexto de autenticação
  const user = {
    name: 'Maria Aparecida de Sousa',
    email: 'mariaaparecida221@gmail.com',
    phone: '(88) 99999-9999',
    avatar: null
  };

  // Filtrar propriedades - ajustar quando tiver sistema de usuário
  const userProperties = properties.slice(0, 3); // Mock: primeiras 3 propriedades
  
  const activeProperties = userProperties.filter((_, index) => index < 2);
  const inactiveProperties = userProperties.filter((_, index) => index === 2);
  const suspendedProperties: any[] = [];

  const getFilteredProperties = () => {
    switch (activeTab) {
      case 'active':
        return activeProperties;
      case 'inactive':
        return inactiveProperties;
      case 'suspended':
        return suspendedProperties;
      default:
        return userProperties;
    }
  };

  const filteredProperties = getFilteredProperties();

  return (
    <ProfileContainer>
      <AvatarSection>
        <Avatar>
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )}
        </Avatar>
      </AvatarSection>

      <InfoCard>
        <InfoHeader>
          <SectionTitle>Informações pessoais</SectionTitle>
          <EditButton>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Editar
          </EditButton>
        </InfoHeader>
        <InfoGrid>
          <InfoField>
            <label>Nome completo</label>
            <p>{user.name}</p>
          </InfoField>
          <InfoField>
            <label>Email</label>
            <p>{user.email}</p>
          </InfoField>
          <InfoField>
            <label>Telefone</label>
            <p>{user.phone}</p>
          </InfoField>
        </InfoGrid>
      </InfoCard>

      <InfoCard>
        <SectionTitle style={{ marginBottom: '20px' }}>Meus anúncios</SectionTitle>
        
        <TabsContainer>
          <Tab active={activeTab === 'all'} onClick={() => setActiveTab('all')}>
            Todos ({userProperties.length})
          </Tab>
          <Tab active={activeTab === 'active'} onClick={() => setActiveTab('active')}>
            Anúncios ativos ({activeProperties.length})
          </Tab>
          <Tab active={activeTab === 'inactive'} onClick={() => setActiveTab('inactive')}>
            Anúncios inativos ({inactiveProperties.length})
          </Tab>
          <Tab active={activeTab === 'suspended'} onClick={() => setActiveTab('suspended')}>
            Anúncios suspensos ({suspendedProperties.length})
          </Tab>
        </TabsContainer>

        <AnnouncementsSection>
          {activeTab === 'suspended' && suspendedProperties.length === 0 ? (
            <EmptyState>
              <p>Você não possui anúncios suspensos</p>
            </EmptyState>
          ) : filteredProperties.length > 0 ? (
            filteredProperties.map((property) => {
              const isActive = activeProperties.includes(property);
              
              return (
                <PropertyCard key={property.id}>
                  <PropertyImage>
                    <img src={property.images[0] || '/imagens/casa1.jpg'} alt={property.title} />
                  </PropertyImage>
                  <PropertyInfo>
                    <PropertyTitle>{property.title}</PropertyTitle>
                    <PropertyAddress>{property.address}</PropertyAddress>
                    <PropertyAddress>{property.city}</PropertyAddress>
                    
                    <PropertyPrice>
                      R${property.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/mês
                    </PropertyPrice>
                    
                    <PropertyDetails>
                      <DetailItem>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        {property.bedrooms || 4}+ Quartos
                      </DetailItem>
                      <DetailItem>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {property.bathrooms || 3}+ Banheiros
                      </DetailItem>
                      <PropertyBadge>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginRight: '6px' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        Não paga água
                      </PropertyBadge>
                    </PropertyDetails>
                    
                    <PropertyActions>
                      <ActionButton variant="primary">Exibir detalhes</ActionButton>
                      {isActive ? (
                        <>
                          <ActionButton variant="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '14px', height: '14px' }}>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            Editar
                          </ActionButton>
                          <ActionButton variant="danger">Desativar</ActionButton>
                        </>
                      ) : (
                        <>
                          <ActionButton variant="secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '14px', height: '14px' }}>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Reativar
                          </ActionButton>
                          <StatusBadge>
                            Desativado em 10/11/2025
                          </StatusBadge>
                        </>
                      )}
                    </PropertyActions>
                  </PropertyInfo>
                </PropertyCard>
              );
            })
          ) : (
            <EmptyState>
              <p>Nenhum anúncio encontrado</p>
            </EmptyState>
          )}
        </AnnouncementsSection>
      </InfoCard>
    </ProfileContainer>
  );
};

export default ProfilePage;
