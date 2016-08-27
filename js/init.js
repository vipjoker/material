(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    
    
    

  }); // end of document ready
})(jQuery); // end of jQuery name space

function openDialog(event) {
  $('#modal1').openModal();
  // $('#modal1').closeModal();
}

function openBottomSheet(event) {
  $('#modal2').openModal();
}