<?php
/**
 * Enqueue scripts and styles
 */
function fredfifteen_scripts() {
	
	wp_deregister_script('jquery');
	
	wp_enqueue_style( 'fredfifteen', get_template_directory_uri() . 'public/css/fredfifteen.css' );
	wp_enqueue_script( 'script-name', get_template_directory_uri() . 'public/js/main.js', array(), '1.0.0', true );
}

add_action( 'wp_enqueue_scripts', 'theme_name_scripts' );
?>