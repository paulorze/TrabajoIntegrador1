const svg2 = document.getElementById('index__svg2')
const svg3 = document.getElementById('index__svg3')
const windowWidth = window.innerWidth;

const addAttribute = (element, attribute, value)=> {
    element.setAttribute(attribute, value)
};

const addAttributeHTML = () => {
    if (windowWidth >= 768 && windowWidth <= 991) {
        addAttribute(svg2, 'data-aos-delay', 200)
    } else if (windowWidth >= 992) {
        addAttribute(svg2, 'data-aos-delay', 200)
        addAttribute(svg3, 'data-aos-delay', 400)
    }
}

addAttributeHTML();