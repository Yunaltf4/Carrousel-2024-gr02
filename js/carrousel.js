(function () {
    console.log('debut carrousel');
    let carrousel = document.querySelector(".carrousel");
    let bouton = document.querySelector(".bouton_ouvrir");
    let carrousel_x = document.querySelector(".carrousel_x");
    let galerie = document.querySelector('.galerie');
    let carrousel_figure = document.querySelector(".carrousel_figure");
    let c_galerie_img = galerie.querySelectorAll('img');

    // Créer une div pour envelopper les boutons radio
    let lesBtnDiv = document.createElement('div');
    lesBtnDiv.classList.add('lesBtn'); // Ajouter la classe 'lesBtn'

    let carrousel_imgs = []; // Stocker les éléments img dans un tableau
    for (let i = 0; i < c_galerie_img.length; i++) {
        let carrousel_img = document.createElement('img');
        carrousel_img.classList.add('carrousel_img');
        carrousel_img.src = c_galerie_img[i].src;
        carrousel_figure.appendChild(carrousel_img);
        carrousel_imgs.push(carrousel_img); // Ajouter chaque img au tableau

        // Ajuster l'opacité des éléments
        if (i === 0) {
            carrousel_img.style.opacity = '1'; // Premier élément avec opacité 100%
        } else {
            carrousel_img.style.opacity = '0'; // Autres éléments avec opacité 0%
        }

        // Créer un bouton radio pour chaque image
        let radioBtn = document.createElement('input');
        radioBtn.setAttribute('type', 'radio');
        radioBtn.setAttribute('name', 'image-select');
        radioBtn.setAttribute('value', i); // Utilisez l'index de l'élément comme valeur
        radioBtn.classList.add('btn_radio'); // Ajoute la classe 'btn_radio'
        lesBtnDiv.appendChild(radioBtn); // Ajouter le bouton radio à la div lesBtn
    }

    carrousel_figure.appendChild(lesBtnDiv); // Ajouter la div lesBtn à la figure

    bouton.addEventListener("mousedown", function () {
        carrousel.classList.add('carrousel--ouvrir');
    });

    carrousel_x.addEventListener("mousedown", function () {
        carrousel.classList.remove('carrousel--ouvrir');
    });

    // Ajoutez un événement "change" pour les boutons radio
    let radioBtns = document.querySelectorAll('input[type="radio"]');
    radioBtns.forEach(function (radioBtn) {
        radioBtn.addEventListener('change', function () {
            // Faites quelque chose lorsque l'utilisateur sélectionne une image
            // Par exemple, afficher l'image correspondante dans le carrousel
            let selectedImageIndex = parseInt(this.value);
            // Mettre à jour l'opacité des images pour afficher seulement l'image sélectionnée
            carrousel_imgs.forEach((img, index) => {
                if (index === selectedImageIndex) {
                    img.style.opacity = '1';
                } else {
                    img.style.opacity = '0';
                }
            });
        });
    });
})();
