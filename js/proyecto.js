const svg2 = document.getElementById('proyecto__svg2')
const svg3 = document.getElementById('proyecto__svg3')
const windowWidth = window.innerWidth;

const addAttribute = (element, attribute, value)=> {
    element.setAttribute(attribute, value)
};

const addAttributeHTML = () => {
    if (windowWidth >= 768) {
        addAttribute(svg2, 'data-aos-delay', 200)
        addAttribute(svg3, 'data-aos-delay', 400)
    }
}

addAttributeHTML();

// Creamos las variables corespondientes a los elementos de la frase y su contenido
const pElement = document.getElementById('proyecto__desarrollo__frase__p')
const strongElement = document.getElementById('proyecto__desarrollo__frase__strong')
const markElement = document.getElementById('proyecto__desarrollo__frase__mark')
const fraseP = "El cerebro ".split('');
const fraseStrong = "no es un vaso por llenar,".split('');
const fraseMark = "sino una lámpara por encender".split('');
let animationOccured = false;

// Creamos la funcion que imitara la escritura dentro del objeto
const write = (tiempo, element, frase, addClass) => {
    setTimeout(() => {
        if (addClass) {
            markElement.classList.add('mark__terminado')
        }
        frase.forEach((char, i) => {
            setTimeout(() => {
                element.innerHTML += char;
            }, i*100);
        });
    }, tiempo);
}

// Aca abajo va la logica necesaria para escuchar la aparicion del elemento en el viewport
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};

const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animationOccured) {
            console.log('hola')
            write(0, pElement, fraseP, false);
            write(1200, strongElement, fraseStrong, false);
            write(3700, markElement, fraseMark, true);
            animationOccured = true;
        }
        });
};

const observer = new IntersectionObserver(startAnimation, options);
observer.observe(pElement);