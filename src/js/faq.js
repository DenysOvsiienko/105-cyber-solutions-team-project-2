import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container');

new Accordion('.container-second', {
    duration: 400,
    showMultiple: true,
    onOpen: function(currentElement) {
      console.log(currentElement);
    }
  });