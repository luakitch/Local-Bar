$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > $('#myCarousel').height()) {
            $(".navbar").css("background", "").addClass('bg-dark');
        } else {
            $(".navbar").removeClass('bg-dark').css("background", "");
        }
    });
});

$('.collapseDown').click(function(){
    $(this).find('i').toggleClass('fa-regular fa-angle-up')
});

//Navbar mobile collapse

//const navLinks = document.querySelectorAll('.nav-item')
//const menuToggle = document.getElementById('navbarNavDropdown')
//const bsCollapse = new bootstrap.Collapse(menuToggle)
//navLinks.forEach((l) => {
//    l.addEventListener('click', () => { bsCollapse.toggle() })
//})

//parralax


const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + "px";
});

//Leaflet Map
let mapOptions = {
    center: [40.7545128062636, -86.36468960196402],
    zoom: 20
}

let map = new L.map('map', mapOptions);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

let marker = new L.Marker([40.7545128062636, -86.36468960196402]);
marker.addTo(map);



//AOS Initialize
AOS.init();
