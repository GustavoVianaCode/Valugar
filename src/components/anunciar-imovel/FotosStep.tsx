import React, { useRef } from 'react';
import {
  FormSection,
  FormSectionTitle,
  FormSectionSubtitle
} from '../../styles/components/FormStyles';
import {
  PhotoUploadArea,
  PhotoUploadIcon,
  PhotoUploadText,
  PhotoUploadSubtext,
  SelectPhotoButton,
  PhotoTipsSection,
  PhotoTipsTitle,
  PhotoTipsSubtitle,
  TipsList,
  TipItem
} from '../../styles/components/MediaStyles';

interface FotosStepProps {
  wantsFeatured: boolean;
  photos: File[];
  setPhotos: (photos: File[]) => void;
  video?: File | null;
  setVideo?: (video: File | null) => void;
}

const FotosStep: React.FC<FotosStepProps> = ({
  wantsFeatured,
  photos,
  setPhotos,
  video,
  setVideo
}) => {
  const photoInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  
  const handlePhotoClick = () => {
    if (photoInputRef.current) {
      photoInputRef.current.click();
    }
  };
  
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      // Limitar a 10 fotos no total
      const totalPhotos = [...photos, ...newFiles].slice(0, 10);
      setPhotos(totalPhotos);
    }
  };
  
  const handleVideoClick = () => {
    if (videoInputRef.current && setVideo) {
      videoInputRef.current.click();
    }
  };
  
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && setVideo) {
      setVideo(e.target.files[0]);
    }
  };
  
  return (
    <>
      <FormSection>
        <FormSectionTitle>Adicione fotos do seu imóvel</FormSectionTitle>
        <FormSectionSubtitle>Fotos atraem mais interessados! Você pode adicionar até 10 fotos</FormSectionSubtitle>
        
        <PhotoUploadArea onClick={handlePhotoClick}>
          <input 
            type="file" 
            ref={photoInputRef} 
            style={{ display: 'none' }} 
            accept="image/png, image/jpeg, image/jpg"
            multiple
            onChange={handlePhotoChange}
          />
          <PhotoUploadIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </PhotoUploadIcon>
          <PhotoUploadText>Adicione suas fotos aqui</PhotoUploadText>
          <PhotoUploadSubtext>Arraste e solte suas fotos ou clique para selecionar</PhotoUploadSubtext>
          <SelectPhotoButton onClick={(e) => {
            e.stopPropagation();
            handlePhotoClick();
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginRight: '8px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Selecionar fotos
          </SelectPhotoButton>
        </PhotoUploadArea>
        
        <PhotoUploadSubtext style={{ textAlign: 'center', marginTop: '10px' }}>
          Formatos aceitos: PNG, JPG, JPEG (máx. 10MB por foto)
        </PhotoUploadSubtext>
        
        {photos.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <PhotoUploadSubtext>
              {photos.length} {photos.length === 1 ? 'foto selecionada' : 'fotos selecionadas'}
            </PhotoUploadSubtext>
            {/* Aqui você pode adicionar uma prévia das fotos */}
          </div>
        )}
        
        {wantsFeatured && setVideo && (
          <PhotoUploadArea style={{ marginTop: '30px' }} onClick={handleVideoClick}>
            <input 
              type="file" 
              ref={videoInputRef} 
              style={{ display: 'none' }} 
              accept="video/*"
              onChange={handleVideoChange}
            />
            <PhotoUploadIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </PhotoUploadIcon>
            <PhotoUploadText>Adicione um vídeo do seu imóvel</PhotoUploadText>
            <PhotoUploadSubtext>Tamanho máximo: 100MB</PhotoUploadSubtext>
            <SelectPhotoButton onClick={(e) => {
              e.stopPropagation();
              handleVideoClick();
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginRight: '8px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Selecionar vídeo
            </SelectPhotoButton>
          </PhotoUploadArea>
        )}
        
        {video && setVideo && (
          <div style={{ marginTop: '20px' }}>
            <PhotoUploadSubtext>
              Vídeo selecionado: {video.name}
            </PhotoUploadSubtext>
          </div>
        )}
      </FormSection>
      
      <PhotoTipsSection>
        <PhotoTipsTitle>Como tirar boas fotos</PhotoTipsTitle>
        <PhotoTipsSubtitle>Boas fotos atraem mais interessados!</PhotoTipsSubtitle>
        
        <TipsList>
          <TipItem>Tire fotos com boa iluminação (de preferência durante o dia)</TipItem>
          <TipItem>Mostre todos os cômodos principais</TipItem>
          <TipItem>Inclua a fachada do imóvel</TipItem>
          <TipItem>Evite fotos muito escuras ou desfocadas</TipItem>
        </TipsList>
      </PhotoTipsSection>
    </>
  );
};

export default FotosStep;