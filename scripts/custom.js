/* custom.js  
 * - used for Masonry grid - requiring masonry.pkgd.min.js 
 */

(function($) {
  "use strict";
  $( document ).ready( function () {
    
    var $grid = $('.grid').masonry({
	      // options
	      itemSelector: '.thumb',
	      gutter: '.gutter-sizer',
	      columnWidth: '.grid-sizer',
	      percentPosition: true
	    });

    $grid.imagesLoaded().progress( function() {
    	$grid.masonry('layout');
    });
  });	

}(jQuery));

