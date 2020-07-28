const colorViewer = document.getElementById('color-viewer');

const sliderValues = {
    r: 0,
    g: 0,
    b: 0
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
    setColorViewerBackgroundFromSliderValues();
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
