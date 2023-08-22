// Creamos las variables correspondientes al formulario para postularse como colaborador
const postulateForm = document.getElementById('postulate__form')
const postulateNombreInput = document.getElementById('postulate__nombre');
const postulateNombreHelp = document.getElementById('nombreHelp');
const postulateMailInput = document.getElementById('postulate__email');
const postulateMailHelp = document.getElementById('mailHelp');
const postulateTelefonoInput = document.getElementById('postulate__telefono');
const postulateTelefonoHelp = document.getElementById('telefonoHelp');
const postulateMensajeTextarea = document.getElementById('postulate__mensaje');
const postulateMensajeHelp = document.getElementById('mensajeHelp');
const postulateCVInput = document.getElementById('postulate__cv');
const postulateCVHelp = document.getElementById('cvHelp');

// Creamos las funciones validatorias necesarias
const validateText = (inputEl) => {
    const value = inputEl.value;
    if (value.length >= 5 && value.length <= 40) {
        return value
    } else {
        return false
    }
};

const validateMail = (inputEl)=> {
    const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const value = inputEl.value;
    if (regex.test(value)) {
        return value
    } else {
        return false
    };
};

const validatePhone = () => {
    const regex = /^\(?(\d{2})\)?[- ]?(\d{4})[- ]?(\d{4})$/;
    const value = postulateTelefonoInput.value;
    if (regex.test(value)) {
        return value
    } else {
        return false
    };
};

const validateTextarea = ()=> {
    const value = postulateMensajeTextarea.value;
    if (value.length >= 5 && value.length <= 400) {
        return value
    } else {
        return false
    }
};

const validateFile = ()=> {
    const regex = /(\.pdf)$/i;
    const value = postulateCVInput.value;
    if (regex.exec(value)) {
        return value
    } else {
        return false
    };
};

// Creamos la funciones que generan que el input se marque como invalido si el resultado no es
// correcto y que se quite esa marca si lo es
const showInvalid = (el)=> {
    el.classList.add("is-invalid")
};

const removeInvalid = (el)=> {
    el.classList.remove("is-invalid")
};

// Creamos la funcion que escribe dentro del mensaje de ayuda
const write = (el, text)=> {
    el.innerHTML = text;
};

// Creamos la funcion que dependiendo de la validez del value, ejecuta las tres funciones anteriores
const dataValidationResult = (res, inputEl, helpEl, text) => {
    if (res === false) {
        showInvalid(inputEl);
        write(helpEl, text);
    } else {
        removeInvalid(inputEl);
        write(helpEl, '');
    };
};

// Creamos la funcion que ejecuta un toastify
const callToastifyPostulate = () => {
    Toastify({
        text: "Tu formulario para postularse ha sido enviado de manera exitosa. Te responderemos a la brevedad.",
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

// Creamos la funcion que valida todos los inputs del formulario
const validateFormPostulate = () => {
    const nombreValido = validateText(postulateNombreInput);
    dataValidationResult(nombreValido, postulateNombreInput, postulateNombreHelp, 'Por favor, ingrese un nombre válido.');
    const mailValido = validateMail(postulateMailInput);
    dataValidationResult(mailValido, postulateMailInput, postulateMailHelp, 'Por favor, ingrese un correo válido.');
    const telefonoValido = validatePhone();
    dataValidationResult(telefonoValido, postulateTelefonoInput, postulateTelefonoHelp, 'Por favor, ingrese un teléfono válido.');
    const mensajeValido = validateTextarea();
    dataValidationResult(mensajeValido, postulateMensajeTextarea, postulateMensajeHelp, 'Por favor, ingrese su mensaje en no menos de 5 caracteres y no más de 400 caracteres.');
    const cvValido = validateFile();
    dataValidationResult(cvValido, postulateCVInput, postulateCVHelp, 'Por favor, ingrese un archivo válido.')
    if (nombreValido && mailValido && telefonoValido && mensajeValido && cvValido) {
        callToastifyPostulate();
        console.log('postulate: ', nombreValido, mailValido, telefonoValido, mensajeValido, cvValido);
    };
};

// Creamos la funcion que se ejecutara en el submit, evitando que se recargue la pagina
const submitFunctionPostulate = (e)=> {
    e.preventDefault();
    validateFormPostulate();
};

// Agregamos esta funcion para que se ejecute siempre que se haga un submit en el formulario
postulateForm.addEventListener("submit", (e)=> submitFunctionPostulate(e));

// Hacemos lo mismo con el formulario correspondiente a las donaciones
const donarForm = document.getElementById('donar__form')
const donarNombreInput = document.getElementById('donar__nombre');
const donarNombreHelp= document.getElementById('donarNombreHelp');
const donarMailInput = document.getElementById('donar__email');
const donarMailHelp= document.getElementById('donarMailHelp');
const donarCantidadInput = document.getElementById('donar__cantidad');
const donarCantidadHelp= document.getElementById('donarCantidadHelp');
const anonimoCheckbox = document.getElementById('donar__anonimamente');
const mensualCheckbox = document.getElementById('donar__mensualmente');

const validateCantidad = ()=> {
    const value = +donarCantidadInput.value
    if (isNaN(value)) {
        return false
    } else {
        return value
    };
};

const validateCheckbox = (el)=> {
    return el.checked;
};

const callToastifyDonar = () => {
    Toastify({
        text: "Tu ha sido enviada de manera exitosa. ¡Te estamos muy agradecidos!",
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

const validateFormDonar = () => {
    const nombreValido = validateText(donarNombreInput);
    dataValidationResult(nombreValido, donarNombreInput, donarNombreHelp, 'Por favor, ingrese un nombre válido.');
    const mailValido = validateMail(donarMailInput);
    dataValidationResult(mailValido, donarMailInput, donarMailHelp, 'Por favor, ingrese un correo válido.');
    const cantidadValida = validateCantidad();
    dataValidationResult(cantidadValida, donarCantidadInput, donarCantidadHelp, 'Por favor, ingrese una cantidad válida.')
    const anonimo = validateCheckbox(anonimoCheckbox);
    const mensual = validateCheckbox(mensualCheckbox)
    if (nombreValido && mailValido && cantidadValida) {
        callToastifyDonar();
        console.log('donacion: ', nombreValido, mailValido, cantidadValida, anonimo, mensual);
    };
};

const submitFunctionDonar = (e)=> {
    e.preventDefault();
    validateFormDonar();
};

donarForm.addEventListener("submit", (e)=> submitFunctionDonar(e));
