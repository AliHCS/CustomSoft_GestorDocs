export interface Documento {
  id: number;
  titulo: string;
  contenido: string;
}

export interface Datos {
  documentos: Documento[];
}
