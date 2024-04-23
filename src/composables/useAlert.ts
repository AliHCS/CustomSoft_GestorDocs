import { ref } from "vue";

export function useAlert() {
  const showAlertComponent = ref(false);
  const alertMessage = ref("");
  const alertTimeout = ref(5000); // Tiempo de 5 segundos por defecto
  const alertColor = ref("success"); // Color por defecto: éxito

  const showAlert = (message: string, timeout = 5000, color = "success") => {
    alertMessage.value = message;
    alertTimeout.value = timeout;
    alertColor.value = color;
    showAlertComponent.value = true;
  };

  return {
    showAlertComponent,
    alertMessage,
    alertTimeout,
    alertColor,
    showAlert,
  };
}
