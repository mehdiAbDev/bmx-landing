const viewBmx = document.getElementById('viewbmx')
const bikes = document.querySelectorAll('.bike')
const svgElement = document.getElementById('SvgjsSvg1106')
const bikesContainer = document.querySelector('.bikes')
document.addEventListener('load', function() {

})
bikesContainer.addEventListener('click', function(event) {
    const item = event.target.closest('.bike')
    if(!item) return
    const highQualityImageSrc = `${item.dataset.src}high.png`
    console.log(highQualityImageSrc);
    const tempImage = new Image()
    tempImage.src = highQualityImageSrc
    tempImage.onload = function() {
        viewBmx.src = highQualityImageSrc;
        console.log('Loaded succ');
    }
    console.log(highQualityImageSrc);
    svgElement.querySelector('path').setAttribute('fill', item.dataset.color)
    viewBmx.style.rotate = `-${item.dataset.rotate}deg`
})