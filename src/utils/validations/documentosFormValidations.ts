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

// Función de validación genérica
const validateField = (
  value: any,
  errors: any,
  errorMessage: string,
  validationFn: (value: any) => boolean
) => {
  if (!validationFn(value)) {
    errors.value.push(errorMessage);
  }
};

export const validateForm = (formData: Documento) => {
  clearErrors();

  // Validaciones para el campo 'name'
  validateField(
    formData.name,
    nameErrors,
    "El nombre es requerido",
    (value: string) => !!value
  );

  // Validaciones adicionales para 'name'
  validateField(
    formData.name,
    nameErrors,
    "El nombre debe tener al menos 3 caracteres",
    (value: string) => value.length >= 3
  );

  validateField(
    formData.name,
    nameErrors,
    "El nombre no puede tener más de 50 caracteres",
    (value: string) => value.length <= 50
  );

  validateField(
    formData.name,
    nameErrors,
    "El nombre no puede contener caracteres especiales",
    (value: string) => /^[a-zA-Z0-9 ]+$/.test(value)
  );

  // Validaciones para el campo 'description'
  validateField(
    formData.description,
    descriptionErrors,
    "La descripción es requerida",
    (value: string) => !!value
  );

  // Validaciones para el campo 'extension'
  validateField(
    formData.extension,
    extensionErrors,
    "La extensión es requerida",
    (value: string) => !!value
  );

  // Validaciones para el campo 'date'
  validateField(
    formData.date,
    dateErrors,
    "La fecha es requerida",
    (value: string) => !!value
  );

  // Validación adicional para 'date'
  if (formData.date) {
    const today = new Date();
    const selectedDate = new Date(formData.date);
    if (selectedDate > today) {
      dateErrors.value.push("La fecha no puede ser mayor que el día de hoy");
    }
  }
};
