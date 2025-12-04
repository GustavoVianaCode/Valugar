import styled from 'styled-components';

// ========== CONTAINERS ==========
export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 1024px) {
    padding: 0 30px;
  }
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  
  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

export const ContainerNarrow = styled(Container)`
  max-width: 1200px;
`;

export const ContainerWide = styled(Container)`
  max-width: 1600px;
`;

export const Section = styled.section`
  padding: 80px 0;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

// ========== GRIDS ==========
export const Grid = styled.div<{ columns?: number; gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 1}, 1fr);
  gap: ${props => props.gap || '20px'};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${props => props.gap ? `calc(${props.gap} * 0.75)` : '15px'};
  }
`;

export const Grid2Columns = styled.div<{ gap?: string }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.gap || '20px'};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${props => props.gap || '15px'};
  }
`;

export const Grid3Columns = styled.div<{ gap?: string }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.gap || '20px'};
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${props => props.gap || '15px'};
  }
`;

export const Grid4Columns = styled.div<{ gap?: string }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.gap || '20px'};
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: ${props => props.gap || '15px'};
  }
`;

export const GridAutoFit = styled.div<{ minWidth?: string; gap?: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.minWidth || '280px'}, 1fr));
  gap: ${props => props.gap || '20px'};
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: ${props => props.gap || '15px'};
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// ========== FLEX LAYOUTS ==========
export const FlexRow = styled.div<{ gap?: string; justify?: string; align?: string; wrap?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: ${props => props.gap || '16px'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  
  @media (max-width: 768px) {
    gap: ${props => props.gap ? `calc(${props.gap} * 0.75)` : '12px'};
  }
`;

export const FlexColumn = styled.div<{ gap?: string; justify?: string; align?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || '16px'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  
  @media (max-width: 768px) {
    gap: ${props => props.gap ? `calc(${props.gap} * 0.75)` : '12px'};
  }
`;

// ========== CARDS LAYOUTS ==========
export const Card = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 16px;
  }
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardBody = styled.div`
  /* Sem estilos específicos, apenas para semântica */
`;

export const CardFooter = styled.div`
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
  
  @media (max-width: 480px) {
    margin-top: 16px;
    padding-top: 12px;
  }
`;

// ========== STACK (Espaçamento vertical) ==========
export const Stack = styled.div<{ spacing?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.spacing || '16px'};
`;

// ========== DIVIDER ==========
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 24px 0;
  
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;
