(function () {
    console.log('debut carrousel')
    let carrousel = document.querySelector(".carrousel");
    let bouton = document.querySelector(".bouton_ouvrir");
    let carrousel_x = document.querySelector(".carrousel_x");

    let galerie = document.querySelector('.galerie');
    // let galerie_img = galerie.querySelector('img');
    let carrousel_img = document.createElement('img');
    let carrousel_figure = document.querySelector(".carrousel_figure");

    let c_galerie_img = galerie.querySelectorAll('img');

    for (const elm of c_galerie_img) {
        carrousel_img.classList.add('carrousel_img');
        carrousel_img.src = elm.src;
        carrousel_figure.appendChild(carrousel_img);
        // console.log(carrousel_img.src);
    }






    bouton.addEventListener("mousedown", function () {
        carrousel.classList.add('carrousel--ouvrir');
    })

    carrousel_x.addEventListener("mousedown", function () {
        carrousel.classList.remove('carrousel--ouvrir');
    })

})()
