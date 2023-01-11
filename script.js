function openHamburger() {
    if ($('.hamburger-menu').css('display') === 'none') {
        $('.hamburger-menu').show();
    } else {
        $('.hamburger-menu').hide();
    }
}

function getProducts() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request);
            let data = JSON.parse(request.responseText);
            console.log(data);
            let imgElems = document.querySelectorAll('.prod-img img');
            let titleElems = document.getElementsByClassName('prod-title');
            let priceElems = document.getElementsByClassName('prod-price');
            let descElems = document.getElementsByClassName('prod-desc-txt');
            for (let i = 0; i < data.length; i++) {
                console.log(imgElems[i])
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


function fixWidthImg() {
    let imgElems = document.querySelectorAll('.prod-img img');
    for (let i = 0; i < imgElems.length; i++) {
        if (imgElems[i].hasAttribute('src')) {
            let attr = imgElems[i].getAttribute('src');
            console.log(attr);
            if (attr.includes('jigger')) {
                imgElems[i].style.width = '50%';
            }
            if (attr.includes('pourer')) {
                imgElems[i].style.width = '35%';
            }
        }
    }
}

// https://swiperjs.com/get-started
$(document).ready(function () {
    new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        loopedSlides: 10,
        slidesPerView: 'auto',
        spaceBetween: 150,
        centeredSlides: true,
        simulateTouch: true,
        touchEventsTarget: true,
        touchReleaseOnEdges: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

    })
})


// Animation
AOS.init({
    duration: 1400,
    once: true,
    // delay: 400,
});

function validateForm() {
    let firstname = document.forms["myForm"]["firstname"].value;
    if (firstname === "") {
        alert("First name must be filled out");
        return false;
    }
    if (!firstname.match(/[A-Za-z\u0590-\u05FF]/)) {
        alert("First name must contain letters only");
        return false;
    }
    let lastname = document.forms["myForm"]["lastname"].value;
    if (lastname === "") {
        alert("Last name must be filled out");
        return false;
    }
    if (!lastname.match(/[A-Za-z\u0590-\u05fe]/)) {
        alert("Last name must contain letters only");
        return false;
    }
    let phone = document.forms["myForm"]["phone"].value;
    if (phone === "") {
        alert("Phone number must be filled out");
        return false;
    }
    if (!phone.match(/^\d{10}$/)) {
        alert("Phone number must contain 10 digits");
        return false;
    }
    let email = document.forms["myForm"]["email"].value;
    if (email === "") {
        alert("Email address must be filled out");
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("You have entered an invalid email address");
        return false;
    }

    let course = document.getElementById('course-dropdown').value;
    if (course === "Select") {
        alert("Please select a course");
        return false;
    }
    alert("Your details have been sent successfully!");
    return true;
}

function switchColor(id) {
    let val = document.getElementById(id).innerHTML;
    if (val === "Select") {
        document.getElementById(id).innerHTML = 'Unselect';
        document.getElementById(id).style.backgroundColor = '#eee';
        document.getElementById(id).style.border = '#eee';
        document.getElementById(id).style.color = 'black';
    }
    if (val === "Unselect") {
        document.getElementById(id).innerHTML = 'Select';
        document.getElementById(id).style.backgroundColor = '#282828';
        document.getElementById(id).style.border = '#282828';
        document.getElementById(id).style.color = 'white';
    }
}

function makeOrder() {
    let counter = 0;
    let numOfCards = document.getElementsByClassName('prod-card').length;
    for (let i = 1; i <= numOfCards; i++) {
        let val = document.getElementById(i).innerHTML;
        if (val === "Unselect") {
            counter++;
            document.getElementById(i).innerHTML = 'Select';
            document.getElementById(i).style.backgroundColor = '#282828';
            document.getElementById(i).style.border = '#282828';
            document.getElementById(i).style.color = 'white';
        }
    }
    if (counter === 0) {
        alert("No product selected");
    }
    else if (counter === 1) {
        alert("Your order has been accepted! (" + counter + " product total)");
    } else {
        alert("Your order has been accepted! (" + counter + " products total)");
    }
}