$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
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

let links = document.querySelectorAll('header a');
console.log(links)
function adicionarEfeito(event) {
    links.forEach(link => 
        link.classList.remove('estilo-link'),
       
    )
    event.target.classList.add('estilo-link')
    console.log(event.target)
}

links.forEach(link => {
    link.addEventListener('click', adicionarEfeito)
})