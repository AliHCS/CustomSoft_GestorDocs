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
const updateDocs = (dataDoc: Documento, id: string) =>
  fetchApi({
    url: `documentos/${id}/`,
    method: "PUT",
    data: dataDoc,
  });
const deleteDocs = (id: string) =>
  fetchApi({
    url: `documentos/${id}/`,
    method: "DELETE",
  });

export { getDocs, getDocsById, createDocumento, updateDocs, deleteDocs };
