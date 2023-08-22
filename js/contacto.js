const form = document.getElementById('contacto__form')
const nombreInput = document.getElementById('contacto__nombre');
const nombreHelp = document.getElementById('nombreHelp');
const mailInput = document.getElementById('contacto__email');
const mailHelp = document.getElementById('mailHelp');
const telefonoInput = document.getElementById('contacto__telefono');
const telefonoHelp = document.getElementById('telefonoHelp');
const mensajeTextarea = document.getElementById('contacto__mensaje');
const mensajeHelp = document.getElementById('mensajeHelp');

const validateText = (inputEl) => {
    const value = inputEl.value;
    if (value.length >= 5 && value.length <= 40) {
        return value
    } else {
        return false
    }
};

const validateMail = ()=> {
    const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const value = mailInput.value;
    if (regex.test(value)) {
        return value
    } else {
        return false
    };
};

const validatePhone = () => {
    const regex = /^\(?(\d{2})\)?[- ]?(\d{4})[- ]?(\d{4})$/;
    const value = telefonoInput.value;
    if (regex.test(value)) {
        return value
    } else {
        return false
    };
};

const validateTextarea = ()=> {
    const value = mensajeTextarea.value;
    if (value.length >= 5 && value.length <= 400) {
        return value
    } else {
        return false
    }
};

const showInvalid = (el)=> {
    el.classList.add("is-invalid")
};

const removeInvalid = (el)=> {
    el.classList.remove("is-invalid")
};

const write = (el, text)=> {
    el.innerHTML = text;
};

const dataValidationResult = (res, inputEl, helpEl, text) => {
    if (res === false) {
        showInvalid(inputEl);
        write(helpEl, text);
    } else {
        removeInvalid(inputEl);
        write(helpEl, '');
    };
};

const callToastify = () => {
    Toastify({
        text: "Tu formulario de contacto ha sido enviado de manera exitosa. Te responderemos a la brevedad.",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #71BF44, #0F75BC)",
        },
        }).showToast();
};

const validateForm = () => {
    const nombreValido = validateText(nombreInput);
    dataValidationResult(nombreValido, nombreInput, nombreHelp, 'Por favor, ingrese un nombre válido.');
    const mailValido = validateMail();
    dataValidationResult(mailValido, mailInput, mailHelp, 'Por favor, ingrese un correo válido.');
    const telefonoValido = validatePhone();
    dataValidationResult(telefonoValido, telefonoInput, telefonoHelp, 'Por favor, ingrese un teléfono válido.');
    const mensajeValido = validateTextarea();
    dataValidationResult(mensajeValido, mensajeTextarea, mensajeHelp, 'Por favor, ingrese su mensaje en no menos de 5 caracteres y no más de 400 caracteres.');
    if (nombreValido && mailValido && telefonoValido && mensajeValido) {
        callToastify();
        console.log('contacto: ', nombreValido, mailValido, telefonoValido, mensajeValido);
    };
};

const submitFunction = (e)=> {
    e.preventDefault();
    validateForm();
};

form.addEventListener("submit", (e)=> submitFunction(e));