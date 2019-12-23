function nextCarousel() {
    $('#carousel').carousel('next');
}

let stepCount = 1;
function nextStatesCarousel() {
    $('#statesCarousel').carousel('next');
    stepCount++;
    $('.PaginationText').html(`Step ${stepCount}/3`)
}