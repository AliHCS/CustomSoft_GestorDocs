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

export const defaultValuesDocumento: Documento = {
  id: 0,
  name: "",
  description: "",
  extension: "",
  document: "",
  date: "",
};
