import { keys } from '../config/keys';

export const openWhatsapp = (message: string = 'Hello Pharmarx') => {
  const phoneNumber = keys.WHATSAPP_NUMBER || '2348171833999';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURI(message)}`;
  window.open(whatsappUrl);
};

export const navbarMessages = (path?: string) => {
  if (path === '/prescription') {
    return `Hello Pharmarx, I have attached my prescription below.`;
  }

  return `Hello Pharmarx, `;
};
