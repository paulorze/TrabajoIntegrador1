const splide1 = document.getElementById('splide1');
const splide1Thumbnail = document.getElementById('splide1Thumbnail');

const splideActividad = new Splide(splide1, {
    type       : 'fade',
    heightRatio: 0.5,
    pagination : false,
    arrows     : false,
    cover      : true,
});

const splideActividadThumbnail = new Splide(splide1Thumbnail, {
    rewind          : true,
    fixedWidth      : 104,
    fixedHeight     : 58,
    isNavigation    : true,
    gap             : 10,
    focus           : 'center',
    pagination      : false,
    cover           : true,
    dragMinThreshold: {
        mouse: 4,
        touch: 10,
    },
    breakpoints : {
        640: {
            fixedWidth  : 66,
            fixedHeight : 38,
        },
    },
});

splideActividad.sync(splideActividadThumbnail);
splideActividad.mount();
splideActividadThumbnail.mount();

const splide2 = document.getElementById('splide2');
const splide2Thumbnail = document.getElementById('splide2Thumbnail');

const splideDeporte = new Splide(splide2, {
    type       : 'fade',
    heightRatio: 0.5,
    pagination : false,
    arrows     : false,
    cover      : true,
});

const splideDeporteThumbnail = new Splide(splide2Thumbnail, {
    rewind          : true,
    fixedWidth      : 104,
    fixedHeight     : 58,
    isNavigation    : true,
    gap             : 10,
    focus           : 'center',
    pagination      : false,
    cover           : true,
    dragMinThreshold: {
        mouse: 4,
        touch: 10,
    },
    breakpoints : {
        640: {
            fixedWidth  : 66,
            fixedHeight : 38,
        },
    },
});

splideDeporte.sync(splideDeporteThumbnail);
splideDeporte.mount();
splideDeporteThumbnail.mount();

const splide3 = document.getElementById('splide3');
const splide3Thumbnail = document.getElementById('splide3Thumbnail');

const splideAlimentacion = new Splide(splide3, {
    type       : 'fade',
    heightRatio: 0.5,
    pagination : false,
    arrows     : false,
    cover      : true,
});

const splideAlimentacionThumbnail = new Splide(splide3Thumbnail, {
    rewind          : true,
    fixedWidth      : 104,
    fixedHeight     : 58,
    isNavigation    : true,
    gap             : 10,
    focus           : 'center',
    pagination      : false,
    cover           : true,
    dragMinThreshold: {
        mouse: 4,
        touch: 10,
    },
    breakpoints : {
        640: {
            fixedWidth  : 66,
            fixedHeight : 38,
        },
    },
});

splideAlimentacion.sync(splideAlimentacionThumbnail);
splideAlimentacion.mount();
splideAlimentacionThumbnail.mount();

const splide4 = document.getElementById('splide4');
const splide4Thumbnail = document.getElementById('splide4Thumbnail');

const splideArte = new Splide(splide4, {
    type       : 'fade',
    heightRatio: 0.5,
    pagination : false,
    arrows     : false,
    cover      : true,
});

const splideArteThumbnail = new Splide(splide4Thumbnail, {
    rewind          : true,
    fixedWidth      : 104,
    fixedHeight     : 58,
    isNavigation    : true,
    gap             : 10,
    focus           : 'center',
    pagination      : false,
    cover           : true,
    dragMinThreshold: {
        mouse: 4,
        touch: 10,
    },
    breakpoints : {
        640: {
            fixedWidth  : 66,
            fixedHeight : 38,
        },
    },
});

splideArte.sync(splideArteThumbnail);
splideArte.mount();
splideArteThumbnail.mount();

const splide5 = document.getElementById('splide5');
const splide5Thumbnail = document.getElementById('splide5Thumbnail');

const splideValores = new Splide(splide5, {
    type       : 'fade',
    heightRatio: 0.5,
    pagination : false,
    arrows     : false,
    cover      : true,
});

const splideValoresThumbnail = new Splide(splide5Thumbnail, {
    rewind          : true,
    fixedWidth      : 104,
    fixedHeight     : 58,
    isNavigation    : true,
    gap             : 10,
    focus           : 'center',
    pagination      : false,
    cover           : true,
    dragMinThreshold: {
        mouse: 4,
        touch: 10,
    },
    breakpoints : {
        640: {
            fixedWidth  : 66,
            fixedHeight : 38,
        },
    },
});

splideValores.sync(splideValoresThumbnail);
splideValores.mount();
splideValoresThumbnail.mount();