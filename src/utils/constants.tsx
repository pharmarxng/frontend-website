import { ILink, IQuestionaire } from './interfaces';
import { PATH } from './path-constant';

export const links: ILink[] = [
  { path: PATH.HOME, text: 'Home' },
  { path: PATH.SHOP, text: 'Shop' },
  { path: PATH.PRESCRIPTION, text: 'Prescription' },
  { path: PATH.ONLINE_PHARMACIST, text: 'Online Pharmacist' },
  { path: PATH.HELP_AND_SUPPORT, text: 'Help & Support' },
  { path: PATH.CONTACT, text: 'Contact Us' },
];

export const authLinks: ILink[] = [
  { path: PATH.AUTH, text: `Auth`, icon: 'auth_logo' },
  { path: PATH.CART, text: `Cart`, icon: 'cart_logo' },
  { path: PATH.LOGIN, text: `Login`, icon: 'auth_logo' },
  { path: PATH.ORDER_LIST, text: `Your Orders` },
  { path: PATH.LOGOUT, text: `Logout` },
];

export const essentialServiceLinks: (ILink & { img: string })[] = [
  { path: '/online-pharmacist', text: 'Counsultation', img: 'consultation' },
  { path: '/shop', text: 'Healthcare Products', img: 'healthcare' },
  { path: '/shop', text: 'Skincare Products', img: 'skincare' },
  { path: '/prescription', text: 'Prescription', img: 'upload' },
];

export const testimonialList = [
  {
    id: '123e4567-e89b-12d3-a456-426614174001',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGHS-hfXwWrrjP-5ufeG_pQYymveghIFpy889QikT-6f8GD_wwRhG1g6mKw&s',
    name: 'Farouk Gbadebo',
    description:
      'I am so impressed with the wide range of medications available at this online pharmacy. The service is excellent, and the process is incredibly convenient. Highly recommended!',
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174002',
    img: 'data:image/jpeg;base64,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',
    name: 'John Okwy',
    description:
      'As a long-time customer, I can confidently say that this online pharmacy provides top-notch service. Quick delivery, competitive prices, and a user-friendly website make it my go-to place for medications.',
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174003',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShg4VAn5Ccgy0D1HwXBfb7ydIXWxwcysDYJwWZPfz34OrmzCUjtlUJzeDbBg&s',
    name: 'Ahmed Ogunlaja',
    description: `I've had a fantastic experience with this online pharmacy. The customer support is exceptional, and they offer a seamless ordering process. It's a reliable source for all my pharmaceutical needs.`,
  },
];

export const questionaireList: IQuestionaire[] = [
  {
    question:
      'Can I shop for both prescription and over-the-counter drugs on this website?',
    answer: 'Yes, the site gives both services',
  },
  {
    question:
      'Is my personal and medical information secure when I upload prescriptions?',
    answer:
      'Yes, uploading is done via our whatsapp line which encrypts all communication.',
  },
  {
    question: 'How do I upload my prescription?',
    answer:
      'Click on prescription in the navbar and it directs you to our whatsapp line where you can upload it.',
  },
  {
    question: 'What payment methods are accepted on the website?',
    answer: 'Card, Transfer, USSD, any and all methods paystack allows.',
  },
  {
    question: 'Is my payment information stored securely on the website?',
    answer:
      'We do not store your payment info on our end based on complaince to the Nigerian govt rules, we leverage on paystack so your information is safe.',
  },
];

export const activitiesList = [
  {
    title: 'Plan a Visit',
    values: [
      { title: 'In-person visit', linkedTo: '/contact' },
      { title: 'Virtual Care Visit', linkedTo: '/contact' },
      // { title: 'Pharmacy location', linkedTo: '/' },
    ],
  },
  {
    title: 'Services',
    values: [
      { title: 'Consultation', linkedTo: '/online-pharmacist' },
      { title: 'Shipping & Delivery', linkedTo: '/shop' },
      { title: 'Order Pickup', linkedTo: '/order-list' },
    ],
  },
  {
    title: 'Learn About Us',
    values: [
      { title: 'About Us', linkedTo: '/#about-us' },
      { title: 'Help', linkedTo: '/help-and-support' },
      { title: 'Contact Us', linkedTo: '/contact' },
    ],
  },
];

export const onlinePharmacyHealthCardList = [
  {
    title: 'Consult with a pharmacist in-person',
    img: '/svg/online_pharmacy_card_1.svg',
    description:
      'Experience personalized care with a visit to our pharmacy. Our skilled pharmacists are here to provide face-to-face consultations and expert diagnoses. Whether you have questions about medications, health concerns, or need guidance, our on-site consultations ensure you receive the care you deserve.',
  },
  {
    title: 'Connect with a pharmacist online',
    img: '/svg/online_pharmacy_card_2.svg',
    description:
      'Your health is just a click away. Chat directly with our experienced pharmacists through our website. Ask questions, discuss medications, and receive professional guidance from the comfort of your own space. Our virtual consultations make healthcare accessible whenever you need it.',
  },
];

export const aboutUsContentList = [
  'PharmaRx Pharmacy is a retail outlet in the heart of Lekki. We put your healthcare first and we pride ourselves in providing you with quality products all the time without compromise.',
  'We offer a wide range of products and services to meet your needs including prescription medications, over-the-counter products, personal care items, and health and wellness products.',
  'We have experts that demonstrate professionalism in all their interactions with customers. This includes providing accurate information on medications, making recommendations on health and wellness products, and offering consultations with our pharmacists.',
  'We make it easy for customers to get the products and services they need through our online prescription refills, home delivery, pickup, and extended hours of operation.',
  'Our goal is to provide exceptional customer service at all times. This includes handling customer complaints with professionalism and going above and beyond to ensure customer satisfaction.',
];

export const productListingDropdownOptions = [
  'Alphabetically, A-Z',
  'Alphabetically, Z-A',
];

export const radioButtonContent = [
  {
    type: 'delivery',
    image: '/images/carbon_delivery.png',
    label: 'Ship',
  },
  {
    type: 'pickup',
    image: '/images/solar_shop-2-linear.png',
    label: 'Pick up',
  },
];

export const inputFields = [
  {
    name: 'firstName',
    placeholder: 'First name',
    type: 'text',
    dispatchValue: 'SET_FIRST_NAME',
    label: 'First name*',
  },
  {
    name: 'lastName',
    placeholder: 'Last name',
    type: 'text',
    dispatchValue: 'SET_LAST_NAME',
    label: 'Last name*',
  },
  {
    name: 'phone',
    placeholder: 'Enter your phone number',
    type: 'text',
    dispatchValue: 'SET_PHONE',
    label: 'Phone Number*',
  },
  {
    name: 'address',
    placeholder: 'Enter your address',
    type: 'text',
    dispatchValue: 'SET_ADDRESS',
    label: 'Address*',
  },
  {
    name: 'city',
    placeholder: 'City',
    type: 'text',
    dispatchValue: 'SET_CITY',
    label: 'City*',
  },
  {
    name: 'postalCode',
    placeholder: 'Enter your postal code',
    type: 'text',
    dispatchValue: 'SET_POSTAL_CODE',
    label: 'Postal Code',
  },
];
