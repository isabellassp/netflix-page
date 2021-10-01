function mudarEstilo(evento) {
    var display = document.getElementById(evento).style.display;
    if (display == "none") {
        document.getElementById(evento).style.display = "flex";
    } else {
        document.getElementById(evento).style.display = "none";
    }
}

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})