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

export const categoriesList = [
  {
    id: 'sjhio',
    img: 'https://media.istockphoto.com/id/869594384/photo/shes-simply-adorable.jpg?s=1024x1024&w=is&k=20&c=1X7RoDIteyJrf9nLteiC8jkOuaveCd0mBz0CSeW1H8c=',
    name: 'Childcare',
  },
  {
    id: 'fiokl',
    img: 'https://media.istockphoto.com/id/1400306506/photo/spa-natural-organic-cosmetics-packaging-design-set-of-transparent-glass-bottles-moisturizer.jpg?s=1024x1024&w=is&k=20&c=arQOVT-gduZg0tyTMgTMM96DhX92soIpu7WWy9cLvWA=',
    name: 'Skincare',
  },
  {
    id: 'iganl',
    img: 'https://media.istockphoto.com/id/1450677491/photo/optometry-tablet-and-optician-with-man-for-results-communication-and-consulting-about-vision.jpg?s=1024x1024&w=is&k=20&c=hFbX7WSASlsmW1ucVrcVAiwzusXz5TGPwNg0oyiSwXI=',
    name: 'Eye Care',
  },
  {
    id: 'yspot',
    img: 'https://media.istockphoto.com/id/1305317621/photo/helping-my-patients-see-keeps-me-smiling.jpg?s=1024x1024&w=is&k=20&c=dUxefRfa34FYq3cZZ2674Q61RhbIhC8yhdptewLgx_g=',
    name: 'Diagnostics',
  },
  {
    id: 'yspor',
    img: 'https://media.istockphoto.com/id/1363009637/photo/organic-vegan-gummy-vitamins.jpg?s=1024x1024&w=is&k=20&c=N-LoZYka_0QA2tiWLQ_08dOExlxt_tXtdgSFeGiRk9c=',
    name: 'Multivitamins',
  },
  {
    id: 'yspoe',
    img: 'https://media.istockphoto.com/id/1404157252/photo/they-have-so-much-on-offer-here.jpg?s=1024x1024&w=is&k=20&c=DjLyWHRlZ68UyxK0D7ZGBNE12_XyJUi3Wsn1ETz_PVQ=',
    name: 'Supplements',
  },
  {
    id: 'yspow',
    img: 'https://media.istockphoto.com/id/1216333558/photo/anti-malaria-tablets-for-protection-against-malaria.jpg?s=612x612&w=0&k=20&c=sYlABOj90sSlODtbDfIH_f8WgOAvsU92u4x-AZFFgsA=',
    name: 'Antimalaria',
  },
  {
    id: 'yspoq',
    img: 'https://media.istockphoto.com/id/97686734/photo/fizzy-hangover-drink.jpg?s=612x612&w=0&k=20&c=TgdmkkL5Fzc6wNwr6ynd6mmo7McZIyOYk_KOFt3mF_E=',
    name: 'Antacid',
  },
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
    values: ['In-person visit', 'Virtual Care Visit', 'Pharmacy location'],
  },
  {
    title: 'Services',
    values: ['Consultation', 'Shipping & Delivery', 'Order Pickup'],
  },
  {
    title: 'Learn About Us',
    values: ['About Us', 'Help', 'Contact Us'],
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
