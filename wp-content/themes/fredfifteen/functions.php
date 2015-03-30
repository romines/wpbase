<?php
/**
 * Enqueue scripts and styles
 */



function fredfifteen_scripts() {
	// print '<-- fredfifteen! -->';
	// // wp_deregister_script('jquery');
	//

	wp_enqueue_style( 'fredfifteen', get_template_directory_uri() . '/public/css/fredfifteen.css', array(), '1.0.0', 'all' );
	// // wp_enqueue_script( 'script-name', get_template_directory_uri() . 'public/js/main.js', array(), '1.0.0', true );
}

add_action( 'wp_enqueue_scripts', 'fredfifteen_scripts' );
?>