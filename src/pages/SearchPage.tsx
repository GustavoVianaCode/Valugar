import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useProperties, Property } from '../context/PropertyContext';
import PropertyCard from '../components/PropertyCard';

const PageContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
`;

const Breadcrumb = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  
  a {
    color: #0090C1;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SearchHeader = styled.div`
  margin-bottom: 30px;
`;

const LocationLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`;

const SearchInputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  
  &::placeholder {
    color: #aaa;
  }
`;

const SearchIconButton = styled.button`
  background-color: #0090C1;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: #007aa9;
  }
`;

const ResultsInfo = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const FilterToggleButton = styled.button`
  display: none;
  width: 100%;
  padding: 12px 20px;
  background: #0090C1;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: #007aa3;
  }
  
  @media (max-width: 968px) {
    display: flex;
  }
`;

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 30px;
  align-items: start;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const FilterOverlay = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 968px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s;
  }
`;

const FilterSidebar = styled.div<{ isOpen?: boolean }>`
  background: #fff;
  padding: 0;
  max-width: 280px;
  width: 100%;
  
  @media (max-width: 968px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 320px;
    max-width: 85vw;
    padding: 80px 24px 24px;
    overflow-y: auto;
    z-index: 1000;
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
  }
`;

const FilterCloseButton = styled.button`
  display: none;
  
  @media (max-width: 968px) {
    display: block;
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
    align-items: center;
    justify-content: center;
    
    &:hover {
      color: #0090C1;
    }
  }
`;

const FilterSection = styled.div`
  margin-bottom: 25px;
`;

const FilterTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  
  input {
    margin-right: 8px;
    cursor: pointer;
  }
`;

const RangeInputs = styled.div`
  display: flex;
  gap: 10px;
`;

const RangeInput = styled.input`
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px;
  box-sizing: border-box;
  width: 100%;
  
  &::placeholder {
    color: #aaa;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const NumberButton = styled.button<{ selected?: boolean }>`
  padding: 8px 16px;
  border: 1px solid ${props => props.selected ? '#0090C1' : '#ddd'};
  background-color: ${props => props.selected ? '#0090C1' : '#fff'};
  color: ${props => props.selected ? '#fff' : '#333'};
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    border-color: #0090C1;
  }
`;

const SecondaryButton = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  color: #333;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 8px;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const ResultsContainer = styled.div`
  padding: 0;
`;

const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
`;

const PageButton = styled.button<{ active?: boolean }>`
  padding: 8px 12px;
  border: 1px solid ${props => props.active ? '#0090C1' : '#ddd'};
  background-color: ${props => props.active ? '#0090C1' : '#fff'};
  color: ${props => props.active ? '#fff' : '#333'};
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    border-color: #0090C1;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 60px 20px;
  font-size: 16px;
  color: #666;
`;

const SearchPage: React.FC = () => {
  const { searchProperties, getFeaturedProperties } = useProperties();
  const [locationSearch, setLocationSearch] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filters state
  const [announcementType, setAnnouncementType] = useState({
    residential: false,
    commercial: false
  });
  
  const [propertyType, setPropertyType] = useState({
    casa: false,
    apartamento: false,
    kitnet: false,
    quarto: false,
    sitio: false
  });
  
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [condoMin, setCondoMin] = useState('');
  const [condoMax, setCondoMax] = useState('');
  const [noCondoFee, setNoCondoFee] = useState(false);
  
  const [bedrooms, setBedrooms] = useState<number | null>(null);
  const [bathrooms, setBathrooms] = useState<number | null>(null);
  
  const [areaMin, setAreaMin] = useState('');
  const [areaMax, setAreaMax] = useState('');
  
  const [amenities, setAmenities] = useState({
    noWaterBill: false,
    garage: false,
    ceramicFloor: false,
    petFriendly: false,
    roofed: false,
    municipal: false,
    pool: false,
    solarPanel: false
  });
  
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const resultsPerPage = 6;

  // Carregar imóveis em destaque ao iniciar
  useEffect(() => {
    const initialProperties = getFeaturedProperties(6);
    setSearchResults(initialProperties);
  }, [getFeaturedProperties]);

  const handleSearch = () => {
    const filters = {
      priceMin: priceMin ? parseInt(priceMin) : undefined,
      priceMax: priceMax ? parseInt(priceMax) : undefined
    };
    
    const results = searchProperties(locationSearch, filters);
    setSearchResults(results);
    setIsInitialLoad(false);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);
  const totalPages = Math.ceil(searchResults.length / resultsPerPage);

  return (
    <PageContainer>
      <Breadcrumb>
        <Link to="/">Início</Link> / Detalhamento do Imóvel
      </Breadcrumb>
      
      <SearchHeader>
        <LocationLabel>Localização</LocationLabel>
        <SearchInputContainer>
          <SearchInput 
            type="text" 
            placeholder="Procurar por endereço, bairro, cidade ou CEP"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <SearchIconButton onClick={handleSearch}>
            🔍 Buscar
          </SearchIconButton>
        </SearchInputContainer>
      </SearchHeader>
      
      <ResultsInfo>
        {isInitialLoad 
          ? "Mostrando imóveis em destaque" 
          : `Exibindo ${indexOfFirstResult + 1} - ${Math.min(indexOfLastResult, searchResults.length)} de ${searchResults.length} resultados`
        }
      </ResultsInfo>
      
      <FilterToggleButton onClick={() => setIsFilterOpen(true)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 4h18M3 12h18M3 20h18"/>
        </svg>
        Filtros
      </FilterToggleButton>
      
      <FilterOverlay isOpen={isFilterOpen} onClick={() => setIsFilterOpen(false)} />
      
      <SearchContainer>
        <FilterSidebar isOpen={isFilterOpen}>
          <FilterCloseButton onClick={() => setIsFilterOpen(false)}>×</FilterCloseButton>
          <FilterSection>
            <FilterTitle>Tipo do anúncio</FilterTitle>
            <CheckboxGroup>
              <CheckboxLabel>
                <input 
                  type="checkbox" 
                  checked={announcementType.residential}
                  onChange={(e) => setAnnouncementType({...announcementType, residential: e.target.checked})}
                />
                Residencial
              </CheckboxLabel>
              <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={announcementType.commercial}
                  onChange={(e) => setAnnouncementType({...announcementType, commercial: e.target.checked})}
                />
                Comercial
              </CheckboxLabel>
            </CheckboxGroup>
          </FilterSection>

          <FilterSection>
            <FilterTitle>Tipo do imóvel</FilterTitle>
            <CheckboxGroup>
              <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={propertyType.casa}
                  onChange={(e) => setPropertyType({...propertyType, casa: e.target.checked})}
                />
                Casa
              </CheckboxLabel>
              <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={propertyType.apartamento}
                  onChange={(e) => setPropertyType({...propertyType, apartamento: e.target.checked})}
                />
                Apartamento
              </CheckboxLabel>
              <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={propertyType.kitnet}
                  onChange={(e) => setPropertyType({...propertyType, kitnet: e.target.checked})}
                />
                Kitnet
              </CheckboxLabel>
              <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={propertyType.quarto}
                  onChange={(e) => setPropertyType({...propertyType, quarto: e.target.checked})}
                />
                Quarto
              </CheckboxLabel>
              <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={propertyType.sitio}
                  onChange={(e) => setPropertyType({...propertyType, sitio: e.target.checked})}
                />
                Sítio/Chácara
              </CheckboxLabel>
            </CheckboxGroup>
          </FilterSection>

          <FilterSection>
            <FilterTitle>Preço</FilterTitle>
            <RangeInputs>
              <RangeInput 
                type="text" 
                placeholder="Mín"
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
              />
              <RangeInput 
                type="text" 
                placeholder="Máx"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
              />
            </RangeInputs>
          </FilterSection>

          <FilterSection>
            <FilterTitle>Condomínio</FilterTitle>
            <RangeInputs>
              <RangeInput 
                type="text" 
                placeholder="Mín"
                value={condoMin}
                onChange={(e) => setCondoMin(e.target.value)}
              />
              <RangeInput 
                type="text" 
                placeholder="Máx"
                value={condoMax}
                onChange={(e) => setCondoMax(e.target.value)}
              />
            </RangeInputs>
            <SecondaryButton onClick={() => setNoCondoFee(!noCondoFee)}>
              Sem condomínio
            </SecondaryButton>
          </FilterSection>

          <FilterSection>
            <FilterTitle>Número de quartos</FilterTitle>
            <ButtonGroup>
              <NumberButton selected={bedrooms === 1} onClick={() => setBedrooms(1)}>1</NumberButton>
              <NumberButton selected={bedrooms === 2} onClick={() => setBedrooms(2)}>2</NumberButton>
              <NumberButton selected={bedrooms === 3} onClick={() => setBedrooms(3)}>3</NumberButton>
              <NumberButton selected={bedrooms === 4} onClick={() => setBedrooms(4)}>4+</NumberButton>
            </ButtonGroup>
          </FilterSection>

          <FilterSection>
            <FilterTitle>Número de banheiros</FilterTitle>
            <ButtonGroup>
              <NumberButton selected={bathrooms === 1} onClick={() => setBathrooms(1)}>1</NumberButton>
              <NumberButton selected={bathrooms === 2} onClick={() => setBathrooms(2)}>2</NumberButton>
              <NumberButton selected={bathrooms === 3} onClick={() => setBathrooms(3)}>3</NumberButton>
              <NumberButton selected={bathrooms === 4} onClick={() => setBathrooms(4)}>4+</NumberButton>
            </ButtonGroup>
          </FilterSection>

          <FilterSection>
            <FilterTitle>Área</FilterTitle>
            <RangeInputs>
              <RangeInput 
                type="text" 
                placeholder="Mín"
                value={areaMin}
                onChange={(e) => setAreaMin(e.target.value)}
              />
              <RangeInput 
                type="text" 
                placeholder="Máx"
                value={areaMax}
                onChange={(e) => setAreaMax(e.target.value)}
              />
            </RangeInputs>
          </FilterSection>

          <FilterSection>
            <FilterTitle>Detalhes do imóvel</FilterTitle>
            <CheckboxGroup>
              <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={amenities.noWaterBill}
                  onChange={(e) => setAmenities({...amenities, noWaterBill: e.target.checked})}
                />
                Não paga água
              </CheckboxLabel>
              <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={amenities.garage}
                  onChange={(e) => setAmenities({...amenities, garage: e.target.checked})}
                />
                Possui garagem
              </CheckboxLabel>
              <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={amenities.ceramicFloor}
                  onChange={(e) => setAmenities({...amenities, ceramicFloor: e.target.checked})}
                />
                Piso de cerâmica
              </CheckboxLabel>
              <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={amenities.petFriendly}
                  onChange={(e) => setAmenities({...amenities, petFriendly: e.target.checked})}
                />
                Aceita pet
              </CheckboxLabel>
              <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={amenities.roofed}
                  onChange={(e) => setAmenities({...amenities, roofed: e.target.checked})}
                />
                Imóvel forrado
              </CheckboxLabel>
              <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={amenities.municipal}
                  onChange={(e) => setAmenities({...amenities, municipal: e.target.checked})}
                />
                Possui municipal/IPTU
              </CheckboxLabel>
              <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={amenities.pool}
                  onChange={(e) => setAmenities({...amenities, pool: e.target.checked})}
                />
                Piscina
              </CheckboxLabel>
              <CheckboxLabel>
                <input 
                  type="checkbox"
                  checked={amenities.solarPanel}
                  onChange={(e) => setAmenities({...amenities, solarPanel: e.target.checked})}
                />
                Painel solar
              </CheckboxLabel>
            </CheckboxGroup>
          </FilterSection>
        </FilterSidebar>
        
        <ResultsContainer>
          {currentResults.length > 0 ? (
            <>
              <PropertiesGrid>
                {currentResults.map(property => {
                  const propertyCardData = {
                    id: property.id,
                    title: property.title,
                    location: `${property.address}, ${property.city}`,
                    price: property.price,
                    image: property.images && property.images.length > 0 ? property.images[0] : '/imagens/casa1.jpg',
                    bedrooms: property.bedrooms || 0,
                    bathrooms: property.bathrooms || 0,
                    area: property.area,
                    garages: 1
                  };
                  return <PropertyCard key={property.id} property={propertyCardData} />;
                })}
              </PropertiesGrid>
              
              {totalPages > 1 && (
                <Pagination>
                  <PageButton 
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    Página anterior
                  </PageButton>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <PageButton
                      key={index + 1}
                      active={currentPage === index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </PageButton>
                  ))}
                  
                  <PageButton
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Próxima página
                  </PageButton>
                </Pagination>
              )}
            </>
          ) : (
            <NoResults>
              Nenhum imóvel encontrado com os filtros selecionados.
              <p>Tente modificar sua busca para obter resultados.</p>
            </NoResults>
          )}
        </ResultsContainer>
      </SearchContainer>
    </PageContainer>
  );
};

export default SearchPage;