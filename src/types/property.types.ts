export type PropertyType = 'residencial' | 'comercial' | null;
export type AdFormat = 'completo' | 'simples' | null;
export type ResidentialType = 'casa' | 'apartamento' | 'kitnet' | 'quarto' | 'sitio' | 'outros' | null;
export type CommercialType = 'loja' | 'box' | 'armazem' | 'sala' | 'predio' | 'outros' | null;

export interface PropertyLocation {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface PropertyAmenities {
  doesNotPayWater: boolean;
  hasGarage: boolean;
  acceptsPets: boolean;
  isFurnished: boolean;
  hasCeramicFloor: boolean;
  hasPool: boolean;
  hasOceanView: boolean;
  hasGrill: boolean;
  hasYard: boolean;
  hasSolarPanel: boolean;
}

export interface PropertyBasicInfo {
  shortTitle: string;
  detailedDescription: string;
  residentialType: ResidentialType;
  commercialType: CommercialType;
  bedrooms: number;
  bathrooms: number;
  rooms: number;
  area: string;
  rent: string;
  additionalCosts: boolean;
}

export interface PropertyFormData extends PropertyBasicInfo {
  propertyType: PropertyType;
  adFormat: AdFormat;
  location: PropertyLocation;
  amenities: PropertyAmenities;
  photos: File[];
  video: File | null;
}
