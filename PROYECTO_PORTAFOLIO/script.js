document.addEventListener("DOMContentLoaded", () => {
    const toastElement = document.querySelector(".toast");
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
});