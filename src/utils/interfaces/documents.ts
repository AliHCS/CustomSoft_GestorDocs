export interface Documento {
  id?: number | string;
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
  id: "",
  name: "",
  description: "",
  extension: "",
  document: "",
  date: "",
};
