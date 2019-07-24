// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Initialize Foundation
// --------------------------------------------------

$(document).foundation();

//
// Custom JS
// --------------------------------------------------

$(document).ready(function(){

	var $win = $(window);

     $win.scroll(function () {
         if ($win.scrollTop() <= 0)
            $('#MainHeader').removeClass('scr');
         else {
         	 $('#MainHeader').addClass('scr');
         }
     });

});