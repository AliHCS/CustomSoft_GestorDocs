// formValidations.ts

import { ref } from "vue";
import { Documento } from "@/utils/interfaces/documents";

export const nameErrors = ref<string[]>([]);
export const descriptionErrors = ref<string[]>([]);
export const extensionErrors = ref<string[]>([]);
export const dateErrors = ref<string[]>([]);

export const clearErrors = () => {
  nameErrors.value = [];
  descriptionErrors.value = [];
  extensionErrors.value = [];
  dateErrors.value = [];
};

export const validateForm = (formData: Documento) => {
  clearErrors();

  if (!formData.name) {
    nameErrors.value.push("El nombre es requerido");
  }

  if (!formData.description) {
    descriptionErrors.value.push("La descripción es requerida");
  }

  if (!formData.extension) {
    extensionErrors.value.push("La extensión es requerida");
  }

  if (!formData.date) {
    dateErrors.value.push("La fecha es requerida");
  } else {
    const today = new Date();
    const selectedDate = new Date(formData.date);
    if (selectedDate > today) {
      dateErrors.value.push("La fecha no puede ser mayor que el día de hoy");
    }
  }
};
