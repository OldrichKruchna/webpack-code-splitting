// CommonJs dependency statement
// require('./components/Home.js');
// require('./components/Contact.js');
// require('./components/About.js');

// ES6 dependency statement
import './components/Home.js';
import './components/Contact.js';
import './components/About.js';

const app = document.querySelector('#app');
app.prepend('Main.js loaded!');


document.querySelector('#homeButton').addEventListener('click', () => {
    // import('./components/Home.js').then(() => alert('Loaded'));
})

document.querySelector('#contactButton').addEventListener('click', () => {
    // import('./components/Contact.js').then(() => alert('Loaded'));
})

document.querySelector('#aboutButton').addEventListener('click', () => {
    // import('./components/About.js').then(() => alert('Loaded'));
})