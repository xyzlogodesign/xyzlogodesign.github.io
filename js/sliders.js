function registerSlider(id, updateFunction) {
    document.getElementById(id).addEventListener('input', updateFunction);
}

$('document').ready(() => {
    registerSlider('scatterSlider', scatterSliderFunc);
    registerSlider('sizeSlider', sizeSliderFunc);
    registerSlider('spaceSlider', emptyFunc);
})