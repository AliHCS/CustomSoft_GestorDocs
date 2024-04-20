export interface Documento {
  id: number | string;
  name: string;
  description: string;
  extension: string;
  document: string;
  date: string;
  file: File[] | undefined;
}

export interface Datos {
  documentos: Documento[];
}
