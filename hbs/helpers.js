const hbs = require('hbs');

// Estas funciones se crean en el hbs, no es necesario exportarlas

// helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalize', (text) => {
    let words = text.split(' ')
    words.forEach((word, idx) => {
        words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    });

    return words.join(' ')
})