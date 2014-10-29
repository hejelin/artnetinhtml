var app = angular.module('artnet');

app.controller('artnetController', ['$scope', function ($scope){
    $('#back-button').click(function(e) {
      window.history.back('#/');
    });

    $('.list-item').click(function(e) {
      window.location.assign('#/artpiece');
    });

    $('#rate').click(function(e) {
      $('#redbox').animate({margin: '-150px 0 0 145px'}, 2000);  
    });

    $('.like').click(function(e) {
      $('#likethis').attr('src', '/content/bilder/like-full.svg');
    });

    $('.latest-list-img').click(function(e) {
      window.location.assign('#/artpiece-rate');
    });

    $('#rate-me').click(function(e) {
      window.location.assign('#/artpiece-rate');
    });

    $('#sidemenu').click(hideMenu);

    $(document).on('swiperight', showMenu);

    $(document).on('swipeleft', hideMenu);

    $('#menu-indicator').click(toggleMenu);

    function toggleMenu() {
        $('#sidemenu').toggle('slide', 200);
    }

    function hideMenu() {
        $('#sidemenu').hide('slide', 200);
    }

    function showMenu() {
        $('#sidemenu').show('slide', 200);
    }
}]);
