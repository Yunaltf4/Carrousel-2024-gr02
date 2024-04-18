<?php

/**
 * Plugin Name: Carrousel
 * Description: Affiche un carrousel d'image controle par des boutons radio
 * Author: Tony
 * Version: 0.0
 */



function eddym_enqueue()
{
    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style(
        'em_plugin_carrousel_css',
        plugin_dir_url(__FILE__) . "style.css",
        array(),
        $version_css
    );

    wp_enqueue_script(
        'em_plugin_carrousel_js',
        plugin_dir_url(__FILE__) . "js/carrousel.js",
        array(),
        $version_js,
        true
    );
}
add_action('wp_enqueue_scripts', 'eddym_enqueue');

function html_boite()
{
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte

    $contenu = '<button class="bouton_ouvrir">Ouvrir</button>
    <div class="carrousel">
    <button class="carrousel_x">X</button>
    <figure class="carrousel_figure"></figure>
    <form class="carrousel_form"></form>
    </div>';
    return $contenu;
}

add_shortcode("carrousel", "html_boite");
