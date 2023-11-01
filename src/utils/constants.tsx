import { faker } from '@faker-js/faker';
import { ILink, IQuestionaire } from './interfaces';

export const links: ILink[] = [
  { path: '/', text: 'Home' },
  { path: '/shop', text: 'Shop' },
  { path: '/prescription', text: 'Prescription' },
  { path: '/online-pharmacist', text: 'Online Pharmacist' },
  { path: '/help-and-support', text: 'Help & Support' },
  { path: '/contact', text: 'Contact Us' },
];

export const essentialServiceLinks: (ILink & { img: string })[] = [
  { path: '/online-pharmacist', text: 'Counsultation', img: 'consultation' },
  { path: '/shop', text: 'Healthcare Products', img: 'healthcare' },
  { path: '/shop', text: 'Skincare Products', img: 'skincare' },
  { path: '/prescription', text: 'Prescription', img: 'upload' },
];

export const testimonialList = [...Array(3)].map(() => ({
  id: faker.datatype.uuid(),
  img: faker.image.people(),
  name: faker.name.fullName(),
  description: faker.lorem.paragraph(),
}));

export const questionaireList: IQuestionaire[] = [
  {
    question:
      'Can I shop for both prescription and over-the-counter drugs on this website?',
    answer: 'Yes, the site gives both services',
  },
  {
    question:
      'Is my personal and medical information secure when I upload prescriptions?',
    answer: 'Yes, we make sure to encrypt your data when you upload',
  },
  {
    question: 'How do I upload my prescription?',
    answer:
      'You have to sign up first and then you would have access to the upload prescription feature',
  },
  {
    question: 'What payment methods are accepted on the website?',
    answer: 'Card, Cash on site',
  },
  {
    question: 'Is my payment information stored securely on the website?',
    answer:
      'We do not store your payment info on our end based on complaince to the Nigerian govt rules, we leverage a third party service approved by the govt to do so',
  },
];

export const activitiesList = [
  {
    title: 'Plan a Visit',
    values: [
      { title: 'In-person visit', linkedTo: '/contact' },
      { title: 'Virtual Care Visit', linkedTo: '/contact' },
      { title: 'Pharmacy location', linkedTo: '/' },
    ],
  },
  {
    title: 'Services',
    values: [
      { title: 'Consultation', linkedTo: '/online-pharmacist' },
      { title: 'Shipping & Delivery', linkedTo: '/' },
      { title: 'Order Pickup', linkedTo: '/' },
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
