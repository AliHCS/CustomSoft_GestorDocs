import fetchApi from "@/api/api.ts";

const getDocs = () =>
  fetchApi({
    url: "documentos",
    method: "GET",
  });

export { getDocs };
