const card1 = document.getElementById('about__desarrollo__valores__1');
const card2 = document.getElementById('about__desarrollo__valores__2');
const card3 = document.getElementById('about__desarrollo__valores__3');
const card4 = document.getElementById('about__desarrollo__valores__4');
const card5 = document.getElementById('about__desarrollo__valores__5');
const card6 = document.getElementById('about__desarrollo__valores__6');
const card7 = document.getElementById('about__desarrollo__valores__7');
const windowWidth = window.innerWidth;

const addAttribute = (element, attribute, value)=> {
    element.setAttribute(attribute, value)
};

const addAttributeHTML = () => {
    if (windowWidth >= 768 && windowWidth <= 991) {
        addAttribute(card2, 'data-aos-delay', 200);
        addAttribute(card4, 'data-aos-delay', 200);
        addAttribute(card6, 'data-aos-delay', 200);
    } else if (windowWidth >= 992 && windowWidth <= 1045) {
        addAttribute(card2, 'data-aos-delay', 200);
        addAttribute(card3, 'data-aos-delay', 400);
        addAttribute(card5, 'data-aos-delay', 200);
        addAttribute(card6, 'data-aos-delay', 400);
    } else if (windowWidth >= 1045 && windowWidth <= 1300) {
        addAttribute(card2, 'data-aos-delay', 200);
        addAttribute(card3, 'data-aos-delay', 400);
        addAttribute(card4, 'data-aos-delay', 600);
        addAttribute(card6, 'data-aos-delay', 200);
        addAttribute(card7, 'data-aos-delay', 400);
    } else if (windowWidth >= 1300 && windowWidth <= 1575) {
        addAttribute(card2, 'data-aos-delay', 200);
        addAttribute(card3, 'data-aos-delay', 400);
        addAttribute(card4, 'data-aos-delay', 600);
        addAttribute(card5, 'data-aos-delay', 800);
        addAttribute(card7, 'data-aos-delay', 200);
    } else if (windowWidth >= 1576 && windowWidth <= 1777) {
        addAttribute(card2, 'data-aos-delay', 200);
        addAttribute(card3, 'data-aos-delay', 400);
        addAttribute(card4, 'data-aos-delay', 600);
        addAttribute(card5, 'data-aos-delay', 800);
        addAttribute(card6, 'data-aos-delay', 1000);
    } else if (windowWidth >= 1778) {
        addAttribute(card2, 'data-aos-delay', 200);
        addAttribute(card3, 'data-aos-delay', 400);
        addAttribute(card4, 'data-aos-delay', 600);
        addAttribute(card5, 'data-aos-delay', 800);
        addAttribute(card6, 'data-aos-delay', 1000);
        addAttribute(card7, 'data-aos-delay', 1200);
    }
}

addAttributeHTML();