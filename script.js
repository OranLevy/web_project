function openHamburger(){
    if($('.hamburger-menu').css('display') == 'none'){
        $('.hamburger-menu').show();
    }else{
        $('.hamburger-menu').hide();
    }
}

function getProducts(){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            console.log(request);
            // document.getElementById('error').innerHTML = request.responseText;
            let data = JSON.parse(request.responseText)
            console.log(data);
            for(let i = 0; i < data.length; i++){
                console.log(data[i]);
            }
        }
    }
    request.open('POST', 'shop.php', true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();
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