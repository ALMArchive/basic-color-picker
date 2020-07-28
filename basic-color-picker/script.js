const colorViewer = document.getElementById('color-viewer');

const sliderValues = {
    r: 255,
    g: 255,
    b: 255
};

const sliders = Array.from(document.getElementsByClassName('color-slider'));
sliders.map(e => {
    const id = e.id;
    if(id === 'red') {
        e.value = sliderValues.r;
    } else if(id === 'green') {
        e.value = sliderValues.g;
        sliderValues.g = e.value;
    } else if(id === 'blue') {
        e.value = sliderValues.b;
    } else {
        throw 'Invalid id, should be red, green or blue';
    }
    e.addEventListener('input', (e) => {
        updateSliderValuesFromInputEvent(e);
        setColorViewerBackgroundFromSliderValues();
    });
});

function setElementBackgroundColor(elem, r, g, b) {
    elem.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function setColorViewerBackground(r, g, b) {
    setElementBackgroundColor(colorViewer, r, g, b);
}

function setColorViewerBackgroundFromSliderValues() {
    setColorViewerBackground(sliderValues.r, sliderValues.g, sliderValues.b);
}

function updateSliderValuesFromInputEvent(e) {
    const target = e.currentTarget;
    const id = target.id;
    if(id === 'red') {
        sliderValues.r = target.value;
    } else if(id === 'green') {
        sliderValues.g = target.value;
    } else if(id === 'blue') {
        sliderValues.b = target.value;
    } else {
        throw 'Invalid id, should be red, green or blue';
    }
}
