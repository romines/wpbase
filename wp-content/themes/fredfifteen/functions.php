<?php

add_action( 'wp_head', 'my_scripts_method' );
function my_scripts_method() {
	// deregister built in jquery
	wp_deregister_script('jquery');
	// register and enqueue concattenated vendor and (TODO) theme styles
	wp_register_script('main_js', get_template_directory_uri() . '/public/js/main.js', array(), null, false);
	wp_enqueue_script('main_js', get_template_directory_uri() . '/public/js/main.js', array(), null, false);
	// enqueue styles
	wp_enqueue_style( 'fredfifteen', get_stylesheet_uri() );

}

?>
