var modal = $("#projekt-gallery-modal");
var modalClose = $("#projekt-gallery-modal-close");
var mobileNavigation = $("#projekt-gallery-modal-mobile");

window.projektGalleryModal = function(pathToHighQuality) {

      modal.toggleClass('visible');
      mobileNavigation.toggleClass('visible');
      console.log(pathToHighQuality);
}


// clickLink('{{ development }}')
