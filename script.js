function openHamburger() {
    if ($('.hamburger-menu').css('display') == 'none') {
        $('.hamburger-menu').show();
    } else {
        $('.hamburger-menu').hide();
    }
}

function getProducts(){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            console.log(request);
            let data = JSON.parse(request.responseText)
            console.log(data);
            let imgElems = document.querySelectorAll('.prod-img img');
            let titleElems = document.getElementsByClassName('prod-title');
            let priceElems = document.getElementsByClassName('prod-price');
            let descElems = document.getElementsByClassName('prod-desc-txt');
            for(let i = 0; i < data.length; i++){
                console.log(imgElems[i]);
                imgElems[i].setAttribute('src', data[i].image);
                titleElems[i].innerHTML = data[i].name;
                priceElems[i].innerHTML = data[i].price + '$';
                descElems[i].innerHTML = data[i].description;
            }
            fixWidthImg();
        }
    }
    request.open('POST', 'shop.php', true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
}

function fixWidthImg(){
    let imgElems = document.querySelectorAll('.prod-img img');
    for(let i = 0; i < imgElems.length; i++){
        if(imgElems[i].hasAttribute('src')){
            let attr = imgElems[i].getAttribute('src');
            console.log(attr);
            if(attr.includes('jigger')){
                imgElems[i].style.width = '50%';
            }
            if(attr.includes('pourer')){
                imgElems[i].style.width = '35%';
            }
        }
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