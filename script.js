function openHamburger() {
    if ($('.hamburger-menu').css('display') == 'none') {
        $('.hamburger-menu').show();
    } else {
        $('.hamburger-menu').hide();
    }
}
//https://splidejs.com/
document.addEventListener(
    'DOMContentLoaded', function () {
        new Splide('.splide', {
            type: 'loop',
            perPage: 3,
            focus: 'center',
            autoplay: true,
            interval: 5000,
            pagination: false,
            padding: '10%',
            // throttle: 300,
            drag: 'free',
            // direction: 'rtl',
            breakpoints: {
                1000: {
                    perPage: 1,
                    padding: '15%'
                }
            }
        }).mount()
    }
)

// Animation
AOS.init({
    duration: 1000,
    once: true,
    // delay: 400,
});