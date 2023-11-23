export const openWhatsapp = (message: string = 'Hello Pharmarx') => {
  const phoneNumber =
    import.meta.env.VITE_REACT_APP_WHATSAPP_NUMBER || '2348171833999';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURI(message)}`;
  window.open(whatsappUrl);
};
