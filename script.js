function openHamburger(){
    if($('.hamburger-menu').css('display') == 'none'){
        $('.hamburger-menu').show();
    }else{
        $('.hamburger-menu').hide();
    }
}
//https://splidejs.com/
document.addEventListener(
    'DOMContentLoaded', function(){
        new Splide('.splide',{
            type: 'loop',
            perPage: 3,
            focus: 'center',
            autoplay: true,
            interval: 5000,
            // flickMaxPages: 3,
            // updateOnMove: true,
            pagination: true,
            padding: '10%',
            throttle: 300,
            breakpoints: {
                1000: {
                    perPage: 1,
                    padding: '15%'
                }
            }
        }).mount()
    }
)