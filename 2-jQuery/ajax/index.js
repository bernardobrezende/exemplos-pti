'use strict';

$(function() {
  $('#buscar').click(function() {

    var textoBusca = $('#textoBusca').val();
    
    var URL = 'http://content.guardianapis.com/search?q='+textoBusca+'&api-key=test'; 

    $.get(URL).done(function(res) {
      
      $('#noticias').html('');

      res.response.results.forEach(function(elem) {
        console.log(elem);
        $('#noticias').append(
          $('<li>').append(
            $('<a>')
              .attr('target', '_blank')
              .attr('href', elem.webUrl)
              .text(elem.webTitle)
          )
        );
      });
    })
    .fail(function(err) {
      console.error('Erro na requisição: %o', err);
    });
  });
});

$.get('URL', 
  // success
  function(res) {

  },
  // fail
  function(res) {

  }
);

$.get('URL').then(
  // success
  function(res) {

  },
  // fail
  function(res) {

  }
);









