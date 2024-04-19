export interface Documento {
  id: number;
  name: string;
  description: string;
  extension: string;
  document: string;
  date: string;
}

export interface Datos {
  documentos: Documento[];
}
