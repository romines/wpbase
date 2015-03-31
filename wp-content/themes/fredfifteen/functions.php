<?php

add_action( 'wp_enqueue_scripts', 'email_adam' );
function email_adam(){
	$subjbody = 'Action added successfully';
	wp_mail( 'adam.romines@gmail.com', $subjbody, $subjbody);
}

// Add some text after the header
// add_action( '__after_header' , 'add_promotional_text' );
// function add_promotional_text() {
//
//   // If we're not on the home page, do nothing
//   if ( !is_front_page() )
//     return;
//
//   // Echo the html
//   echo "<div>Special offer! June only: Free chocolate for everyone!</div>";
// }

// function wpb_bad_script() {
// die('wpd_bad_script() did something');
// }
//
// add_action('wp_head', 'wpb_bad_script');


/**
 * Enqueue scripts and styles
 */


// add_action( 'wp_enqueue_scripts', 'fredfifteen_scripts' );
// "<link rel='stylesheet' type='text/css' href='" . get_template_directory_uri() . "/public/css/fredfifteen.css'>"
//
// function fredfifteen_scripts() {
// 	// print '<-- fredfifteen! -->';
// 	// // wp_deregister_script('jquery');
// 	//
// 	echo "<script type='text/javascript'>alert('fredfifteen_scripts fired');</script>";
// 	// wp_enqueue_style( 'fredfifteen', get_template_directory_uri() . '/public/css/fredfifteen.css', array(), '1.0.0', 'all' );
// 	// // wp_enqueue_script( 'script-name', get_template_directory_uri() . 'public/js/main.js', array(), '1.0.0', true );
// }


?>
