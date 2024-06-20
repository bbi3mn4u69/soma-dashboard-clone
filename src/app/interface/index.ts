export interface FileType {
  downloadKey: string;
}

export interface SectorType {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  companyId: string;
  primary: boolean;
}

export interface CompanyDataType {
  id: string;
  files: FileType[];
  sectors: SectorType[];
  name: string;
  logoUrl: string;
  slug: string;
  oneLiner: string;
  valuation: string;
  region: string;
  website: string;
}
