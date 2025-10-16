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
          <PhotoUploadIcon>📷</PhotoUploadIcon>
          <PhotoUploadText>Adicione suas fotos aqui</PhotoUploadText>
          <PhotoUploadSubtext>Arraste e solte suas fotos ou clique para selecionar</PhotoUploadSubtext>
          <SelectPhotoButton onClick={(e) => {
            e.stopPropagation();
            handlePhotoClick();
          }}>
            <span>📁</span> Selecionar fotos
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
            <PhotoUploadIcon>🎬</PhotoUploadIcon>
            <PhotoUploadText>Adicione um vídeo do seu imóvel</PhotoUploadText>
            <PhotoUploadSubtext>Tamanho máximo: 100MB</PhotoUploadSubtext>
            <SelectPhotoButton onClick={(e) => {
              e.stopPropagation();
              handleVideoClick();
            }}>
              <span>📹</span> Selecionar vídeo
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