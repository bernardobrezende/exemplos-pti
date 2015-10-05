$(function() {
  'use strict';

  var api = {
      key: 'g8G1Q0cy5LmshMPmpfumKu4uq2JWp1Hb5xJjsnfo1hICRKhlMp',
      baseUrl: 'https://yoda.p.mashape.com/yoda?sentence='
    },
    frases = [
      'Oh boy, jQuery is my new love!',
      'I must understand promises!',
      'Does anyone have any doubt so far?'
    ],
    promises = [];

  var executaSequencial = (function(){
    var $olSequencial = $('#resultados-sequenciais');

    $.ajax({
      url: api.baseUrl.concat(frases[0]),
      headers: { 'X-Mashape-Key': api.key }
    }).done(function(response1) {
        $olSequencial.append($('<li>').text(response1));
        $.ajax({
          url: api.baseUrl.concat(frases[1]),
          headers: { 'X-Mashape-Key': api.key }
        }).done(function(response2) {
            $olSequencial.append($('<li>').text(response2));
            $.ajax({
              url: api.baseUrl.concat(frases[2]),
              headers: { 'X-Mashape-Key': api.key }
            }).done(function(response3) {
                $olSequencial.append($('<li>').text(response3));
            });
        });
    });
  })();

  var executaParalelo = (function() {
    frases.forEach(function(elem) {
      var req = $.ajax({
        url: api.baseUrl.concat(elem),
        headers: { 'X-Mashape-Key': api.key }
      });
      promises.push(req);
    });

    /*$.when(req1, req2, req3).done(function(res1, res2, res3) {

    });*/

    $.when.apply(null, promises).done(function() {
      var $olWhen = $('#resultados-when');
      console.log('All done!', arguments.forEach);
      var resultsArray = Array.prototype.slice.call(arguments);
      resultsArray.forEach(function(elem) {
        $olWhen.append(
          $('<li>').text(elem[0].trim())
        );
      });
    });
  })();
});