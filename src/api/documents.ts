import fetchApi from "@/api/api.ts";
import { Documento } from "@/utils/interfaces/documents";

const getDocs = () =>
  fetchApi({
    url: "documentos",
    method: "GET",
  });
const getDocsById = (id: string) =>
  fetchApi({
    url: `documentos/${id}/`,
    method: "GET",
  });
const createDocumento = (dataDoc: Documento) =>
  fetchApi({
    url: `documentos`,
    method: "POST",
    data: dataDoc,
  });
const updateDocs = (dataDoc: Documento) =>
  fetchApi({
    url: `documentos/${dataDoc.id}/`,
    method: "PUT",
    data: dataDoc,
  });

export { getDocs, getDocsById, createDocumento, updateDocs };
