document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shit: 5,
        padding: 5,
        numVisible: 2,
        indicators: true,
        noWrap: true
    });
});