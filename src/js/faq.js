import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

const faqAccordion = new Accordion('.list-faq', {
  duration: 400,
  showMultiple: true,
  elementClass: 'item-faq',
  triggerClass: 'title-faq-wrapper',
  panelClass: 'text-faq',
});
