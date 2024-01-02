const viewBmx = document.getElementById('viewbmx')
const bikes = document.querySelectorAll('.bike')
bikes.forEach(elem => elem.style.backgroundImage = `linear-gradient(to left ,${elem.dataset.color}, rgba(0,0,0, .1))`)
const svgElement = document.getElementById('SvgjsSvg1106')
const bikesContainer = document.querySelector('.bikes')
bikesContainer.addEventListener('click', function(event) {
    const item = event.target.closest('.bike')
    if(!item) return
    viewBmx.src= item.dataset.src
    svgElement.querySelector('path').setAttribute('fill', item.dataset.color)
    viewBmx.style.rotate = `-${item.dataset.rotate}deg`

})