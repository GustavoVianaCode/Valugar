import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaBed, FaBath, FaRuler, FaCar, FaHeart, FaShare, FaMapMarkerAlt } from 'react-icons/fa';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [property, setProperty] = useState<any>(null);

  // Buscar dados do imóvel específico
  useEffect(() => {
    // Dados mockados - buscar apenas o imóvel com o ID correspondente
    const mockProperties = [
      {
        id: '1',
        title: 'Casa pra alugar no Centro',
        price: 590,
        address: 'R. Pedro Moreira Filho, 4698 - PAG Santos',
        bedrooms: 4,
        bathrooms: 2,
        area: 100,
        garage: true,
        furnished: false,
        petFriendly: true,
        condoFee: 0,
        iptu: 0,
        images: [
          '/imagens/casa1.jpg',
          '/imagens/casa2.jpg',
          '/imagens/casa3.jpg',
          '/imagens/casa4.jpg',
        ],
        description: 'Linda casa no centro da cidade, próxima a comércios, escolas e transporte público. Possui 4 quartos espaçosos, 2 banheiros completos, sala ampla, cozinha equipada e área de serviço. Ideal para famílias que buscam conforto e localização privilegiada.',
        contact: {
          phone: '(85) 98765-4321',
          advertiser: 'João Silva',
        },
        location: {
          neighborhood: 'Centro',
          city: 'R. Pedro Moreira Filho, 4698',
          state: 'PAG Santos, CE',
          lat: -23.550520,
          lng: -46.633308,
        },
      },
      {
        id: '2',
        title: 'Apartamento 2 quartos',
        price: 820,
        address: 'R. José Maria, 4658 - Fortaleza',
        bedrooms: 2,
        bathrooms: 1,
        area: 60,
        garage: true,
        furnished: true,
        petFriendly: false,
        condoFee: 200,
        iptu: 150,
        images: [
          '/imagens/casa3.jpg',
          '/imagens/casa1.jpg',
          '/imagens/casa2.jpg',
          '/imagens/casa4.jpg',
        ],
        description: 'Apartamento moderno e bem localizado, próximo a comércios e transporte público. Condomínio com área de lazer completa incluindo piscina, churrasqueira e salão de festas.',
        contact: {
          phone: '(85) 99999-8888',
          advertiser: 'Maria Silva',
        },
        location: {
          neighborhood: 'Aldeota',
          city: 'R. José Maria, 4658',
          state: 'Fortaleza, CE',
          lat: -23.550520,
          lng: -46.633308,
        },
      },
      {
        id: '3',
        title: 'Casa pra alugar',
        price: 580,
        address: 'R. Pedro Moreira Filho, 4698',
        bedrooms: 3,
        bathrooms: 2,
        area: 80,
        garage: true,
        furnished: false,
        petFriendly: true,
        condoFee: 0,
        iptu: 0,
        images: [
          '/imagens/casa2.jpg',
          '/imagens/casa1.jpg',
          '/imagens/casa3.jpg',
          '/imagens/casa4.jpg',
        ],
        description: 'Casa aconchegante com 3 quartos, perfeita para famílias pequenas. Localização tranquila e segura.',
        contact: {
          phone: '(85) 98888-7777',
          advertiser: 'Pedro Santos',
        },
        location: {
          neighborhood: 'PAG Santos',
          city: 'R. Pedro Moreira Filho, 4698',
          state: 'PAG Santos, CE',
          lat: -23.550520,
          lng: -46.633308,
        },
      },
    ];

    const foundProperty = mockProperties.find(p => p.id === id);
    
    if (foundProperty) {
      setProperty(foundProperty);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!property) {
    return null;
  }

  const relatedProperties = [
    {
      id: '1',
      image: '/imagens/casa1.jpg',
      price: 590,
      title: 'Casa pra alugar no Centro',
      address: 'R. Pedro Moreira Filho, 4698',
      city: 'PAG Santos',
      bedrooms: 4,
      bathrooms: 2,
      area: 100,
    },
    {
      id: '2',
      image: '/imagens/casa3.jpg',
      price: 820,
      title: 'Apartamento 2 quartos',
      address: 'R. José Maria, 4658',
      city: 'Fortaleza',
      bedrooms: 2,
      bathrooms: 1,
      area: 60,
    },
    {
      id: '3',
      image: '/imagens/casa2.jpg',
      price: 580,
      title: 'Casa pra alugar',
      address: 'R. Pedro Moreira Filho, 4698',
      city: 'PAG Santos',
      bedrooms: 3,
      bathrooms: 2,
      area: 80,
    },
    {
      id: '4',
      image: '/imagens/casa4.jpg',
      price: 2300,
      title: 'Sítio Fim de semana',
      address: 'Br. Juazeiro, SN',
      city: 'Teodoro da Roma',
      bedrooms: 4,
      bathrooms: 3,
      area: 500,
    },
  ].filter(p => p.id !== id);

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>← Voltar</BackButton>

      <ContentWrapper>
        <LeftColumn>
          <ImageGallery>
            <MainImage>
              <img src={property.images[selectedImage]} alt={property.title} />
              <ActionButtons>
                <IconButton>
                  <FaHeart />
                </IconButton>
                <IconButton>
                  <FaShare />
                </IconButton>
              </ActionButtons>
            </MainImage>
            <Thumbnails>
              {property.images.map((image: string, index: number) => (
                <Thumbnail
                  key={index}
                  active={selectedImage === index}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${property.title} ${index + 1}`} />
                </Thumbnail>
              ))}
            </Thumbnails>
          </ImageGallery>

          <PropertyInfo>
            <h2>{property.title}</h2>
            <Address>
              <FaMapMarkerAlt /> {property.address}
            </Address>

            <Features>
              <Feature>
                <FaBed />
                <div>
                  <strong>{property.bedrooms}</strong>
                  <span>Quartos</span>
                </div>
              </Feature>
              <Feature>
                <FaBath />
                <div>
                  <strong>{property.bathrooms}+</strong>
                  <span>Banheiros</span>
                </div>
              </Feature>
              <Feature>
                <FaRuler />
                <div>
                  <strong>{property.area}m²</strong>
                  <span>Área</span>
                </div>
              </Feature>
            </Features>

            <Characteristics>
              <h3>Características do imóvel</h3>
              <CharacteristicsList>
                <CharacteristicItem checked={property.garage}>
                  <FaCar /> Vagas p/car
                </CharacteristicItem>
                <CharacteristicItem checked={property.furnished}>
                  Aceita pet
                </CharacteristicItem>
                <CharacteristicItem checked={property.petFriendly}>
                  Pos de piscinas
                </CharacteristicItem>
                <CharacteristicItem checked={false}>
                  Piscina fumada
                </CharacteristicItem>
                <CharacteristicItem checked={false}>
                  Mais
                </CharacteristicItem>
              </CharacteristicsList>
            </Characteristics>

            <Description>
              <h3>Descrição</h3>
              <p>{property.description}</p>
            </Description>
          </PropertyInfo>

          <RelatedProperties>
            <h3>Imóveis em relacionados</h3>
            <PropertiesGrid>
              {relatedProperties.map((prop) => (
                <PropertyCard key={prop.id} onClick={() => navigate(`/imoveis/${prop.id}`)}>
                  <PropertyImage>
                    <img src={prop.image} alt={prop.title} />
                    <FavoriteIcon>
                      <FaHeart />
                    </FavoriteIcon>
                  </PropertyImage>
                  <PropertyCardContent>
                    <PropertyPrice>R${prop.price.toFixed(2)}<span>/mês</span></PropertyPrice>
                    <PropertyTitle>{prop.title}</PropertyTitle>
                    <PropertyAddress>{prop.address}</PropertyAddress>
                    <PropertyCity>{prop.city}</PropertyCity>
                    <PropertyCardFeatures>
                      <span>{prop.bedrooms} quartos</span>
                      <span>{prop.bathrooms} banheiros</span>
                      <span>{prop.area}m²</span>
                    </PropertyCardFeatures>
                    <ViewButton>Me ligue para</ViewButton>
                  </PropertyCardContent>
                </PropertyCard>
              ))}
            </PropertiesGrid>
          </RelatedProperties>
        </LeftColumn>

        <RightColumn>
          <PriceCard>
            <PriceTitle>R${property.price}<span>/mês</span></PriceTitle>
            <Advertiser>
              <Avatar />
              <div>
                <p>Você fala por</p>
                <strong>{property.contact.advertiser}</strong>
              </div>
            </Advertiser>

            <ContactForm onSubmit={(e) => e.preventDefault()}>
              <FormInput placeholder="Nome" />
              <FormInput placeholder="(xx) x xxxx-xxxx ligue (alguma)" />
              <ContactButton type="submit">Enviar mensagem</ContactButton>
            </ContactForm>
          </PriceCard>

          <LocationCard>
            <h4>Localização</h4>
            <MapPlaceholder>
              <FaMapMarkerAlt size={48} />
              <p>Mapa da localidade</p>
            </MapPlaceholder>
            <LocationAddress>
              <FaMapMarkerAlt />
              <div>
                <p>{property.location.city}</p>
                <small>{property.location.state}</small>
              </div>
            </LocationAddress>
          </LocationCard>

          <InsuranceCard>
            <h4>Dica de segurança</h4>
            <p>Okay vaga</p>
          </InsuranceCard>
        </RightColumn>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ImageGallery = styled.div``;

const MainImage = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ActionButtons = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  gap: 10px;
`;

const IconButton = styled.button`
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f5f5f5;
  }

  svg {
    color: #666;
  }
`;

const Thumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Thumbnail = styled.div<{ active: boolean }>`
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid ${props => props.active ? props.theme.colors.primary : 'transparent'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const PropertyInfo = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.text};
  }
`;

const Address = styled.p`
  color: #666;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const Features = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-bottom: 30px;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    font-size: 32px;
    color: ${props => props.theme.colors.primary};
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 18px;
      color: ${props => props.theme.colors.text};
    }

    span {
      font-size: 14px;
      color: #666;
    }
  }
`;

const Characteristics = styled.div`
  margin-bottom: 30px;

  h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: ${props => props.theme.colors.text};
  }
`;

const CharacteristicsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CharacteristicItem = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.checked ? props.theme.colors.text : '#999'};
  font-size: 14px;

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const Description = styled.div`
  h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: ${props => props.theme.colors.text};
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const RelatedProperties = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 20px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.text};
  }
`;

const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const PropertyCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const PropertyImage = styled.div`
  position: relative;
  height: 180px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FavoriteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #ccc;
  }
`;

const PropertyCardContent = styled.div`
  padding: 15px;
`;

const PropertyPrice = styled.h4`
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
  margin-bottom: 8px;

  span {
    font-size: 12px;
    font-weight: normal;
  }
`;

const PropertyTitle = styled.h5`
  font-size: 16px;
  margin-bottom: 4px;
  color: ${props => props.theme.colors.text};
`;

const PropertyAddress = styled.p`
  font-size: 12px;
  color: #666;
  margin-bottom: 2px;
`;

const PropertyCity = styled.p`
  font-size: 12px;
  color: #999;
  margin-bottom: 12px;
`;

const PropertyCardFeatures = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
  font-size: 11px;
  color: #666;

  span {
    &:not(:last-child)::after {
      content: '•';
      margin-left: 10px;
    }
  }
`;

const ViewButton = styled.button`
  width: 100%;
  padding: 8px;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    opacity: 0.9;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PriceCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 20px;
  align-self: flex-start;
  
  @media (max-width: 1024px) {
    position: static;
  }
`;

const PriceTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 32px;
  margin-bottom: 20px;

  span {
    font-size: 16px;
    font-weight: normal;
  }
`;

const Advertiser = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;

  p {
    font-size: 12px;
    color: #666;
    margin: 0;
  }

  strong {
    font-size: 14px;
    color: ${props => props.theme.colors.text};
  }
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FormInput = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const ContactButton = styled.button`
  padding: 14px;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }
`;

const LocationCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h4 {
    font-size: 16px;
    margin-bottom: 15px;
    color: ${props => props.theme.colors.text};
  }
`;

const MapPlaceholder = styled.div`
  height: 200px;
  background: #f0f0f0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999;
  margin-bottom: 15px;

  svg {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 10px;
  }
`;

const LocationAddress = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  svg {
    color: ${props => props.theme.colors.primary};
    margin-top: 4px;
  }

  p {
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    margin: 0;
  }

  small {
    font-size: 12px;
    color: #666;
  }
`;

const InsuranceCard = styled.div`
  background: #e3f2fd;
  padding: 20px;
  border-radius: 8px;

  h4 {
    font-size: 14px;
    margin-bottom: 8px;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 12px;
    color: #666;
    margin: 0;
  }
`;

export default PropertyDetailPage;