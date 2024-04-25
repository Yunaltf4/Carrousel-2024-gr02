// (function () {
//     // Afficher un message au début du carrousel
//     console.log('debut carrousel');

//     // Sélectionner les éléments nécessaires
//     let carrousel = document.querySelector(".carrousel");
//     let bouton = document.querySelector(".bouton_ouvrir");
//     let carrousel_x = document.querySelector(".carrousel_x");
//     let galerie = document.querySelector('.galerie');
//     let carrousel_figure = document.querySelector(".carrousel_figure");
//     let c_galerie_img = galerie.querySelectorAll('img');

//     // Créer une div pour envelopper les boutons radio
//     let lesBtnDiv = document.createElement('div');
//     lesBtnDiv.classList.add('lesBtn'); // Ajouter la classe 'lesBtn'

//     let carrousel_imgs = []; // Stocker les éléments img dans un tableau

//     // Parcourir les images de la galerie
//     for (let i = 0; i < c_galerie_img.length; i++) {
//         let carrousel_img = document.createElement('img');
//         carrousel_img.classList.add('carrousel_img');
//         carrousel_img.src = c_galerie_img[i].src;
//         carrousel_figure.appendChild(carrousel_img);
//         carrousel_imgs.push(carrousel_img); // Ajouter chaque img au tableau

//         // Ajuster l'opacité des éléments
//         if (i === 0) {
//             carrousel_img.style.opacity = '1'; // Premier élément avec opacité 100%
//         } else {
//             carrousel_img.style.opacity = '0'; // Autres éléments avec opacité 0%
//         }

//         // Créer un bouton radio pour chaque image
//         let radioBtn = document.createElement('input');
//         radioBtn.setAttribute('type', 'radio');
//         radioBtn.setAttribute('name', 'image-select');
//         radioBtn.setAttribute('value', i); // Utilisez l'index de l'élément comme valeur
//         radioBtn.classList.add('btn_radio'); // Ajoute la classe 'btn_radio'
//         lesBtnDiv.appendChild(radioBtn); // Ajouter le bouton radio à la div lesBtn
//     }

//     carrousel_figure.appendChild(lesBtnDiv); // Ajouter la div lesBtn à la figure

//     // Ajouter un événement de clic sur le bouton pour ouvrir le carrousel
//     bouton.addEventListener("mousedown", function () {
//         carrousel.classList.add('carrousel--ouvrir');
//     });

//     // Ajouter un événement de clic sur la croix pour fermer le carrousel
//     carrousel_x.addEventListener("mousedown", function () {
//         carrousel.classList.remove('carrousel--ouvrir');
//     });

//     // Ajouter un événement "change" pour les boutons radio
//     let radioBtns = document.querySelectorAll('input[type="radio"]');
//     radioBtns.forEach(function (radioBtn) {
//         radioBtn.addEventListener('change', function () {
//             // Mettre à jour l'opacité des images pour afficher seulement l'image sélectionnée
//             let selectedImageIndex = parseInt(this.value);
//             carrousel_imgs.forEach((img, index) => {
//                 if (index === selectedImageIndex) {
//                     img.style.opacity = '1';
//                 } else {
//                     img.style.opacity = '0';
//                 }
//             });
//         });
//     });
// })();

(function () {
    console.log('debut carrousel')
    let carrousel = document.querySelector(".carrousel");
    let bouton = document.querySelector(".bouton__ouvrir");
    let carrousel__x = document.querySelector(".carrousel__x");

    let galerie = document.querySelector('.galerie');
    // let galerie_img = galerie.querySelector('img');


    let carrousel__figure = document.querySelector(".carrousel__figure");
    let galerie_img = galerie.querySelectorAll('img');//collection de l'image de la galerie

    let index = 0;
    for (const elm of galerie_img) {
        creer_image_carrousel(index, elm);
        index += 1;
        creer_radio_carrousel(index - 1);
    }
    function creer_image_carrousel(index, elm) {

        let carrousel__img = document.createElement('img');//premiere image seulement 
        carrousel__img.dataset.index = index;
        carrousel__img.classList.add('carrousel__img');
        carrousel__img.src = elm.src;
        carrousel__figure.appendChild(carrousel__img);
        // console.log(carrousel_img.src);

    }

    function creer_radio_carrousel(index) {
        let carrousel__form = document.querySelector('.carrousel__form');
        let carrousel_radio = document.createElement('input');

        carrousel_radio.classList.add('carrousel_radio')

        carrousel_radio.dataset.index = index;

        carrousel_radio.type = 'radio';

        carrousel_radio.name = "imgRadio";

        carrousel__form.appendChild(carrousel_radio);
        //creer input
        //modifier type = radio
        //name
        //index
        //ajouter le radio bouton au formulaire
        //ecouteur del'evenement change

        carrousel_radio.addEventListener('click', function () {
            let index = this.dataset.index;
            let carrousel__img = carrousel__figure.children;
            for (const img of carrousel__img) {
                img.style.opacity = 0;
            }
            carrousel__img[index].style.opacity = 1;
        })

    }

    bouton.addEventListener("mousedown", function () {
        carrousel.classList.add('carrousel--ouvrir');
    })

    carrousel__x.addEventListener("mousedown", function () {
        carrousel.classList.remove('carrousel--ouvrir');
    })

})()