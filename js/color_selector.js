function generateColorItemCards() {
    colorList.forEach(colors => {
        $('#colorContainer').append(generateColorItemCard(colors));
    })
}

function selectColors(colors) {
    selectedColors = colors.split(',');
    console.log(selectedColors);
}

function generateColorItemCard(colors) {
    return `
    <div class="ColorCard" onclick="selectColors('${colors.toString()}');
    $('.ColorCard').removeClass('selected');
    $(this).addClass('selected');">
        <div class="ColorCircleContainer">
        <div class="ColorCircle" style="background-color: ${colors[0]}"></div>
        <div class="ColorCircle" style="background-color: ${colors[1]}"></div>
        <div class="ColorCircle" style="background-color: ${colors[2]}"></div>
        <div class="ColorCircle" style="background-color: ${colors[3]}"></div>
        </div>
    </div>
    `
}

$('document').ready(() => {
    generateColorItemCards();
})