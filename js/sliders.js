function registerSlider(id, updateFunction) {
    document.getElementById(id).addEventListener('input', updateFunction);
}

$('document').ready(() => {
    registerSlider('scatterSlider', scatterSliderFunc);
    registerSlider('sizeSlider', sizeSliderFunc);
    registerSlider('spaceSlider', emptyFunc);
    registerSlider('variationSlider', sizeVariationFunc);
    registerSlider('squareSlider', squareFunc);
    registerSlider('circleSlider', circleFunc);
    registerSlider('triangleSlider', triangleFunc);
    registerSlider('eyeSlider', eyeFunc);
    registerSlider('noseSlider', noseFunc);
    registerSlider('mouthSlider', mouthFunc);
})